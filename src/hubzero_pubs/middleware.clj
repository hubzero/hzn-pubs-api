(ns hubzero-pubs.middleware
  (:require [muuntaja.core :as muuntaja]
            [muuntaja.middleware :refer [wrap-format wrap-params]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [hubzero-pubs.auth :as auth]
            )
 )

(defn wrap-cookie-auth [handler]
  (fn [req]
    (if-let [user (auth/cookie req)]
      (handler (merge req {:user user}))
      {:status 401 
       :title "Unauthorized"
       :body "Cookie based auth failure."}  
      )
    )
  )

;(defn wrap-formats [handler]
;  (fn [req]
;    (prn "FORMATS" req)
;    (wrap-format handler)
;;    ((->
;;       handler
;;       wrap-params
;;       wrap-multipart-params
;;       (wrap-format muuntaja/default-options)) req)    
;    )
;  )
;
;(defn handle-prj-id [handler]
;  (prn "HANDLER" handler)
;  (fn [req]
;    (prn "REQ" (:params req))
;    (if-let [prj-id (:id (:params req))]
;      (as-> (handler req) $
;        (assoc :cookies (merge (:cookies $) {"prj-id" {:value (str prj-id)}}))
;        (assoc :session (merge (:session $) {:prj-id prj-id}))
;        )
;      (handler req)
;      )
;    )
;  )
;
;(defn wrap-base [handler]
;  (-> handler 
;      ;(wrap-cookie-auth)
;      ;(wrap-defaults site-defaults)
;      (wrap-formats)
;      )
;  )
