(ns hubzero-pubs.classic.authors
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [hubzero-pubs.utils :as utils]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn add [ver-id user-id a]
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
                    :project_owner_id (:project_owner_id a)
                    } (_connection)) 
  )

(defn rm [ver-id author-id]
  (del-author! {:publication_version_id ver-id 
                :user_id author-id} (_connection))
  )

(defn edit [ver-id prj-id a]
  (update-author! {:ordering (:index a)
                   :name (:fullname a)
                   :firstname (:firstname a "")
                   :lastname (:lastname a "")
                   :org (:organization a "")
                   :credit (:credit a "")
                   :publication_version_id ver-id
                   :user_id (:user_id a)
                   :project_owner_id (:project_owner_id a)
                   } (_connection))
  (if-let [poid (:id a)]
    (update-prj-owner! {:invited_email (:email a) :id poid} (_connection))
    )
  )
 
(defn authors [ver-id]
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
 

