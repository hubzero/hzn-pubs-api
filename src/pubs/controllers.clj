(ns pubs.controllers
  (:require [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [response
                                        redirect
                                        content-type
                                        resource-response]]
            [ring.util.response :as response]
            [pubs.models.authors :as authors]
            [pubs.models.citations :as citations]
            [pubs.models.databases :as databases]
            [pubs.models.files :as files]
            [pubs.models.licenses :as licenses]
            [pubs.models.prjs :as prjs]
            [pubs.models.pubs :as pubs]
            [pubs.models.series :as series]
            [pubs.models.tags :as tags]
            [pubs.models.users :as users]
            [pubs.errors :as errors]
            )
  )

(defn me [req]
  (response (:user req))
  )

(defn get-prj [id]
  (if-let [prj (prjs/get-prj id)]
    (response {:id (:id prj)
               :alias (:alias prj)
               :title (:title prj)
               })
    (errors/!404)
    )
  )

(defn search-series [req]
  (response (pubs/search (:q (:body-params req))))
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

(defn citation-types []
  (response (citations/get-types))
  )


;(defn save-ui-state [req]
;  (ui-state/create (:body-params req))
;  )

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
  (response
    (as-> (:params req) $ (authors/rm (:author-id $)))
    )
  )

(defn edit-author [req]
  (response
    (authors/edit (:version-id (:params req))
                  (:author-id (:params req))
                  (:body-params req))  
    )
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
  (response (citations/rm (:version-id (:params req))
                          (:citation-id (:params req))
                          ))
  )

(defn add-file [req]
  (response (files/add (:id (:params req))
                       (:version-id (:params req))
                       (:id (:user req))
                       (:body-params req)
                       )  
            )
  )

(defn edit-file [req]
  (response
    (files/edit (:file-id (:params req))
                (:body-params req))  
    )
  )

(defn rm-file [req]
  (files/rm (:file-id (:params req)))
  )

(defn prj-files [id]
  (response (prjs/get-files id))
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

(defn ls-licenses []
  (response (licenses/get-all))
  )

(defn get-license [req]
  (response (licenses/get-by-id (:license-id (:params req))))
  )

(defn get-types [req]
  (response (pubs/get-master-types))
  )

(defn prj-databases [prj-id]
  (response (prjs/get-dbs prj-id))
  )

(defn get-databases [req]
  (response (databases/ls (:version-id (:params req))))
  )

(defn add-database [req]
  (response (databases/add (:id (:params req))
                           (:version-id (:params req))
                           (:id (:user req))
                           (:body-params req)
                           )  
            )
  )

(defn edit-database [req]
  (response
    (databases/edit (:db-id (:params req))
                    (:body-params req))  
    )
  )

(defn rm-database [req]
  (databases/rm (:db-id (:params req)))
  )


(defn get-series [req]
  (response (series/ls (:version-id (:params req))))
  )

(defn add-series [req]
  (response (series/add (:id (:params req))
                        (:version-id (:params req))
                        (:id (:user req))
                        (:body-params req)
                        )  
            )
  )

(defn edit-series [req]
  (response
    (series/edit (:attach-id (:params req))
                 (:body-params req))  
    )
  )

(defn rm-series [req]
  (series/rm (:attach-id (:params req)))
  )

