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

(defn handle-prj-id [id]
  (->
    (content-type (resource-response "index.html" {:root "public"}) "text/html")
    (assoc :cookies {:project-id id})
    )
  )

(defroutes api-routes
  (GET "/prjs/:id" [id] (classic/get-prj id))
  (GET "/prjs/:id/files" [id] (classic/get-files id))
  (GET "/prjs/:id/users" [id] (classic/get-users id))

  (GET "/pubs/user" req {:body (:user req)})
  (GET "/pubs/licenses" [] (classic/get-licenses))

  (POST "/pubs" {body :body} (->> (data2edn body) (create-pub)))
  (POST "/pubs/:id/files" req (handle-file req))

  (GET "/users/:name" [name] (classic/search-users name))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (GET "/prjs/:id/pubs" [id] (handle-prj-id id))
  (route/resources "/")  
  )

