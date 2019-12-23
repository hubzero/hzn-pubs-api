(ns hubzero-pubs.auth
  (:require [hubzero-pubs.classic :as classic])
  )

(defn- _get-user [session_id]
  (as-> session_id $
    ($ :userid)
    (classic/get-user $)
    (first $)  
    )
  )

(defn cookie [req]
  (as-> (:cookies req) $
    ($ "66b92427391544b0181f81a94d34bce4") 
    ($ :value)
    (classic/get-session $)
    (first $)
    (if $ (_get-user $))
    )
  )

(comment

  (let [req { :cookies {"66b92427391544b0181f81a94d34bce4" { :value "9fe8ba187b310778c4575ab87ab886d7" }}} ]
    (cookie req)
    )

  (prn "Test")
  )
