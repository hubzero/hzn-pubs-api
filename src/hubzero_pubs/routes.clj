(ns hubzero-pubs.routes
  (:require [compojure.core :refer [defroutes context GET POST]]
            [compojure.route :as route]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response
                                        redirect
                                        content-type
                                        resource-response]]
            [ring.util.response :as response]
            [hubzero-pubs.classic :as classic]
            ))

(defn four-oh-4 []
  {:status 404
   :title "Not found"
   :body "Resource not found."} 
  )

;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(defn get-prj [id]
  (prn "R PRJ" id)
  (if-let [prj (classic/get-prj id)]
    (as-> (response {:body prj}) $
      (update $ :session merge {:prj-id id})
      )
    (four-oh-4)
    )
  )

(defn get-pub [id]
  (if-let [pub (classic/get-pub id)]
    (response pub)
    (four-oh-4)
    )
  )

(defn save-pub [data]
  (prn "SAVE PUB" data)
  (->
    (classic/save-pub data)
    (response)
    )
  )

(defn get-usage [req]
  (response (classic/usage (:id (:params req)) (:body-params req)))
  )

(defroutes api-routes
  (GET "/user" req (response (:user req)))
  (GET "/prjs/:id" [id] {:body (get-prj id)})
  (GET "/prjs/:id/files" [id] (classic/get-files id))
  (GET "/prjs/:id/users" [id] (classic/get-users id))
  (POST "/prjs/:id/usage" req (get-usage req))

  (GET "/pubs/licenses" [] (classic/get-licenses))

  (POST "/pubs" {body :body-params} (save-pub body))
  (GET "/pubs/:id" [id] (get-pub id))

  (GET "/users/:name" [name] (classic/search-users name))
  (GET "/citations/:doi" [doi] (classic/search-citations doi))
  (POST "/citations" {body :body-params} {:body (classic/create-citation body)})
  (GET "/citation-types" [] (classic/get-citation-types))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")
  )

