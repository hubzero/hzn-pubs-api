(ns hubzero-pubs.classic.authors
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            [hubzero-pubs.classic.prjs :as prjs]
            [hubzero-pubs.classic.pubs :as pubs]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn add [ver-id user-id a]
  (prn "ADD AUTHOR" ver-id user-id a)
  (insert-author<! {:publication_version_id ver-id
                    :user_id (:userid a 0)
                    :ordering (:index a)
                    :name (:fullname a)
                    :firstname (:firstname a "")
                    :lastname (:lastname a "")
                    :org (:organization a "")
                    :credit (:credit a "") 
                    :created (f/unparse (:mysql f/formatters) (t/now))
                    :created_by user-id 
                    :status 1
                    :project_owner_id (:id a)
                    } (_connection))
  )

(defn create [ver-id user-id a]
  (prn "ADD AUTHOR" a)
  (let [pub (pubs/get-pub ver-id)
        owners (->> (prjs/get-owners (:prj-id pub))
                    (map (fn [o] [(:userid o) o]))
                    (into {})
                    )
        ]
    (prn "PUB" pub)
    (if-let [o (owners (:id a))]
      (add ver-id user-id (assoc a :id (:id o)))
      (as-> (prjs/add-owner (:prj-id pub) a) $
        (:generated_key $)
        (add ver-id user-id (assoc a :id $))
        )
      )
    )
  )

(defn rm [author-id]
  {:status (if (del-author! {:id author-id} (_connection)) 200 500)} 
  )

(defn edit [ver-id author-id a]
  {:status
   (if
     (update-author! {:id author-id
                      :ordering (:index a)
                        :name (:fullname a)
                        :firstname (:firstname a "")
                        :lastname (:lastname a "")
                        :organization (:organization a "")
                        :credit (:credit a "")
                        :publication_version_id ver-id
                        :user_id (:user_id a)
                        :project_owner_id (:project_owner_id a)
                        } (_connection))

     (if-let [poid (:project_owner_id a)]
       (if (update-prj-owner! {:invited_email (:email a) :id poid} (_connection))
         200 500) 200) 500) }
  )

(defn ls [ver-id]
  (->>
    (sel-pub-authors {:publication_version_id ver-id} (_connection))
    (reduce (fn [m a]
              (assoc m (:id a) {:id (:id a)
                                :userid (:user_id a)
                                :fullname (:name a)
                                :firstname (:firstname a)
                                :lastname (:lastname a)
                                :organization (:organization a)
                                :credit (:credit a)
                                :email (:invited_email a)
                                :project_owner_id (:project_owner_id a)
                                })
              ) {})
    )
  )

(comment

(ls ver-id)

(def ver-id 196)
(def user-id 1001)

(def a
 {:id 431, :name "Petra Smart", :organization "foo"} 
  )

(edit ver-id a)
  
  )
