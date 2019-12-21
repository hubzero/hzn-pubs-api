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
             "Accept" "application/edn"
             "Content-Type" "application/edn"
             ;"Authorization" (str "Bearer " (:token @s))
             }
   }
  )

(defn get-files [s]
  (go (let [res (<! (http/get (str url "/prjs/" (:prj-id @s) "/files")
                              (options s)))]
        (prn (:body res))
        (swap! s assoc :files (cljs.reader/read-string (:body res)))
        (swap! s assoc-in [:ui :current-folder] [["Project files" (first (first (:files @s)))]])
        ))
  )

(defn get-users [s]
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
  (go (let [res (<! (http/get (str url "/users/" (:user-query @s))
                              (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :user-results))
        ))
  )

(defn get-licenses [s]
  (go (let [res (<! (http/get (str url "/pubs/licenses") (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :licenses))
        ))
  )

(defn search-citations [s]
  (go (let [res (<! (http/get (str url
                                   "/citations/"
                                   (js/encodeURIComponent (:doi-query @s)))
                              (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :doi-results))
        ))
  )

(defn get-citation-types [s]
  (go (let [res (<! (http/get (str url "/citation-types") (options s)))]
        (prn (:body res))
        (->>
          (cljs.reader/read-string (:body res))
          (swap! s assoc :citation-types))
        ))
  )

(defn add-citation [s]
  (prn "ADD-CITATION" (str url "/citations") (get-in @s [:data :citations-manual]) )
  (go (let [c (get-in @s [:data :citations-manual])
            res (<! (http/post (str url "/citations") {:edn-params c}))]
        (prn c)
        (->>
          (:body res)
          (:generated_key)
          (assoc c :id)
          (swap! s update-in [:data :citations] conj)
          )
        ))
  )

(defn save-pub [s]
  (go (let [pub (:data @s)
            res (<! (http/post (str url "/pubs") {:edn-params pub}))]
        (prn pub)
        (prn (:body res))
        (swap! s assoc :data (merge (:data @s) (:body res)))
        ))
  )

(defn get-pub [s]
  (prn "GET PUB" (:_id @s))
  (go (let [res (<! (http/get (str url "/pubs/" (:_id @s)) (options s)))]
        (prn (:body res))
        (swap! s assoc :data (:body res))
        ))
  )

