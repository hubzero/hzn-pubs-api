(ns hubzero-pubs.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]] 
            [cljs-http.client :as http]   
            )
  )

(def url "http://localhost:8888")

(defn get-files [s]
  (prn "GET-FILES" (str url "/prjs/" (:prj-id @s) "/files"))
  (go (let [res (<! (http/get (str url "/prjs/" (:prj-id @s) "/files")

;                              {
;                               :with-credentials? true 
;                               :headers {"Authorization" (str "Bearer " (:token @s)) }
;                               }
;                              
                              ))]
        (prn (:body res))
        (swap! s assoc :files (cljs.reader/read-string (:body res)))
        (swap! s assoc-in [:ui :current-folder] [["Project files" (first (first (:files @s)))]])
        ))
  )
