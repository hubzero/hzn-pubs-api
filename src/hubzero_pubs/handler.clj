(ns hubzero-pubs.handler
  (:require [hubzero-pubs.routes :refer [api-routes ui-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [muuntaja.middleware :refer [wrap-format]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            ;[ring.middleware.params :refer [wrap-params]]
            ;[ring.middleware.session.cookie :refer [cookie-store]]
            [ring.middleware.defaults :refer :all]
            [mount.core :refer [defstate]]
            [hubzero-pubs.auth :as auth]
            ))

(defn four-oh-1 []
  {:status 401
   :title "Unauthorized"
   :body "Cookie based auth failure."} 
  )

(defn wrap-auth [handler]
  (fn [req]
    (try
      (if-let [user (auth/cookie req)]
        (handler (merge req {:user user}))
        (four-oh-1) 
        )   
      (catch Exception e
        (.printStackTrace e)
        (four-oh-1))
      )
    )
  )

(defstate init-app
  :start #(prn "START handler")
  :stop #(prn "STOP handler"))

(defstate app
  :start
  (->
    (routes
      (-> #'api-routes
          wrap-format
          )
      (-> #'ui-routes 
          )
      (route/not-found
        (:body {:status 404 :title  "page not found"})))  
    wrap-auth
    wrap-cookies
    wrap-session
    )
  )
