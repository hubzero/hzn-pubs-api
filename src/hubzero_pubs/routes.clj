(ns hubzero-pubs.routes
  (:require [compojure.core :refer [defroutes context GET POST]]
            [compojure.route :as route]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response redirect content-type resource-response]]
            [ring.util.response :as response]
            ))

(defn data2edn [d]
  (->>
    (slurp d)
    (clojure.edn/read-string)
    )
  )

(defn create-pub [data]
  (prn data)
  "ok"
  )

(defn handle-file [req]
  (prn (get-in req [:multipart-params "f" :filename]))  
  (prn (get-in req [:multipart-params "f" :tempfile]))  
  "ok"
  )

(defroutes api-routes
  (GET "/pubs/user" req {:body (:user req)})
  (POST "/pubs" {body :body} (->> (data2edn body) (create-pub)))
  (POST "/pubs/:id/files" req (handle-file req))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")  
  )
