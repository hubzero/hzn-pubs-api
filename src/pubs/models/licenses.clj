(ns pubs.models.licenses
  (:require [yesql.core :refer [defqueries]]
            [hzn-app-core.config :refer [config]]
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
 

