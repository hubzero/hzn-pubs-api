(ns hubzero-pubs.classic
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            [cheshire.core :as json]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            [hubzero-pubs.errors :as errors]
            [mount.core :as mount :refer [defstate]]
            [hubzero-pubs.datacite :as doi]
            )
  )

(defstate file-root :start (get-in config [:files :root]))
(defstate file-dir  :start (get-in config [:files :dir]))
(defstate db        :start (:mysql config))

(def gb 1073741824)

(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})


(defn get-user [id]
  (sel-user { :user_id id} (_connection))
  )

(defn get-session [id]
  (sel-session {:session_id id} (_connection))
  )

(defn- _get-prj [id]
  (->
    (sel-prj {:id id} (_connection))
    (first)
    )
  )

(defn- _parse-params [s]
  (if s
    (->> (clojure.string/split s #"\n")
         (reduce (fn [m p] (as-> (clojure.string/split p #"=") $
                             (assoc m (keyword (first $)) (last $))
                             )) {})
         )   
    )
  )

(defn get-prj [id]
  ;; Get the project process the params - JBG
  (as-> (_get-prj id) $
    (assoc $ :params (_parse-params (:params $)))
    )
  )

(defn get-files [id]
  (as-> (get-prj id) $
    (:alias $)
    (str file-root $ file-dir)
    (fs/walk (fn [root dirs files]
               [(clojure.string/replace(.getAbsolutePath root) file-root "")
                dirs
                files]
               ) $)
    )
  )

(defn prj-size [id]
  (reduce (fn  [c [path _ files]]
            (reduce (fn [c f] 
                      (+ c (fs/size (str file-root "/" path "/" f)))) c files)
            ) 0 (get-files id))
  )

(defn- _usage-size [files]
  (reduce (fn [c f]
            (+ c (fs/size (str file-root "/" f)))
            ) 0 files)
  )

(defn- _usage-percent [prj size]
  (if-let [pq (get-in prj [:params :pubQuota]) ]
    (->> pq 
         (Integer/parseInt)
         (/ size)
         (* 100)
         (float)
         (clojure.core/format "%.2f")
         ) 0)
  )

(defn- _usage-max [prj]
  (if-let [pq (get-in prj [:params :pubQuota])]
    (->> (/ (Integer/parseInt pq) gb)
         (float)
         (clojure.core/format "%.2f" )
         ) 0)
  )

(defn usage [id files]
  (let [size (_usage-size files)]
    (as-> (get-prj id) $
      {:size (clojure.core/format "%.2f" (float (/ size gb))) 
       :units "GB"
       :percent (_usage-percent $ size) 
       :max (_usage-max $)
       }
      )
    )
  )

(defn get-licenses []
  (sel-licenses (_connection))
  )

(defn get-users [id]
  (sel-prj-users {:id id} (_connection))
  )

(defn search-users [name]
  (sel-users {:name name} (_connection))
  )

(defn search-citations [doi]
  (sel-citations {:doi (str "%" doi "%")} (_connection))
  )

(defn create-citation [m]
  (->
    (reduce (fn [c k] (if (k c) c (assoc c k nil))) m
            [:type :title :year :month :author :journal :volume :pages :isbn :doi :abstract :publisher :url :issue :series :book :citation :eprint :edition])
    (insert-citation<! (_connection)))

  )

(defn get-citation-types []
  (sel-citation-types (_connection))
  )

(defn create-pub [p]
  (insert-pub<! {:category 1
                 :master_type "1"
                 :project_id (:prj-id p)
                 :access 0
                 :created_by (:user-id p)
                 :created (f/unparse (:mysql f/formatters) (t/now))
                 } (_connection))
  )

(defn- _params-str [pub]
  (str
    (if (:ack pub) "licenseagreement=1\n")
    ;; Is there more, who knows - JBG
    )
  )

(defn _fmt-pub-date [dstr]
  (as-> (f/formatter "MM/dd/yyyy") $
    (f/parse $ dstr)
    (f/unparse (:mysql f/formatters) $)
    )
  )

(defn- _doi [p]
  (doi/get-datacite p)
  )

(defn- _mutate
  "Fields come from client with different names, map them - JBG"
  [p]
  (merge p {:created_by (:user-id p)
            :license_type (:id (:licenses p))
            :params (_params-str p)
            :release_notes (:release-notes p "")
            :published_up (if-let [dstr (:publication-date p)] (_fmt-pub-date dstr))
            :description (:description p "")
            :abstract (:abstract p "")
            :doi (or (:doi p) (if (= 1 (:state p)) (_doi p)))
            :popupURL (:url p)
            :state (or (:state p) 3)  
            })
  )

(defn create-pub-version [pub-id p]
  (-> (_mutate p)
      (merge {:publication_id pub-id
              :main 1
              :created (f/unparse (:mysql f/formatters) (t/now))
              :version_number 1
              :access 0
              :secret (utils/rand-str 10)
              })
      (insert-pub-version<! (_connection))
      )
  )

(defn- _update-pub-version [p]
  (-> (first (sel-pub-version {:id (:ver-id p)} (_connection)))
      (merge (_mutate p))
      (merge {:modified (f/unparse (:mysql f/formatters) (t/now)) 
              :modified_by (:user-id p)
              })
      (update-pub-version! (_connection))
      )
  )

(defn add-file [pub ver-id pub-id i f type]
  (insert-attachment<! {:publication_version_id ver-id 
                        :publication_id pub-id
                        :created (f/unparse (:mysql f/formatters) (t/now))
                        :created_by (:user-id pub)
                        :role 1
                        :type "file"
                        :ordering i
                        :element_id (type {:content 1 :images 2 :support-docs 3})
                        :path (:path f)
                        } (_connection))
  )

(defn- _update-pub-files [p type]
  (let [ver-id (:ver-id p)
        vf (group-by :path (sel-attachment-with-type {:publication_version_id ver-id
                                                      :element_id (type {:content 1 :images 2 :support-docs 3})
                                                      } (_connection)))
        pf (group-by :path (type p))]

    ;; New files add them - JBG
    (doall (map-indexed (fn [i path]
                          (if (not (vf path))
                            (add-file p ver-id (:pub-id p) i (first (pf path)) type)
                            )) (keys pf)))
    ;; Delete removed files - JBG
    (doall (map (fn [path]
                  (if (not (pf path))
                    (del-attachment! {:id (:id (first (vf path)))} (_connection))
                    )) (keys vf)))
    )
  )

(defn add-author [pub ver-id i a]
  (insert-author<! {:publication_version_id ver-id
                    :user_id (:id a)
                    :ordering i
                    :name (:name a)
                    :firstname (:firstname a "")
                    :lastname (:lastname a "")
                    :org (:organization a "")
                    :credit ""
                    :created (f/unparse (:mysql f/formatters) (t/now))
                    :created_by (:user-id pub)
                    :status 1
                    :project_owner_id (:prj-id pub)
                    } (_connection))
  )

(defn- _update-author [i a]
  (update-author! {:ordering i
                   :name (:name a)
                   :firstname (:firstname a "")
                   :lastname (:lastname a "")
                   :org (:organization a "")
                   } (_connection))
  )

(defn _update-authors [p]
  (let [va (group-by :user_id (sel-pub-authors {:publication_version_id (:ver-id p)} (_connection)))
        pa (:authors-list p)
        ]
    (doall (map-indexed (fn [i a] (if (not (va a))
                                    (add-author p (:ver-id p) i (pa a))
                                    (_update-author i (pa a))
                                    )) (keys pa)))
    (doall (map (fn [a] (if (not (pa a))
                          (del-author! {:publication_version_id (:ver-id p)
                                        :user_id a
                                        } (_connection))
                          )) (keys va)))
    )
  )

(defn get-tag [s]
  (first (sel-tag {:tag s} (_connection)))
  )

(defn- _add-tag [s pub]
  (insert-tag<! {:admin 0
                 :raw_tag s 
                 :description ""
                 :created (f/unparse (:mysql f/formatters) (t/now))
                 :created_by (:user-id pub)
                 :tag (clojure.string/replace s #"[^\w]+" "")
                 :modified (f/unparse (:mysql f/formatters) (t/now))
                 :modified_by (:user-id pub)
                 } (_connection))
  )

(defn- _get-tag-by-id [id]
  (first (sel-tag-by-id {:id id} (_connection)))
  )

(defn get-tags [ver-id]
  (->>
    (sel-tag-objs {:object_id ver-id
                   :tbl "publications"
                   } (_connection))
    (map (fn [to]
           (:raw_tag (_get-tag-by-id (:tagid to)))
           ))
    )
  )

(defn tag-obj-exists? [tag ver-id pub]
  (> (count (sel-tag-obj {:tag_id (:id tag)
                          :object_id ver-id
                          :tbl "publications"
                          } (_connection))) 0)
  )

(defn- _add-tag-obj [tag ver-id pub]
  (if (not (tag-obj-exists? tag ver-id pub)) 
    (insert-tag-obj<! {:tbl "publications"
                       :object_id ver-id
                       :tag_id (:id tag)
                       :strength 1
                       :tagger_id (:user-id pub) 
                       :tagged_on (f/unparse (:mysql f/formatters) (t/now))
                       } (_connection))
    )
  )

(defn- _update-tag [tag pub]
  (update-tag! (-> tag
                   (update :objects inc)
                   (assoc :modified (f/unparse (:mysql f/formatters) (t/now)))
                   (assoc :modified_by (:user-id pub))
                   ) (_connection))
  )

(defn- _log-tag [tag action pub]
  (insert-tag-log<! {:tag_id (:id tag)
                     :action action
                     :json (json/generate-string tag)
                     :time (f/unparse (:mysql f/formatters) (t/now))
                     :user_id (:user-id pub)
                     :actor_id (:user-id pub)
                     } (_connection))
  )

(defn- _tag [tag ver-id pub]
  (_add-tag-obj tag ver-id pub)
  (_update-tag tag pub)
  (_log-tag tag "tag_edited" pub)
  )

(defn _create-tag [s pub]
  (as-> (_add-tag s pub) $
    (:generated_key $)
    (sel-tag-by-id {:id $} (_connection))
    (first $)
    (_log-tag $ "tag_created" pub)
    )
  )

(defn add-tag [pub ver-id s]
  (if-let [tag (get-tag s)]
    (_tag tag ver-id pub)
    (_create-tag s pub)
    ) 
  )

(defn _remove-tag [ver-id tag-id]
  (del-tag-obj! {:tag_id tag-id
                 :object_id ver-id
                 } (_connection))
  )

(defn _update-tags [p]
  (let [ver-tags (get-tags (:ver-id p))
        ptags (:tags p)
        ]
    (doall (map (fn [t] (if (not (some #{t} ptags))
                          (_remove-tag (:ver-id p) (:id (get-tag t)))
                          )) ver-tags))
    (doall (map (fn [t] (if (not (some #{t} ver-tags))
                          (add-tag p (:ver-id p) t)
                          )) ptags))
    )
  )

(defn- _filename [s]
  (->> (clojure.string/split s #"/")
       (peek)
       )
  )

(defn _files [files]
  (reduce (fn [c f]
            (update c ({1 :content 2 :images 3 :support-docs} (:element_id f)) conj {:path (:path f) :name (_filename (:path f)) :id (:id f)})
            ) {} files)
  )

(defn get-authors [ver-id]
  (->>
    (sel-pub-authors {:publication_version_id ver-id} (_connection))
    (reduce (fn [m a]
              (assoc m (:user_id a) {:id (:user_id a)
                                     :name (:name a)
                                     :organization (:organization a)
                                     })) {})
    )
  )

(defn get-license [lic-id]
  (first (sel-license-by-id {:id lic-id} (_connection)))
  )

(defn add-citation [pub ver-id c]
  (insert-citation-assoc<! {:cid (:id c)
                            :oid ver-id
                            :type nil
                            :tbl "publications"
                            } (_connection))
  )

(defn _update-citations [p]
  (let [vc (group-by :id (sel-citation-assocs-oid {:oid (:ver-id p)} (_connection)))
        pc (group-by :id (:citations p))
        ]
    (doall (map (fn [c] (if (not (vc c))
                          (add-citation p (:ver-id p) (first (vc c)))
                          )) (keys pc)))
    (doall (map (fn [c] (if (not (pc c))
                          (del-citation-assoc! {:id c} (_connection))
                          )) (keys vc)))
    )
  )

(defn- _get-pub [pub-ver]
  (let [ver-id (:id pub-ver)
        pub (first (sel-pub {:id (:publication_id pub-ver)} (_connection)))
        files (sel-attachment {:publication_version_id ver-id} (_connection))
        params (_parse-params (:params pub-ver))
        citations (sel-citation-assocs-oid {:oid ver-id} (_connection))
        history (sel-curation-hist {:publication_version_id ver-id} (_connection))
        ]
    (->
      {:prj-id (:project_id pub)
       :user-id (:created_by pub)
       :pub-id (:publication_id pub-ver)
       :ver-id ver-id
       :title (:title pub-ver)
       :abstract (:abstract pub-ver)
       :publication-date (if-let [d (:published_up pub-ver)]
                           (f/unparse (f/formatter "MM/dd/yyyy") (c/from-long (.getTime d))))
       :ack (= (:licenseagreement params) "1")
       :authors-list (get-authors ver-id)
       :licenses (get-license (:license_type pub-ver))
       :release-notes (:release_notes pub-ver)
       :tags (get-tags ver-id)
       :doi (:doi pub-ver)
       :citations (map #(first (sel-citation-by-id % (_connection))) citations)
       :url (:popupurl pub-ver)
       :comments (:comment (last history))
       }
      (merge (_files files))
      )
    )
  )

(defn get-pub [ver-id]
  (if-let [ pub-ver (first (sel-pub-version {:id ver-id} (_connection))) ]
    (_get-pub pub-ver)
    ) 
  )

(defn- _add-curation-hist [ver-id p]
  (as-> (get-pub ver-id) $
    (insert-curation-hist<! {:publication_version_id ver-id 
                             :created (f/unparse (:mysql f/formatters) (t/now))
                             :created_by (:user-id p)
                             :changelog ""
                             :curator 0 
                             :oldstatus (:state $ 3)
                             :newstatus (:state p 3)
                             :comment (:comments p)
                             } (_connection))))

(defn valid? [pub]
  (reduce (fn [b f]
            (and b (f pub)) 
            ) true [ :abstract :title :publication-date :authors-list ])
  )

(defn- _save-pub [pub]
  (let [pub-id (-> (create-pub pub) (:generated_key)) 
        ver-id (-> (create-pub-version pub-id pub) (:generated_key))
        ]
    (doall (map #(add-tag pub ver-id %) (:tags pub)))
    (doall (map #(add-citation pub ver-id %) (:citations pub)))                   
    (doall (map-indexed (fn [i a] (add-author pub ver-id i a)) (vals (:authors-list pub))))
    (doall (map-indexed (fn [i f] (add-file pub ver-id pub-id i f :content)) (:content pub)))
    (doall (map-indexed (fn [i f] (add-file pub ver-id pub-id i f :images)) (:images pub)))
    (doall (map-indexed (fn [i f] (add-file pub ver-id pub-id i f :support-docs)) (:support-docs pub)))
    (_add-curation-hist ver-id pub)
    {:pub-id pub-id :ver-id ver-id}
    )
  )

(defn- _update-pub [p]
  (_update-pub-version p)
  (_update-pub-files p :content)
  (_update-pub-files p :images)
  (_update-pub-files p :support-docs)
  (_update-authors p)
  (_update-citations p)
  (_update-tags p)
  (_add-curation-hist (:ver-id p) p)
  {:pub-id (:pub-id p) :ver-id (:ver-id p)}
  )

(defn save-pub [p]
  (prn "SAVING...." p)
  (if (:ver-id p)
    (_update-pub p)
    (_save-pub p)
    ) 
  )

(comment

  (def pub-ver (first (sel-pub-version {:id ver-id}) (_connection)))
  (prn pub-ver)

  (:params pub-ver)

  (def params (_parse-params (:params pub-ver)))
  (prn params)

  (def files (sel-attachment {:publication_version_id ver-id}))
  (prn files)
  (_files files)


  (get-license 2)


  (first (get-tag "foooo"))

  (f/show-formatters)
  (t/now)

  (f/unparse (:mysql f/formatters) (t/now))

  config

  (search-users "%j%")

  (get-prj 1)

  (get-files 1)

  (prj-size 1)

  (usage 1 ["prjfoobar/files/foo"
            "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png"])

  (get-user 1001)

  (get-licenses)

  (get-prj-users 1)

  (search-citations "10")

  (get-citation-types)

  (create-citation {})

  (create-citation {:type 1
                    :title "Foobar"
                    :year "1996"
                    :month "January"
                    :author "JBG"
                    :journal "Journal for Advanced Foobaring"
                    :volume "666"
                    :pages "123-124"
                    :isbn "978-3-16-148410-0"
                    :doi "10.1000/xyz123"
                    :abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    :publisher "Grapes & Apples"
                    :url "http://example.com"
                    })


  (def pub-id (-> (create-pub pub) (:generated_key))) 
  (prn pub-id)

  (def ver-id (-> (create-pub-version pub-id pub) (:generated_key)))
  (prn ver-id)

  (prn (:tags pub))

  (get-tags ver-id)

  (def tag (get-tag "admin"))
  (prn tag)
  (tag-obj-exists? tag ver-id pub)

  (def ids (save-pub pub))
  (prn ids)
  (def ver-id (:ver-id ids))

  ver-id

  (def ver-id 113)
  (def p (get-pub ver-id))
  p

  (save-pub (assoc p :state 1))


  (prn (:notes p))

  (prn (:comments p)) 

  (prn (:publication-date p))


  (prn (count (:citations p)))
  (prn (:authors-list p))
  (prn (:release-notes p))
  (prn (:title p))
(prn (:content p))
(prn (:pub-id p))

p

(->
  (assoc p
         :notes "Updated!"
         :title "I'm updated."
         :content [{:path "prjfoobar/files/foo", :name "foo"}]
         :authors-list {1001 {:id 1001 :name "J B G" :organization ""}
                        ;1000 {:id 1000 :name "admin" :organization ""}
                        },
         :citations [{:id 2}]
         :tags ["bar" "foo" "admin"]
         :publication-date "01/31/2020"
         :comments "Admin note..."
         :url "http://example.com"
         )
  (save-pub)
  )

(prn p)

(prn (:authors-list p))

(def authors (get-authors ver-id))
(prn authors)

(prn pub)

(def pub {:_id "5e13137085b4b9002ed5dc58",
          :doi "10.1000/xyz123"
          :prj-id "1",
          :authors-list {1001 {:id 1001, :name "J B G", :organization ""}},
          :content [{:path "prjfoobar/files/foo", :name "foo"} {:path "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png", :name "Screenshot from 2019-09-09 20-35-28.png"}]
          :images {},
          :support-docs {},
          :title "Foorepl",
          :user-id 1001
          :licenses {:restriction nil, :opensource false, :name "cc", :agreement 1, :icon "/components/com_publications/assets/img/logos/cc.gif", :title "CC0 - Creative Commons", :customizable 0, :ordering 2, :active 1, :id 2, :info "CC0 enables scientists, educators, artists and other creators and owners of copyright- or database-protected content to waive those interests in their works and thereby place them as completely as possible in the public domain, so that others may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or database law.", :url "http://creativecommons.org/about/cc0", :main 1, :derivatives 1, :text ""}
          :citations
          [{:id 1} {:id 2}],
          :ack true
          :publication-date "01/16/2020"
          :tags ["admin" "bar" "foo"]
          :url "http://example.com"
          }
  )


(utils/rand-str 10)

(sel-attachment {:publication_version_id ver-id})



)
