(ns hubzero-pubs.classic
  (:require [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [me.raynes.fs :as fs]
            [hubzero-pubs.config :refer [config]]
            )
;  (:gen-class)
  )

(def file-root "/srv/example/projects/")
(def file-dir "/files")

(def db (:mysql config))

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn get-user [id]
  (sel-user { :user_id id})
  )

(defn get-session [id]
  (sel-session {:session_id id})
  )

(defn get-prj [id]
  (prn "GET PRJ" id)
  (->
    (sel-prj {:id id})
    (first)
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

  (search-users "%j%")

  (get-prj 1)

  (get-files 1)

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

