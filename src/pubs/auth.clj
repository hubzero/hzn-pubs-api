(ns pubs.auth
  (:require [digest :as digest]
            [pubs.models.users :as users]
            [hzn-app-core.config :refer [config]]
            )
  )

(defn- _get-user [session_id]
  (as-> session_id $
    ($ :userid)
    (users/get-user $)
    (first $)  
    )
  )

(defn cookie [req]
  (as-> (:secret config) $
    (digest/md5 $)
    (digest/md5 $)
    ((:cookies req) $) 
    ($ :value)
    (users/get-session $)
    (first $)
    (if $ (_get-user $))
    )
  )

(comment

  (:secret config)

  (let [req { :cookies {"947a8f2666dbaa4a2c706fac2581a4c6" { :value "9fe8ba187b310778c4575ab87ab886d7" }}} ]
    (cookie req)
    )

  (prn "Test")
  )
