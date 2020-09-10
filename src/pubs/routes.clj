(ns pubs.routes
  (:require [compojure.core :refer [defroutes context GET POST DELETE PUT]]
            [compojure.route :as route]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response
                                        redirect
                                        content-type
                                        resource-response]]
            [ring.util.response :as response]
            [pubs.ui-state :as ui-state]
            [pubs.errors :as errors]
            [pubs.controllers :as c]
            ))

;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(def pubroot "/pubs/:id/v/:version-id")

(defroutes api-routes
  (GET    "/prjs/:id"                              [id]  (c/get-prj id))
  (GET    "/prjs/:id/files"                        [id]  (c/prj-files id))
  (GET    "/prjs/:id/owners"                       [id]  (c/get-owners id))
  (POST   "/prjs/:id/owners"                       req   (c/add-owner req))
  (POST   "/prjs/:id/usage"                        req   (c/get-usage req))
  (GET    "/prjs/:id/databases"                    [id]  (c/prj-databases id))

  (POST   "/pubs"                                  req   (c/save-pub req))
  (GET    pubroot                                  req   (c/get-pub req))
  (GET    (str pubroot "/authors")                 req   (c/get-authors req))
  (POST   (str pubroot "/authors")                 req   (c/add-author req))
  (POST   (str pubroot "/authors/new")             req   (c/create-author req))
  (DELETE (str pubroot "/authors/:author-id")      req   (c/rm-author req))
  (PUT    (str pubroot "/authors/:author-id")      req   (c/edit-author req))
  (GET    (str pubroot "/citations")               req   (c/get-citations req))
  (POST   (str pubroot "/citations")               req   (c/add-citation req))
  (DELETE (str pubroot "/citations/:citation-id")  req   (c/rm-citation req))
  (GET    (str pubroot "/databases")               req   (c/get-databases req))
  (POST   (str pubroot "/databases")               req   (c/add-database req))
  (PUT    (str pubroot "/databases/:db-id")        req   (c/edit-database req))
  (DELETE (str pubroot "/databases/:db-id")        req   (c/rm-database req))
  (GET    (str pubroot "/files")                   req   (c/get-files req))
  (POST   (str pubroot "/files")                   req   (c/add-file req))
  (PUT    (str pubroot "/files/:file-id")          req   (c/edit-file req))
  (DELETE (str pubroot "/files/:file-id")          req   (c/rm-file req))
  (GET    (str pubroot "/tags")                    req   (c/get-tags req))
  (POST   (str pubroot "/tags")                    req   (c/add-tag req))
  (DELETE (str pubroot "/tags/:tag-id")            req   (c/rm-tag req)) 

  (POST   "/tags/search"                           req   (c/search-tags req))

  (GET    "/users/me"                              req   (c/me req))
  (POST   "/users/search"                          req   (c/search-users req))

  (GET    "/licenses"                              []    (c/ls-licenses))
  (GET    "/licenses/:license-id"                  req   (c/get-license req))

  (POST   "/citations/search"                      req   (c/search-citations req))
  (POST   "/citations"                             req   (c/create-citation req))
  (GET    "/citations/types"                       []    (c/citation-types))

  (GET    "/types"                                 req   (c/get-types req))

  (POST   "/ui-state"                              req   (c/save-ui-state req))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")
  )

