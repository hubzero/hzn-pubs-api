(ns hubzero-pubs.auth
  (:require
    [hubzero-pubs.classic :as classic]
    )
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

  (let [req { :cookies {"66b92427391544b0181f81a94d34bce4" { :value "7308a5ffdee79b52507891b5f7adfa6b" }}} ]
    (cookie req)
    )

  (prn "Test")
  )
