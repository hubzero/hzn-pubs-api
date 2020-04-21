(ns hubzero-pubs.models.pubs
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            [hubzero-pubs.datacite :as doi]
            [hubzero-pubs.models.tags :as tags]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn create-pub [user-id p]
  (insert-pub<! {:category 1
                 :master_type "1"
                 :project_id (:prj-id p)
                 :access 0
                 :created_by user-id 
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
  [user-id p]
  (merge p {:title (:title p "")
            :created_by user-id 
            :license_type (:license_type p)
            :params (_params-str p)
            :release_notes (:release-notes p "")
            :published_up (if-let [dstr (:publication-date p)] (_fmt-pub-date dstr))
            :description (:description p "")
            :abstract (:abstract p "")
            :doi (if (and (= (count (:doi p)) 0) (= 1 (:state p))) 
                   (_doi p)
                   (:doi p ""))
            :popupURL (:url p)
            :state (or (:state p) 3)  
            })
  )

(defn create-pub-version [pub-id user-id p]
  (-> (_mutate user-id p)
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

(defn- _update-pub-version [user-id p]
  (-> (first (sel-pub-version {:id (:ver-id p)} (_connection)))
      (merge (_mutate user-id p))
      (merge {:modified (f/unparse (:mysql f/formatters) (t/now)) 
              :modified_by user-id
              })
      (update-pub-version! (_connection))
      )
  )

(defn- _get-pub [pub-ver]
  (let [ver-id (:id pub-ver)
        pub (first (sel-pub {:id (:publication_id pub-ver)} (_connection)))
        ;files (sel-attachment {:publication_version_id ver-id} (_connection))
        params (utils/parse-params (:params pub-ver))
        ;citations (sel-citation-assocs-oid {:oid ver-id} (_connection))
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
       ;:authors-list (get-authors ver-id)
       ;:licenses (get-license (:license_type pub-ver))
       :license_type (:license_type pub-ver)
       :release-notes (:release_notes pub-ver)
       ;:tags (tags/get-all ver-id)
       :doi (:doi pub-ver)
       ;:citations (map #(first (sel-citation-by-id % (_connection))) citations)
       :url (:popupurl pub-ver)
       :comments (:comment (last history))
       :state (:state pub-ver)
       }
      ;(merge (_files files))
      )
    )
  )

(defn get-pub [ver-id]
  (if-let [ pub-ver (first (sel-pub-version {:id ver-id} (_connection))) ]
    (_get-pub pub-ver)
    ) 
  )

(defn- _add-curation-hist [ver-id user-id p]
  (as-> (get-pub ver-id) $
    (insert-curation-hist<! {:publication_version_id ver-id 
                             :created (f/unparse (:mysql f/formatters) (t/now))
                             :created_by user-id 
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

(defn- _save-pub [user-id pub]
  (let [pub-id (-> (create-pub user-id pub) (:generated_key)) 
        ver-id (-> (create-pub-version pub-id user-id pub) (:generated_key))
        ]
    (_add-curation-hist ver-id user-id pub)
    {:pub-id pub-id :ver-id ver-id}
    )
  )

(defn- _update-pub [user-id p]
  (_update-pub-version user-id p)
  (_add-curation-hist (:ver-id p) user-id p)
  {:pub-id (:pub-id p) :ver-id (:ver-id p)}
  )

(defn save-pub [user-id p]
  (if (:ver-id p)
    (_update-pub user-id p)
    (_save-pub user-id p)
    ) 
  )

(comment

  (save-pub 1001 {:prj-id "1", :authors-list {}, :content (), :images (), :support-docs ()})

 
  )

