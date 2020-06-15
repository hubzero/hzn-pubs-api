(ns hzn-pubs-api.models.citations
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [clj-http.client :as http]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hzn-pubs-api.config :refer [config]]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn- search-doi-org
  "Ask doi.org for a specific DOI"
  [doi]
  (try
    (let [res (http/get (str "https://doi.org/doi:" doi)
                        {:headers {"Accept" "text/x-bibliography; style=apa"}})]
      (if (= 200 (:status res)) (:body res))
      )
    (catch Exception e nil)
    )
  )

(defn search
  "Search for a doi, first in our DB, then at doi.org"
  [doi]
  (let [citations (sel-citations {:doi (str "%" doi "%")} (_connection))]
    ;; If the citation is in the db, just send it back
    (if (> (count citations) 0)
      citations
      ;; Otherwise ask the internet
      (if-let [citation (search-doi-org doi)]
        [{:doi doi :formatted citation}] 
        []
        )
      )
    )
  )

(defn create [m]
  (->
    (reduce (fn [c k] (if (k c) c (assoc c k nil))) m
            [:type :title :year :month :author :journal :volume :pages :isbn :doi :abstract :publisher :url :issue :series :book :citation :eprint :edition :formatted])
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


(comment


(search-doi-org "10.1029/2007wr006641")

(search-doi-org "foo")

(search "foo")

  )
