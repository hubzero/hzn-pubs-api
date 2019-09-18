(ns hubzero-pubs.pubs
  (:require [yesql.core :refer [defqueries]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            )
  (:import java.security.MessageDigest)
  )

;; Maybe - rethink how to configure this - JBG
(def db {:dbtype "mysql"
         :dbname "example"
         :user "root"
         :password "PUk8zFrxsqsS83"
         ;:host "hub-mysql"
         :host "localhost"
         })

(defqueries "yesql/hzcms-queries.sql" { :connection db })

(defn _hash-file [file-path]
  (let [s (slurp file-path)
        algorithm (MessageDigest/getInstance "SHA-256")
        raw (.digest algorithm (.getBytes s))]
    (format "%032x" (BigInteger. 1 raw)))
  )

(defn- _date-str [d]
  (-> (f/formatters :mysql)
      (f/unparse d)
    )
  )

(defn get-prj [prj-id]
  (first (prj {:id prj-id})) 
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
  (add-pub-version<! ver) 
  )

(defn get-version [ver-id]
  (first (get-pub-version {:id ver-id})) 
  )

(defn update-version [ver]
  (update-pub-version! ver)
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
    (map :title)
    )
  
  (create-pub {:category 1
               :master_type "1" ;; jos_publication_master_types
               :project_id "1"
               :access 1 
               :created_by "1001"
               :created (_date-str (t/now))})

  (add-version {:publication_id "6"
                :main 1
                :state 3
                :title "Clofoo barbaz - Jambalya"
                :description ""
                :abstract ""
                :created (_date-str (t/now))
                :created_by "1001"
                :secret "popsecret" ;; strtolower(\Components\Projects\Helpers\Html::generateCode(10, 10, 0, 1, 1))
                :version_number 999 
                :license_type 0 ;; select id from jos_publication_licenses
                :access 1 })

 (get-version 6)

  (as-> (get-version 6) $
      (assoc $ :title (str (:title $) " - updated"))
      (assoc $ :modified (_date-str (t/now)))
      (assoc $ :modified_by 1001)
      (assoc $ :version_number 9999)
      (update-version $)
      )

  (add-attachment {:publication_version_id "5"
                   :publication_id "5" 
                   :created (_date-str (t/now))
                   :created_by "1001"
                   :role "1"
                   :path "foo"
                   :type "type"
                   :ordering 1
                   :element_id "1"
                   })

  (update-attachment {:publication_version_id "5"
                      :publication_id "5"
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
                      :id "4"
                      })

  (del-attachment "8")

  (f/show-formatters)

  (_date-str (t/now))

  (_hash-file "/home/jbg/Development/hub/data/srv/example/projects/prjfoobar/files/foo")

  (:alias (get-prj 1)) 

  )
