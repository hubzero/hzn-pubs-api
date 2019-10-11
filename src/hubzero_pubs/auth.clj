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

(defn- _get-user [session_id]
  (as-> session_id $
    ($ :userid)
    (sel-user { :user_id $})
    (first $)  
    )
  )

(defn cookie [req]
  (as-> (:cookies req) $
    ($ "66b92427391544b0181f81a94d34bce4") 
    ($ :value)
    (sel-session { :session_id $ })
    (first $)
    (if $ (_get-user $))
    )
  )

(comment

  (let [req { :cookies {"66b92427391544b0181f81a94d34bce4" { :value "7308a5ffdee79b52507891b5f7adfa6b" }}} ]
    (cookie req)
    )

  (prn "Test")
  )
