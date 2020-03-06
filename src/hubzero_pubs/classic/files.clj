(ns hubzero-pubs.classic.files
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn add [pub-id ver-id user-id i f type]
  (insert-attachment<! {:publication_version_id ver-id 
                        :publication_id pub-id
                        :created (f/unparse (:mysql f/formatters) (t/now))
                        :created_by user-id 
                        :role 1
                        :type "file"
                        :ordering i
                        :element_id (type {:content 1 :images 2 :support-docs 3})
                        :path (:path f)
                        } (_connection))
  )

(defn rm [file-id]
  (del-attachment! {:id file-id} (_connection))
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
 
