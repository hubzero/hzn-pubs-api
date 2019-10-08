(ns hubzero-pubs.handler
  (:require [hubzero-pubs.routes :refer [api-routes ui-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [mount.core :refer [defstate]]
            [hubzero-pubs.middleware :as middleware]))

(defstate init-app
  :start #(prn "START handler")
  :stop #(prn "STOP handler"))

(defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'api-routes
          (wrap-routes middleware/wrap-formats)
          )
      #'ui-routes
      (route/not-found
        (:body {:status 404 :title  "page not found"})))))
