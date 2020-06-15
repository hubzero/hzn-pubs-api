(ns hzn-pubs-api.handler
  (:require [hzn-pubs-api.routes :refer [api-routes ui-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [muuntaja.middleware :refer [wrap-format]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            ;[ring.middleware.params :refer [wrap-params]]
            ;[ring.middleware.session.cookie :refer [cookie-store]]
            [ring.middleware.defaults :refer :all]
            [mount.core :refer [defstate]]        
            [hzn-pubs-api.auth :as auth]
            [hzn-pubs-api.errors :as errors]
            [hzn-session-auth.middleware :as hsam]
            ))


;(defn wrap-auth [handler]
;  (fn [req]
;    (try
;      (if-let [user (auth/cookie req)]
;        (handler (merge req {:user user}))
;        (errors/!401)
;        )
;      (catch Exception e
;        (.printStackTrace e)
;        (errors/!401))
;      )
;    )
;  )

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
      (route/not-found (errors/!404)))
    hsam/wrap-auth
    ;wrap-auth
    wrap-cookies
    wrap-session
    )
  )
