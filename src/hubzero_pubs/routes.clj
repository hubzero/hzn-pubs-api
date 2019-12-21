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
            [hubzero-pubs.pubs :as pubs]
            ))

(defn create-pub [data]
  (pubs/create-pub data)
  )

;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(defn index [prj-id & [pub-id]]
  (as->
    (content-type (resource-response "index.html" {:root "public"}) "text/html") $
    (update $ :session merge {:prj-id prj-id})
    (update $ :session merge {:pub-id pub-id})
    )
  )

(defn me [req]
  (response 
    {:prj-id (get-in req [:session :prj-id])
     :pub-id (get-in req [:session :pub-id])
     }   
    )
  )

(defroutes api-routes
  (GET "/me" req (me req))
  (GET "/prjs/:id" [id] (classic/get-prj id))
  (GET "/prjs/:id/files" [id] (classic/get-files id))
  (GET "/prjs/:id/users" [id] (classic/get-users id))

  (GET "/pubs/user" req {:body (:user req)})
  (GET "/pubs/licenses" [] (classic/get-licenses))

  (POST "/pubs" {body :body-params} {:body (create-pub body)})
  (GET "/pubs/:id" [id] {:body (pubs/get-pub id)})
;  (POST "/pubs/:id/files" req (handle-file req))

  (GET "/users/:name" [name] (classic/search-users name))
  (GET "/citations/:doi" [doi] (classic/search-citations doi))
  (POST "/citations" {body :body-params} {:body (classic/create-citation body)})
  (GET "/citation-types" [] (classic/get-citation-types))
  )

(defroutes ui-routes
  ;(GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (GET "/prjs/:id/pubs" [id] (index id))
  (GET "/prjs/:prj-id/pubs/:pub-id" [prj-id pub-id] (index prj-id pub-id))
  (route/resources "/")
  )

