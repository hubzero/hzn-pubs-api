(ns pubs.models.databases
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

(defn- path [db]
  (str
    "dataviewer/view/publication:dsl/"
    (:database_name db)
    "/?v="
    (:object_revision db)
    )
  )

(defn get-attachment [ver-id db]
  (->>
    (sel-attachment {:publication_version_id ver-id
                     :element_id 1 
                     :path (path db)
                     :content_hash "" 
                     } (_connection))
    (first)
    )
  )

(defn add [pub-id ver-id user-id db]
  (if-let [a (get-attachment ver-id db)]
    a
    (as->
      (insert-attachment<! {:publication_version_id ver-id 
                            :publication_id pub-id
                            :created (f/unparse (:mysql f/formatters) (t/now))
                            :created_by user-id 
                            :role 1
                            :type "data"
                            :ordering (:index db)
                            :element_id 1
                            :path (path db)
                            :vcs_hash ""
                            :vcs_revision ""
                            :content_hash ""
                            :title (:title db)
                            } (_connection)) $
      (:generated_key $)
      (first (sel-attachment-by-id {:id $} (_connection)))
      )
    )
  )

(defn ls [ver-id]
  (sel-attachments {:publication_version_id ver-id :type "data"} (_connection))
  )

(defn edit [db-id f]
  (update-attachment! {:id db-id
                       :ordering (:index f 0)
                       } (_connection))
  (first (sel-attachment-by-id {:id db-id} (_connection)))
  )

(defn rm [db-id]
  (if-let [f (sel-attachment-by-id {:id db-id} (_connection))]
    (if (del-attachment! {:id db-id} (_connection))
      f
      {:status 500}       
      ) 
    {:status 404} 
    )
  )


