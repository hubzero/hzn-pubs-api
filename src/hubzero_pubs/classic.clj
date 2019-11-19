(ns hubzero-pubs.classic
  (:require [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            )
  (:gen-class)
  )

(def file-root "/home/jbg/Development/hzcms-docker/data/srv/example/projects/")
(def file-dir "/files")

(def db {:dbtype "mysql"
         :dbname "example"
         :user "root"
         :password "PUk8zFrxsqsS83"
         ;:host "hub-mysql"
         :host "localhost"
         })

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn get-user [id]
  (sel-user { :user_id id})
  )

(defn get-session [id]
  (sel-session {:session_id id})
  )

(defn get-prj [id]
  (->
    (sel-prj {:id id})
    (first)
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

(defn get-licenses []
  (sel-licenses)
  )

(comment

  (get-prj 1)

  (get-files 1)

  (get-user 1001)

  (get-licenses)

  )

