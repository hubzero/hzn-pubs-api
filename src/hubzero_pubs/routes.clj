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
            [hubzero-pubs.errors :as errors]
            ))


;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(defn get-prj [id]
  (if-let [prj (classic/get-prj id)]
    (response {:id (:id prj)})
    (errors/four-oh-4)
    )
  )

(defn get-pub [id]
  (if-let [pub (classic/get-pub id)]
    (response pub)
    (errors/four-oh-4)
    )
  )

(defn save-pub [data]
  (prn "VALIDATING, SAVING:" data)
  (if (classic/valid? data)
    (if-let [res (classic/save-pub data)]
      (response res) 
      (errors/five-hundred)
      )
    (errors/four-ohoh)
    )
  )

(defn get-usage [req]
  (response (classic/usage (:id (:params req)) (:body-params req)))
  )

(defroutes api-routes
  (GET "/user" req (response (:user req)))
  (GET "/prjs/:id" [id] (get-prj id))
  (GET "/prjs/:id/files" [id] (classic/get-files id))
  (GET "/prjs/:id/users" [id] (classic/get-users id))
  (POST "/prjs/:id/usage" req (get-usage req))

  (GET "/pubs/licenses" [] (classic/get-licenses))

  (POST "/pubs" {body :body-params} (save-pub body))
  (GET "/pubs/:id" [id] (get-pub id))

  (GET "/users/:name" [name] (classic/search-users name))
  (POST "/citations/search" {body :body-params} (response (classic/search-citations (:doi body))))
  (POST "/citations" {body :body-params} {:body (classic/create-citation body)})
  (GET "/citation-types" [] (classic/get-citation-types))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")
  )

