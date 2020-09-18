(ns pubs.models.series
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [digest :as digest]
            [yesql.core :refer [defqueries]]
            [clojure.java.io :as io]
            [clojure.java.jdbc :as jdbc]
            [pubs.config :refer [config]]
            [pubs.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql")
(defn _connection [] {:connection db})

(defn- path [pub]
  (str
    (:host pub)
    "/publications/"
    (:id pub)
    "/"
    (:version_number pub)
    )
  )

(defn get-attachment [ver-id pub]
  (->>
    (sel-attachment {:publication_version_id ver-id
                     :element_id 1 
                     :path (path pub)
                     :content_hash "" 
                     } (_connection))
    (first)
    )
  )

(defn add [pub-id ver-id user-id pub]
  (if-let [a (get-attachment ver-id pub)]
    a
    (as->
      (insert-attachment<! {:publication_version_id ver-id 
                            :publication_id pub-id
                            :created (f/unparse (:mysql f/formatters) (t/now))
                            :created_by user-id 
                            :role 1
                            :type "publication"
                            :ordering (:index pub)
                            :element_id 1
                            :path (path pub)
                            :vcs_hash ""
                            :vcs_revision ""
                            :content_hash ""
                            :title (:title pub)
                            :object_id (:id pub)
                            } (_connection)) $
      (:generated_key $)
      (first (sel-attachment-by-id {:id $} (_connection)))
      )
    )
  )

(defn ls [ver-id]
  (sel-attachments {:publication_version_id ver-id :type "publication"} (_connection))
  )

(defn edit [attach-id f]
  (update-attachment! {:id attach-id 
                       :ordering (:index f 0)
                       } (_connection))
  (first (sel-attachment-by-id {:id attach-id} (_connection)))
  )

(defn rm [attach-id]
  (if-let [f (sel-attachment-by-id {:id attach-id} (_connection))]
    (if (del-attachment! {:id attach-id} (_connection))
      f
      {:status 500}
      )
    {:status 404}
    )
  )

