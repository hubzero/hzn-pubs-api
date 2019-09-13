(ns hubzero-pubs.pubs
  (:require [yesql.core :refer [defqueries]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            ))

;; Maybe - rethink how to configure this - JBG
(def db {:dbtype "mysql"
         :dbname "example"
         :user "root"
         :password "PUk8zFrxsqsS83"
         ;:host "hub-mysql"
         :host "localhost"
         })

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn- _date-str [d]
  (-> (f/formatters :mysql)
      (f/unparse d)
    )
  )

(defn get-prj-users [prj-id]
  (prj-users {:id prj-id})
  )

(defn get-prj-pubs [prj-id]
  (prj-pubs {:id prj-id})
  )

(defn create-pub [pub]
  (create-pub<! pub)
  )

(defn add-version [ver]
  (add-version<! ver) 
  )

(defn add-attachment [att]
  (add-attachment<! att)
)

(defn update-attachment [att]
  (update-attachment! att)
  )

(defn del-attachment [id]
  (del-attachment! {:id id}) 
  )

(comment

  (get-prj-users 1)

  (->>
    (get-prj-pubs 1)
    (map :id)
    )
  
  (create-pub {:category 1
               :master_type "1" ;; jos_publication_master_types
               :project_id "1"
               :access 1 
               :created_by "1001"
               :created (_date-str (t/now))})

  (add-version {:publication_id "11"
                :main 1
                :state 3
                :title "Clofoo barbaz"
                :description ""
                :abstract ""
                :created (_date-str (t/now))
                :created_by "1001"
                :secret "popsecret" ;; strtolower(\Components\Projects\Helpers\Html::generateCode(10, 10, 0, 1, 1))
                :version_number 999 
                :license_type 0 ;; select id from jos_publication_licenses
                :access 1 })

  (add-attachment {:publication_version_id "13"
                   :publication_id "11" 
                   :created (_date-str (t/now))
                   :created_by "1001"
                   :role "1"
                   :path "foo"
                   :type "type"
                   :ordering 1
                   :element_id "1"
                   })

  (update-attachment {:publication_version_id "13"
                      :publication_id "11"
                      :created (_date-str (t/now))
                      :created_by "1001"
                      :modified_by "0"
                      :object_id "0"
                      :object_name "0"
                      :object_instance "0"
                      :object_revision "0"
                      :role "1"
                      :path "foo"
                      :type "file"
                      :ordering "1"
                      :content_hash "7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730"
                      :element_id "1"
                      :id "8"
                      })

  (del-attachment "8")

  (f/show-formatters)

  (_date-str (t/now))

  )
