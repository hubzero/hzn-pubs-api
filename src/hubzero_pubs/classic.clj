(ns hubzero-pubs.classic
  (:require [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            [hubzero-pubs.config :refer [config]]
            )
  )

(def file-root (get-in config [:files :root]))
(def file-dir (get-in config [:files :dir]))

(def db (:mysql config))

(def gb 1073741824)

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn get-user [id]
  (sel-user { :user_id id})
  )

(defn get-session [id]
  (sel-session {:session_id id})
  )

(defn- _get-prj [id]
  (prn "GET PRJ" id)
  (->
    (sel-prj {:id id})
    (first)
    )
  )

(defn- _parse-params [p]
  (assoc p :params (reduce (fn [m p]
                             (as-> (clojure.string/split p #"=") $
                               (assoc m (keyword (first $)) (second $))
                               )
                             ) {} (clojure.string/split (:params p) #"\n")))
  )

(defn get-prj [id]
  ;; Get the project process the params - JBG
  (->> (_get-prj id)
       (_parse-params)
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

(defn prj-size [id]
  (reduce (fn  [c [path _ files]]
            (reduce (fn [c f] 
                      (prn file-dir path f) 
                      (+ c (fs/size (str file-root "/" path "/" f)))) c files)
            ) 0 (get-files id))
  )

(defn- _usage-size [files]
  (reduce (fn [c f]
            (+ c (fs/size (str file-root "/" f)))
            ) 0 files)
  )

(defn usage [id files]
  (let [s (_usage-size files)]
    (as-> (get-prj id) $
      {:size (float (/ size gb)) 
       :units "GB"
       :percent (->> (get-in $ [:params :pubQuota])
                     (Integer/parseInt)
                     (/ size)
                     (float)
                     (* 100)
                     )
       :max (float (/ (Integer/parseInt (get-in $ [:params :pubQuota])) gb)) 
       }  
      )   
    )
  )

(defn get-licenses []
  (sel-licenses)
  )

(defn get-users [id]
  (sel-prj-users {:id id})
  )

(defn search-users [name]
  (sel-users {:name name})
  )

(defn search-citations [doi]
  (sel-citations {:doi (str "%" doi "%")})
  )

(defn create-citation [m]
  (->>
    (reduce (fn [c k] (if (k c) c (assoc c k nil))) m
            [:type :title :year :month :author :journal :volume :pages :isbn :doi :abstract :publisher :url :issue :series :book :citation :eprint :edition])
    (insert-citation<!)
   )
  )

(defn get-citation-types []
  (sel-citation-types)
  )

(comment

  config

  (search-users "%j%")

  (get-prj 1)

  (get-files 1)

  (prj-size 1)

  (usage 1 ["prjfoobar/files/foo"
            "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png"])

  (get-user 1001)

  (get-licenses)

  (get-prj-users 1)

  (search-citations "10")

  (get-citation-types)

  (create-citation {})

  (create-citation {:type 1
                    :title "Foobar"
                    :year "1996"
                    :month "January"
                    :author "JBG"
                    :journal "Journal for Advanced Foobaring"
                    :volume "666"
                    :pages "123-124"
                    :isbn "978-3-16-148410-0"
                    :doi "10.1000/xyz123"
                    :abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    :publisher "Grapes & Apples"
                    :url "http://example.com"
                    })

  )

