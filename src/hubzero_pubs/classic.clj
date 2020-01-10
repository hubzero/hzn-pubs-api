(ns hubzero-pubs.classic
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            [cheshire.core :as json]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            )
  )

(def file-root (get-in config [:files :root]))
(def file-dir (get-in config [:files :dir]))

(def db (:mysql config))

(def gb 1073741824)

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn get-user [id]
  (sel-user { :user_id id})
  )

(defn get-session [id]
  (sel-session {:session_id id})
  )

(defn- _get-prj [id]
  (->
    (sel-prj {:id id})
    (first)
    )
  )

(defn- _parse-params [p]
  (assoc p :params (reduce (fn [m p]
                             (as-> (clojure.string/split p #"=") $
                               (assoc m (keyword (first $)) (second $))
                               )
                             ) {} (clojure.string/split (:params p) #"\n")))
  )

(defn get-prj [id]
  ;; Get the project process the params - JBG
  (->> (_get-prj id)
       (_parse-params)
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
                      (prn file-dir path f) 
                      (+ c (fs/size (str file-root "/" path "/" f)))) c files)
            ) 0 (get-files id))
  )

(defn- _usage-size [files]
  (reduce (fn [c f]
            (+ c (fs/size (str file-root "/" f)))
            ) 0 files)
  )

(defn usage [id files]
  (let [size (_usage-size files)]
    (as-> (get-prj id) $
      {:size (clojure.core/format "%.2f" (float (/ size gb))) 
       :units "GB"
       :percent (->> (get-in $ [:params :pubQuota])
                     (Integer/parseInt)
                     (/ size)
                     (* 100)
                     (float)
                     (clojure.core/format "%.2f")
                     )
       :max (->> (/ (Integer/parseInt (get-in $ [:params :pubQuota])) gb)
                 (float)
                 (clojure.core/format "%.2f" )
                 )
       }
      )   
    )
  )

(defn get-licenses []
  (sel-licenses)
  )

(defn get-users [id]
  (sel-prj-users {:id id})
  )

(defn search-users [name]
  (sel-users {:name name})
  )

(defn search-citations [doi]
  (sel-citations {:doi (str "%" doi "%")})
  )

(defn create-citation [m]
  (->>
    (reduce (fn [c k] (if (k c) c (assoc c k nil))) m
            [:type :title :year :month :author :journal :volume :pages :isbn :doi :abstract :publisher :url :issue :series :book :citation :eprint :edition])
    (insert-citation<!)
    )
  )

(defn get-citation-types []
  (sel-citation-types)
  )

(defn create-pub [p]
  (insert-pub<! {:category 1
                 :master_type "1"
                 :project_id (:prj-id p)
                 :access 0
                 :created_by (:user-id p)
                 :created (f/unparse (:mysql f/formatters) (t/now))
                 })
  )

(defn _params-str [pub]
  (str
    (if (:ack pub) "licenseagreement=1\n")
    ;; Is there more, who knows - JBG
    )
  )

(defn _fmt-pub-date [dstr]
  (as-> (clojure.string/split dstr #" ") $
    (f/parse (f/formatter "dd MMMM yyyy") (clojure.string/join " " 
                                                               [
                                                               (re-find #"\d+" (first $))
                                                               (second $)
                                                               (last $)  
                                                                ]
                                                               
                                                               ))
    (f/unparse (:mysql f/formatters) $)
    )
  )

(_fmt-pub-date "11th January 2020")

(defn create-pub-version [pub-id p]
  (insert-pub-version<! {:publication_id pub-id
                         :main 1
                         :state 3
                         :title (:title p) 
                         :description (:description p "")
                         :abstract (:abstract p "")
                         :created (f/unparse (:mysql f/formatters) (t/now))
                         :created_by (:user-id p)
                         :version_number 1
                         :license_type (:id (:licenses p))
                         :access 0
                         :secret (utils/rand-str 10)
                         :params (_params-str p)
                         :release_notes (:notes p "")
                         :published_up (_fmt-pub-date (:publication-date p))
                         })
  )

(defn add-author [ver-id pub i]
  (let [a (nth (vals (:authors-list pub)) i)]
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
                      })
    )
  )

(defn add-file [pub-id ver-id pub i type]
  (let [file (nth (type pub) i)]
    (insert-attachment<! {:publication_version_id ver-id 
                          :publication_id pub-id
                          :created (f/unparse (:mysql f/formatters) (t/now))
                          :created_by (:user-id pub)
                          :role 1
                          :type "file"
                          :ordering i
                          :element_id (type {:content 1 :images 2 :support-docs 3})
                          :path (:name file) ; Not sure why name? - JBG
                          })
    )
  )

(defn get-tag [s]
  (first (sel-tag {:tag s}))
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
                 })
  )

(defn tag-obj-exists? [tag ver-id pub]
  (> (count (sel-tag-obj {:tag_id (:id tag)
                          :object_id ver-id
                          :tbl "publications"
                          })) 0)
  )

(defn- _add-tag-obj [tag ver-id pub]
  (if (not (tag-obj-exists? tag ver-id pub)) 
    (insert-tag-obj<! {:tbl "publications"
                       :object_id ver-id
                       :tag_id (:id tag)
                       :strength 1
                       :tagger_id (:user-id pub) 
                       :tagged_on (f/unparse (:mysql f/formatters) (t/now))
                       })
    )
  )

(defn- _update-tag [tag pub]
  (update-tag! (-> tag
                   (update :objects inc)
                   (assoc :modified (f/unparse (:mysql f/formatters) (t/now)))
                   (assoc :modified_by (:user-id pub))
                   ))
  )

(defn- _log-tag [tag action pub]
  (insert-tag-log<! {:tag_id (:id tag)
                     :action action
                     :json (json/generate-string tag)
                     :time (f/unparse (:mysql f/formatters) (t/now))
                     :user_id (:user-id pub)
                     :actor_id (:user-id pub)
                     })
  )

(defn- _tag [tag ver-id pub]
  (prn "Updating old tag..." (:id tag))
  (_add-tag-obj tag ver-id pub)
  (_update-tag tag pub)
  (_log-tag tag "tag_edited" pub)
  )

(defn _create-tag [s pub]
  (prn "Creating new tag...")
  (as-> (_add-tag s pub) $
    (:generated_key $)
    (sel-tag-by-id {:id $}) 
    (first $)
    (_log-tag $ "tag_created" pub)
    )
  )

(defn tag [pub ver-id i]
  (let [s (nth (:tags pub) i)]
    (if-let [tag (get-tag s)]
      (_tag tag ver-id pub)
      (_create-tag s pub)
      )
    )
  )

(comment


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

(tag pub ver-id 0)

(_create-tag (utils/rand-str 10) pub)

(def tag (get-tag "admin"))
(prn tag)
(tag-obj-exists? tag ver-id pub)

(add-author ver-id pub 0)

(add-file pub-id ver-id pub 0 :content)

  (prn pub)

  (def pub {:_id "5e13137085b4b9002ed5dc58",
            :prj-id "1",
            :authors-list {1001 {:id 1001, :name "J B G", :organization ""}},
            :content [{:path "prjfoobar/files/foo", :name "foo"} {:path "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png", :name "Screenshot from 2019-09-09 20-35-28.png"}]
            :images {},
            :support-docs {},
            :title "Foorepl",
            :user-id 1001
            :licenses {:restriction nil, :opensource false, :name "cc", :agreement 1, :icon "/components/com_publications/assets/img/logos/cc.gif", :title "CC0 - Creative Commons", :customizable 0, :ordering 2, :active 1, :id 2, :info "CC0 enables scientists, educators, artists and other creators and owners of copyright- or database-protected content to waive those interests in their works and thereby place them as completely as possible in the public domain, so that others may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or database law.", :url "http://creativecommons.org/about/cc0", :main 1, :derivatives 1, :text ""}
            :citations
            [{:institution "",
              :date_publish nil,
              :software_use nil,
              :address "",
              :format "apa",
              :fundedby 0,
              :publisher "",
              :key nil,
              :series "",
              :number "8",
              :school "",
              :short_title "",
              :custom3 nil,
              :call_number "",
              :uid 1292,
              :formatted "",
              :res_edu nil,
              :author_address "",
              :ref_type "",
              :params "{\"exclude\":\"\",\"rollover\":1}",
              :abstract
              "<p>Using transparent microfluidic cells to study the two-phase properties of a synthetic porous medium, we establish that the interfacial area per volume between nonwetting and wetting fluids lifts the ambiguity associated with the hysteretic relationship between capillary pressure and saturation in porous media. The interface between the nonwetting and wetting phases is composed of two subsets: one with a unique curvature determined by the capillary pressure, and the other with a distribution of curvatures dominated by disjoining pressure. This work provides experimental support for recent theoretical predictions that the capillary-dominated subset plays a role analogous to a state variable. Any comprehensive description of multiphase flow properties must include this interfacial area with the traditional variables of pressure and fluid saturation.</p>",
              :month "April",
              :date_accept nil,
              :type "2",
              :created #inst "2013-09-24T17:39:09.000-00:00",
              :howpublished "",
              :organization nil,
              :isbn "",
              :scope "hub",
              :journal "Geophysical Research Letters",
              :doi "10.1029/2003GL019282",
              :keywords "",
              :title
              "Linking Pressure and Saturation through Interfacial Areas in Porous Media",
              :pages "",
              :volume "310",
              :note "",
              :author
              "Cheng, J.-T., Pyrak-Nolte, L. J., Nolte, D. D. and N. J. Giordano",
              :chapter nil,
              :year "2004",
              :date_submit nil,
              :research_notes "",
              :language nil,
              :label nil,
              :id 1,
              :notes nil,
              :eprint
              "http://www.physics.purdue.edu/rockphys/docs/publications/porous-media/LinkingPressure.pdf",
              :scope_id "0",
              :exp_list_exp_data nil,
              :url "http://onlinelibrary.wiley.com/doi/10.1029/2003GL019282/full",
              :editor "",
              :custom2 nil,
              :affiliated 1,
              :edition "",
              :custom1 nil,
              :location "",
              :cite "",
              :published 1,
              :custom4 nil,
              :accession_number "",
              :booktitle "",
              :exp_data nil}],
            :ack true
            :publication-date "11th January 2020"
            :tags ["admin" "bar" "foo"]
            }
    )


(utils/rand-str 10)

)
