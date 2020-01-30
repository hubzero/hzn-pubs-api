(ns hubzero-pubs.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]] 
            [cljs-http.client :as http]   
            [secretary.core :as secretary]
            [hubzero-pubs.mutate :as mutate]
            )
  )

(def url "https://localhost/p")
;(def url "http://localhost:8888")

(defn- _error [s]
  (secretary/dispatch! "/error")
  )

(defn- _handle-res [s res f]
  (if (= (:status res) 200)
    (f s res)
    (_error s)
    )
  )

(defn options [s]
  {
   ;:with-credentials? true
   :headers {
             "Accept" "application/edn"
             "Content-Type" "application/edn"
             }
   }
  )

(defn get-user [s]
  (go (let [res (<! (http/get (str url "/user")
                              (options s)))]
        (_handle-res s res (fn [s res]
                             (swap! s assoc :user-id (:id (:body res)))
                             ))
        ))
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
  (go (let [res (<! (http/post (str url "/citations/search") {:edn-params {:doi (:doi-query @s)}}
                              ))]
        (prn (:body res))
        (swap! s assoc :doi-results (:body res)) 
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

(defn usage [s]
  (go (let [res (<! (http/post (str url "/prjs/" (:prj-id @s) "/usage" ) {:edn-params (keys (get-in @s [:data :content] {}))}))]
        (prn (:body res))
        (swap! s assoc :usage (:body res))
        ))
  )

(defn get-pub [s]
  (prn "GET PUB" (:pub-id @s))
  (go (let [res (<! (http/get (str url "/pubs/" (:ver-id @s)) (options s)))]
        (prn (:body res))
        (_handle-res s res (fn [s res]
                             (->> (:body res)
                                  (mutate/coerce)
                                  (swap! s assoc :data)
                                  )
                             (swap! s assoc :prj-id (get-in @s [:data :prj-id]))
                             (swap! s assoc :ver-id (get-in @s [:data :ver-id]))
                             (usage s)      
                             ))
        ))
  )

(defn save-pub [s]
  (as-> (:data @s) $
    (if (:prj-id $) $ (assoc $ :prj-id (:prj-id @s) :user-id (:user-id @s)))
    (mutate/prepare $)
    (go (let [res (<! (http/post (str url "/pubs") {:edn-params $}))]
          (prn (:body res))
          (_handle-res s res (fn [s res]
                               (swap! s merge (:body res))
                               (prn "PRJ ID" (:prj-id @s))
                               ;; Better get the pub if save updated stuff (ex. doi) - JBG
                               (get-pub s)
                               ))
          ))
    )
  )

(defn get-prj [s]
  (prn "GET PRJ" (:prj-id @s))
  (go (let [res (<! (http/get (str url "/prjs/" (:prj-id @s)) (options s)))]
        (_handle-res s res (fn [s res]
                             (if-let [id (:pub-id @s)] (get-pub s)) 
                             (usage s)
                             ))
        ))
  )

