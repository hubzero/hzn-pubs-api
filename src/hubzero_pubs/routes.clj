(ns hubzero-pubs.routes
  (:require [compojure.core :refer [defroutes context GET POST DELETE PUT]]
            [compojure.route :as route]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response
                                        redirect
                                        content-type
                                        resource-response]]
            [ring.util.response :as response]
            [hubzero-pubs.classic.authors :as authors]
            [hubzero-pubs.classic.citations :as citations]
            [hubzero-pubs.classic.licenses :as licenses]
            [hubzero-pubs.classic.prjs :as prjs]
            [hubzero-pubs.classic.pubs :as pubs]
            [hubzero-pubs.classic.tags :as tags]
            [hubzero-pubs.classic.users :as users]
            [hubzero-pubs.ui-state :as ui-state]
            [hubzero-pubs.errors :as errors]
            ))

;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(defn get-prj [id]
  (if-let [prj (prjs/get-prj id)]
    (response {:id (:id prj)})
    (errors/four-oh-4)
    )
  )

(defn get-pub [id]
  (if-let [pub (pubs/get-pub id)]
    (response pub)
    (errors/four-oh-4)
    )
  )

(defn save-pub [req]
  (if-let [res (pubs/save-pub (:body-params req))]
    (response res)
    (errors/five-hundred)
    )
  )

(defn get-usage [req]
  (response (prjs/usage (:id (:params req)) (:body-params req)))
  )

(defn add-owner [req]
  (prjs/add-owner (get-in req [:params :id])
                  (:body-params req)
                  )
  )

(defn search-users [req]
  (users/search-users (:body-params req))
  )

(defn search-citations [req]
  (response (citations/search (:doi (:body-params req))))
  )

(defn create-citation [req]
 (response (citations/create (:body-params req))) 
 )

(defn rm-citation [req]
 (response (citations/rm (:citation-id (:params req)))) 
 )


(defn save-ui-state [req]
  (ui-state/create (:body-params req))
  )

(defn add-tag [req]
  (response (tags/add-tag (:body-params req)
                          (:id (:params req))
                          (:vid (:params req))
                          (:id (:user req))))
  )

(defn remove-tag [req]
  (response (tags/remove-tag (:id (:params req))
                             (:version-id (:params req))
                             (:id (:user req))))
  )

(defn add-author [req]
  (authors/add (:version-id req)
               (:id (:user req))
               (:body-params req))
  )

(defn rm-author [req]
  (authors/add (:version-id req) (:author-id req))
  )

(defn edit-author [req]
  (authors/edit (:version-id req) (:author-id req) (:body-params req))
  )

(defn add-citation [req]
  (citations/add (:version-id req) (:body-params req)) 
  )

(defn rm-citation [req]
  (citations/rm (:citation-id req)) 
  )

(def pubroot "/pubs/:id/v/:version-id")

(defroutes api-routes
  (GET    "/prjs/:id"                              [id]  (get-prj id))
  (GET    "/prjs/:id/files"                        [id]  (prjs/get-files id))
  (GET    "/prjs/:id/users"                        [id]  (prjs/get-users id))
  (POST   "/prjs/:id/usage"                        req   (get-usage req))
  (POST   "/prjs/:id/owners"                       req   (add-owner req))

  (POST   "/pubs"                                  req   (save-pub req))
  (GET    pubroot                                  [id]  (get-pub id))
  (POST   (str pubroot "/authors")                 req   (add-author req))
  (DELETE (str pubroot "/authors/:author-id")      req   (rm-author req))
  (PUT    (str pubroot "/authors/:author-id")      req   (edit-author req))
  (POST   (str pubroot "/tags")                    req   (add-tag req))
  (DELETE (str pubroot "/tags/:tag-id")            req   (remove-tag req))
  (POST   (str pubroot "/citations")               req   (add-citation req))
  (DELETE (str pubroot "/citations/:citation-id")  req   (rm-citation req))

  (GET    "/users/me"                              req   (response (:user req)))
  (POST   "/users/search"                          req   (search-users req))

  (GET    "/licenses"                              []    (licenses/get-all))

  (POST   "/citations/search"                      req   (search-citations req))
  (POST   "/citations"                             req   (create-citation req))
  (GET    "/citations/types"                       []    (citations/get-types))

  (POST   "/ui-state"                              req   (save-ui-state req))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")
  )

