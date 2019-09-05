(ns hubzero-pubs.auth
  (:require
    [yesql.core :refer [defqueries]]
    [clojure.java.jdbc :as jdbc]
    )
  )

(def db {:dbtype "mysql"
         :dbname "example"
         :user "root"
         :password "PUk8zFrxsqsS83"
         ;:host "hub-mysql"
         :host "localhost"
         })

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn cookie [req]
  (as-> (:cookies req) $
    ($ "66b92427391544b0181f81a94d34bce4") 
    ($ :value)
    (get-session { :session_id $ })
    (first $)
    ($ :userid)
    (get-user { :user_id $})
    (first $)
    )
  )

(comment

  (let [req { :cookies {"66b92427391544b0181f81a94d34bce4" { :value "345e57bbc7e98530e5f6256b72e2c82f" }}} ]
    (cookie req)
    )

  (prn "Test")
  )
