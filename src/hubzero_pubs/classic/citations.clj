(ns hubzero-pubs.classic.citations
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn search [doi]
  (sel-citations {:doi (str "%" doi "%")} (_connection))
  )

(defn create [m]
  (->
    (reduce (fn [c k] (if (k c) c (assoc c k nil))) m
            [:type :title :year :month :author :journal :volume :pages :isbn :doi :abstract :publisher :url :issue :series :book :citation :eprint :edition])
    (insert-citation<! (_connection)))

  )

(defn get-types []
  (sel-citation-types {} (_connection))
  )
 
(defn add [ver-id citation-id]
  (insert-citation-assoc<! {:cid citation-id 
                            :oid ver-id
                            :type nil
                            :tbl "publications"
                            } (_connection))
  )

(defn rm [ver-id citation-id]
  (del-citation-assoc! {:cid citation-id :oid ver-id} (_connection))
  )

(defn ls [ver-id]
  (->>
    (sel-citation-assocs-oid {:oid ver-id} (_connection))
    (map #(first (sel-citation-by-id % (_connection))))
    ) 
  )

