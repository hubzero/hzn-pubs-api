(ns hzn-pubs-api.models.licenses
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hzn-pubs-api.config :refer [config]]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn get-all []
  (sel-licenses {} (_connection))
  )

(defn get-by-id [lic-id]
  (first (sel-license-by-id {:id lic-id} (_connection)))
  )
 

