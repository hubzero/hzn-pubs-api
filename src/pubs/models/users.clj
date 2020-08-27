(ns pubs.models.users
  (:require 
    [yesql.core :refer [defqueries]]
    [clojure.java.jdbc :as jdbc]
    [pubs.config :refer [config]]
    [mount.core :as mount :refer [defstate]]
    )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn get-user [id]
  (sel-user { :user_id id} (_connection))
  )

(defn get-session [id]
  (sel-session {:session_id id} (_connection))
  )

(defn search-users
  "search users by name, n - JBG"
  [n]
  (sel-users {:name n} (_connection))
  )

