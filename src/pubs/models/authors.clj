(ns pubs.models.authors
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [pubs.config :refer [config]]
            [pubs.utils :as utils]
            [pubs.models.prjs :as prjs]
            [pubs.models.pubs :as pubs]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn set-email [a]
  (->> a
       :project_owner_id
       (prjs/get-owner)
       :invited_email
       (assoc a :email)
       )
  )

(defn set-poc [a]
  (assoc a :poc (boolean (> (:repository_contact a) 0)))
  )

(defn get-author [id]
  (->> (sel-author-by-id {:id id} (_connection))
       first
       set-email
       set-poc
       )
  )

(defn add [ver-id user-id a]
  (if-let [ex (first (sel-author {:publication_version_id ver-id
                                  :project_owner_id (:id a)
                                  } (_connection)))]
    ex
    (->>
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
                        :repository_contact (:poc a false)
                        } (_connection))  
      :generated_key
      (get-author)
      )
    )
  )

(defn create [ver-id user-id a]
  (let [pub (pubs/get-pub ver-id)
        owners (->> (prjs/get-owners (:prj-id pub))
                    (map (fn [o] [(:userid o) o]))
                    (into {})
                    )
        ]
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
  (let [a (get-author author-id)]
    (del-author! {:id author-id} (_connection))
    a
    )
  )


(defn edit [ver-id author-id a]
  (update-author! {:id author-id
                   :ordering (:index a 0)
                   :name (or (:fullname a)
                             (:name a)
                             (str (:firstname a) " " (:lastname a))) 
                   :firstname (:firstname a "")
                   :lastname (:lastname a "")
                   :organization (:organization a "")
                   :credit (:credit a "")
                   :publication_version_id ver-id
                   :user_id (:user_id a)
                   :project_owner_id (:project_owner_id a)
                   :repository_contact (:poc a false)
                   } (_connection))
  (prjs/update-email (:project_owner_id a) (:email a))
  (get-author author-id)
  )

(defn ls [ver-id]
  (->>
    (sel-pub-authors {:publication_version_id ver-id} (_connection))
    (map set-email)
    (reduce (fn [m a]
              (assoc m (:id a) {:id (:id a)
                                :userid (:user_id a)
                                :fullname (:name a)
                                :firstname (:firstname a)
                                :lastname (:lastname a)
                                :organization (:organization a)
                                :credit (:credit a)
                                :email (:email a)
                                :project_owner_id (:project_owner_id a)
                                :index (:ordering a)
                                :poc (:repository_contact a)
                                })
              ) {})
    )
  )

(comment

  (ls 176)

  (prjs/get-owner 41)

(update-prj-owner! {:invited_email "fem@ke-2.us" :id 41} (_connection))

  (get-author )
  )

