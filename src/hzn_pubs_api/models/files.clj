(ns hzn-pubs-api.models.files
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [digest :as digest]
            [yesql.core :refer [defqueries]]
            [clojure.java.io :as io]
            [clojure.java.jdbc :as jdbc]
            [hzn-pubs-api.config :refer [config]]
            [hzn-pubs-api.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql")
(defn _connection [] {:connection db})

(defn- _content-hash [f]
  (digest/sha-1 (io/as-file (str (get-in config [:files :root]) (:path f))))
  )

(defn- _type [f]
  ((:type f) {:content 1
              :images 2
              :support-docs 3})
  )

(defn get-attachment [ver-id f]
  (->>
    (sel-attachment {:publication_version_id ver-id
                     :element_id (_type f)
                     :path (:path f)
                     :content_hash (_content-hash f)
                     } (_connection))
    (first)
    )
  )

(defn add [pub-id ver-id user-id f]
  (if-let [a (get-attachment ver-id f)]
    {:generated_key (:id a)}
    (insert-attachment<! {:publication_version_id ver-id 
                          :publication_id pub-id
                          :created (f/unparse (:mysql f/formatters) (t/now))
                          :created_by user-id 
                          :role 1
                          :type "file"
                          :ordering (:index f) 
                          :element_id (_type f) 
                          :path (:path f)
                          :vcs_hash (:vcs_hash f "")
                          :vcs_revision (:vcs_revision f "")
                          :content_hash (_content-hash f)
                          } (_connection))  
    )
  )

(defn rm [file-id]
  {:status (if (del-attachment! {:id file-id} (_connection)) 200 500)}
  )

(defn- _filename [s]
  (->> (clojure.string/split s #"/")
       (peek)
       )
  )

(defn ls [ver-id]
  (->>
    (sel-attachments {:publication_version_id ver-id} (_connection))
    (reduce (fn [c f]
              (update c ({1 :content 2 :images 3 :support-docs} (:element_id f)) conj {:path (:path f) :name (_filename (:path f)) :id (:id f) :index (:ordering f)})
              ) {})  
    (map (fn [[k v]] [k
                      (->>
                        (group-by :id v)
                        (map (fn [[kk vv]] [kk (first vv)]))
                        (into {})
                        )
                      ]))
    (into {})
    )
  )

(comment


  (def f {:type :content, :index 0, :path "broodje/files/c6e1e2e4-c0a0-4e65-b3c2-a66268f40c27.jpg", :name "c6e1e2e4-c0a0-4e65-b3c2-a66268f40c27.jpg"})
  (add 250 237 1001 f)

  (rm 1178)

  (_content-hash f)

  (get-attachment 237 f)

  )

