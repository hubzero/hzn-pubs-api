(ns hubzero-pubs.pubs
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            )
  )

(defonce db-name "hubzero")
(defonce col-name "pubs")
(defonce mongodb (->
                   (mg/connect)
                   (mg/get-db db-name)
                   ))

(defn create-pub [pub]
  (mc/insert-and-return mongodb col-name pub)
  )

(defn get-pubs []
  (mc/find-maps mongodb col-name)
  )

(defn foo []
  )

(comment

  (create-pub {:title "Foobar"
               :abstract "Foostract"
               :description "Foo bar baz."
               :type "files"

               :release_notes "*Foo *Bar *Baz"

               :authors [1001]
               :license 1
               :license_agree true
               :files []
               :owners []
               :tags []
               })

  )


