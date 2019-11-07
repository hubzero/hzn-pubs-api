(ns hubzero-pubs.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]] 
            [cljs-http.client :as http]   
            )
  )

(def url "http://localhost:8888")

(defn get-files [s id]
  (go (let [res (<! (http/get (str url "/prjs/" id "/files")

;                              {
;                               :with-credentials? true 
;                               :headers {"Authorization" (str "Bearer " (:token @s)) }
;                               }
;                              
                              ))]
        (swap! s assoc :files (cljs.reader/read-string (:body res)))
        ))
  )
