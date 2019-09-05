(ns hubzero-pubs.middleware
  (:require [muuntaja.core :as muuntaja]
            [muuntaja.middleware :refer [wrap-format wrap-params]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [hubzero-pubs.auth :as auth]
            )
 )

(defn wrap-cookie-auth [handler]
  (fn [req]
    (if-let [user (auth/cookie req)]
      (handler (merge req {:user user}))
      {:status 401 
       :title "Unauthorized"
       :body "Cookie based auth failure."}  
      )
    )
  )

(defn wrap-formats [handler]
  (fn [req]
    ((-> handler wrap-params (wrap-format muuntaja/default-options)) req)    
    )
  )

(defn wrap-base [handler]
  (-> handler 
      (wrap-cookie-auth)
      (wrap-defaults site-defaults)
      )
  )
