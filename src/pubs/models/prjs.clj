(ns pubs.models.prjs
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            [pubs.config :refer [config]]
            [pubs.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate file-root :start (get-in config [:files :root]))
(defstate file-dir  :start (get-in config [:files :dir]))
(defstate db        :start (:mysql config))

(def gb 1073741824)

(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})


(defn- _get-prj [id]
  (->
    (sel-prj {:id id} (_connection))
    (first)
    )
  )

(defn get-prj [id]
  ;; Get the project process the params - JBG
  (if-let [p (_get-prj id)]
    (assoc p :params (utils/parse-params (:params p)))
    )
  )

(defn get-files [id]
  (as-> (get-prj id) $
    (:alias $)
    (str file-root $ file-dir)
    (fs/walk (fn [root dirs files]
               [(clojure.string/replace(.getAbsolutePath root) file-root "")
                dirs
                files]
               ) $)
    )
  )

(defn get-dbs [id]
  (prn "GET PRJ DB" id)
  (sel-dbs {:project id} (_connection))
  )

(defn prj-size [id]
  (reduce (fn  [c [path _ files]]
            (reduce (fn [c f] 
                      (+ c (fs/size (str file-root "/" path "/" f)))) c files)
            ) 0 (get-files id))
  )

(defn- _usage-size [files]
  (reduce (fn [c f]
            (+ c (fs/size (str file-root "/" f)))
            ) 0 files)
  )

(defn- _usage-percent [prj size]
  (if-let [pq (get-in prj [:params :pubQuota] (str gb)) ]
    (->> pq 
         (Integer/parseInt)
         (/ size)
         (* 100)
         (float)
         (clojure.core/format "%.2f")
         ) 0)
  )

(defn- _usage-max [prj]
  (if-let [pq (get-in prj [:params :pubQuota])]
    (->> (/ (Integer/parseInt pq) gb)
         (float)
         (clojure.core/format "%.2f" )
         ) 1)
  )

(defn usage [id files]
  (let [size (_usage-size files)]
    (as-> (get-prj id) $
      {:size (clojure.core/format "%.4f" (float (/ size gb))) 
       :units "GB"
       :percent (_usage-percent $ size) 
       :max (_usage-max $)
       }
      )
    )
  )
 
(defn get-owners [prj-id]
  (->>
    (sel-prj-users {:id prj-id} (_connection))
    (filter #(< (:status %) 2))
    )
  )

(defn get-owner [owner-id]
  (first (sel-owner-by-id {:id owner-id} (_connection))) 
  )


(defn add-owner [prj-id a]
  (insert-owner<! {:project_id prj-id 
                   :user_id 0 
                   :group_id 0
                   :invited_name (:name a (str (:firstname a) " " (:lastname a))) 
                   :name (:name a (str (:firstname a) " " (:lastname a)))
                   :invited_email (:email a)
                   :role 2
                   :native 1
                   } (_connection))
  )

(defn update-email [id email]
  (update-prj-owner! {:invited_email email :id id} (_connection))
  )
 
(comment

  (get-prj 1)

  (->>
  (get-owners 1)
  (map :fullname
       )
    )

  (get-dbs 1)

  (get-files 1)

  )

