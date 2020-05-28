(ns hzn-pubs-api.routes
  (:require [compojure.core :refer [defroutes context GET POST DELETE PUT]]
            [compojure.route :as route]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response
                                        redirect
                                        content-type
                                        resource-response]]
            [ring.util.response :as response]
            [hzn-pubs-api.models.authors :as authors]
            [hzn-pubs-api.models.citations :as citations]
            [hzn-pubs-api.models.files :as files]
            [hzn-pubs-api.models.licenses :as licenses]
            [hzn-pubs-api.models.prjs :as prjs]
            [hzn-pubs-api.models.pubs :as pubs]
            [hzn-pubs-api.models.tags :as tags]
            [hzn-pubs-api.models.users :as users]
            [hzn-pubs-api.ui-state :as ui-state]
            [hzn-pubs-api.errors :as errors]
            ))

;(defn handle-file [req]
;  (prn (get-in req [:multipart-params "f" :filename]))  
;  (prn (get-in req [:multipart-params "f" :tempfile]))  
;  "ok"
;  )

(defn get-prj [id]
  (if-let [prj (prjs/get-prj id)]
    (response {:id (:id prj)
               :alias (:alias prj)
               :title (:title prj)
               })
    (errors/!404)
    )
  )

(defn get-pub [req]
  (if-let [pub (pubs/get-pub (:version-id (:params req)))]
    (response pub)
    (errors/!404)
    )
  )

(defn save-pub [req]
  (if-let [res (pubs/save-pub (:id (:user req)) (:body-params req))]
    (response res)
    (errors/!500)
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

(defn search-tags [req]
  (response (tags/search (:q (:body-params req)))) 
  )

(defn search-users [req]
  (response (users/search-users (:q (:body-params req)))) 
  )

(defn search-citations [req]
  (response (citations/search (:doi (:body-params req))))
  )

(defn create-citation [req]
 (response (citations/create (:body-params req))) 
 )


(defn save-ui-state [req]
  (ui-state/create (:body-params req))
  )

(defn get-authors [req]
  (response (authors/ls (:version-id (:params req))))
  )

(defn add-author [req]
  (response
    (authors/add (:version-id (:params req))
                 (:id (:user req))
                 (:body-params req))  
    )
  )

(defn create-author [req]
  (response
    (authors/create (:version-id (:params req))
                    (:id (:user req))
                    (:body-params req))  
    )
  )

(defn rm-author [req]
  (as-> (:params req) $ (authors/rm (:author-id $)))
  )

(defn edit-author [req]
  (prn "EDIT AUTHOR" (:version-id (:params req)) (:author-id (:params req)) (:body-params req))
  (authors/edit (:version-id (:params req))
                (:author-id (:params req))
                (:body-params req))
  )

(defn get-citations [req]
  (response (citations/ls (:version-id (:params req))))
  )

(defn add-citation [req]
  (if-let [cid (:id (:body-params req))]
    (response (citations/add (:version-id (:params req)) cid))
    {:status 400} 
    )
  )

(defn rm-citation [req]
  {:status (if (citations/rm (:version-id (:params req))
                             (:citation-id (:params req))
                             ) 200 500) }

  )
 
(defn add-file [req]
  (response (files/add (:id (:params req))
                       (:version-id (:params req))
                       (:id (:user req))
                       (:body-params req)
                       )  
            )
  )

(defn rm-file [req]
  (files/rm (:file-id (:params req)))
  )

(defn get-files [req]
  (response (files/ls (:version-id (:params req))))
  )

(defn get-tags [req]
  (response (tags/ls (:version-id (:params req))))
  )

(defn add-tag [req]
  (response (tags/add (:tag (:body-params req))
                      (:version-id (:params req))
                      (:id (:user req))))
  )

(defn rm-tag [req]
  {:status (if (tags/rm (:version-id (:params req))
                        (:tag-id (:params req))
                        ) 200 500) }
  )

(defn get-owners [prj-id]
  (response (prjs/get-owners prj-id))
  )

(defn get-license [req]
  (response (licenses/get-by-id (:license-id (:params req))))
  )

(defn get-types [req]
  (response (pubs/get-master-types))
  )
 
(def pubroot "/pubs/:id/v/:version-id")

(defroutes api-routes
  (GET    "/prjs/:id"                              [id]  (get-prj id))
  (GET    "/prjs/:id/files"                        [id]  (prjs/get-files id))
  (GET    "/prjs/:id/owners"                       [id]  (get-owners id))
  (POST   "/prjs/:id/owners"                       req   (add-owner req))
  (POST   "/prjs/:id/usage"                        req   (get-usage req))

  (POST   "/pubs"                                  req   (save-pub req))
  (GET    pubroot                                  req   (get-pub req))
  (GET    (str pubroot "/authors")                 req   (get-authors req))
  (POST   (str pubroot "/authors")                 req   (add-author req))
  (POST   (str pubroot "/authors/new")             req   (create-author req))
  (DELETE (str pubroot "/authors/:author-id")      req   (rm-author req))
  (PUT    (str pubroot "/authors/:author-id")      req   (edit-author req))
  (GET    (str pubroot "/citations")               req   (get-citations req))
  (POST   (str pubroot "/citations")               req   (add-citation req))
  (DELETE (str pubroot "/citations/:citation-id")  req   (rm-citation req))
  (GET    (str pubroot "/files")                   req   (get-files req))
  (POST   (str pubroot "/files")                   req   (add-file req))
  (DELETE (str pubroot "/files/:file-id")          req   (rm-file req))
  (GET    (str pubroot "/tags")                    req   (get-tags req))
  (POST   (str pubroot "/tags")                    req   (add-tag req))
  (DELETE (str pubroot "/tags/:tag-id")            req   (rm-tag req)) 

  (POST   "/tags/search"                           req   (search-tags req))

  (GET    "/users/me"                              req   (response (:user req)))
  (POST   "/users/search"                          req   (search-users req))

  (GET    "/licenses"                              []    (licenses/get-all))
  (GET    "/licenses/:license-id"                  req   (get-license req))

  (POST   "/citations/search"                      req   (search-citations req))
  (POST   "/citations"                             req   (create-citation req))
  (GET    "/citations/types"                       []    (citations/get-types))

 (GET     "/types"                                 req   (get-types req))

  (POST   "/ui-state"                              req   (save-ui-state req))
  )

(defroutes ui-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (route/resources "/")
  )

