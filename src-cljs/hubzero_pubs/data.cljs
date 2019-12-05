(ns hubzero-pubs.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]] 
            [cljs-http.client :as http]   
            )
  )

(def url "http://localhost:8888")

(defn options [s]
  {
   ;:with-credentials? true 
   :headers {
             "accept" "application/edn"
             ;"Authorization" (str "Bearer " (:token @s))
             }
   }
  )

(defn get-files [s]
  (prn "GET-FILES" (str url "/prjs/" (:prj-id @s) "/files"))
  (go (let [res (<! (http/get (str url "/prjs/" (:prj-id @s) "/files")
                              (options s)))]
        (prn (:body res))
        (swap! s assoc :files (cljs.reader/read-string (:body res)))
        (swap! s assoc-in [:ui :current-folder] [["Project files" (first (first (:files @s)))]])
        ))
  )

(defn get-users [s]
  (prn "GET-USERS" (str url "/prjs/" (:prj-id @s) "/users"))
  (go (let [res (<! (http/get (str url "/prjs/" (:prj-id @s) "/users")
                              (options s)))]
        ;(prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (map (fn [u] [(:userid u) u]))
          (into {})
          (swap! s assoc :users))
        ))
  )

(defn search-users [s]
  (prn "SEARCH-USERS" (str url "/users/" (:user-query @s)))
  (go (let [res (<! (http/get (str url "/users/" (:user-query @s))
                              (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :user-results))
        ))
  )

(defn get-licenses [s]
  (prn "GET-LICENSES" (str url "/pubs/licenses"))
  (go (let [res (<! (http/get (str url "/pubs/licenses") (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :licenses))
        ))
  )

