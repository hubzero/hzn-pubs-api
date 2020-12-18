(ns pubs.handler
  (:require [pubs.routes :refer [api-routes ui-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [muuntaja.middleware :refer [wrap-format]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.defaults :refer :all]
            [mount.core :refer [defstate]]        
            [hzn-session-auth.middleware :as hsam]
            [pubs.errors :as errors]
            [ring.logger :as logger]
            [hzn-app-core.config :refer [config]]))

(defstate auth-wrap :start (partial hsam/wrap-auth (:secret config) (:mysql config)))

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
    auth-wrap
    wrap-cookies
    wrap-session
    logger/wrap-with-logger
    )
  )

(defn _app []
  #'app)
