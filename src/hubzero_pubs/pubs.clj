(ns hubzero-pubs.pubs
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.conversion :refer [from-db-object]]
            )
  (:import org.bson.types.ObjectId)
  )

(defonce db-name "hubzero")
(defonce col-name "pubs")
(defonce mongodb (->
                   (mg/connect)
                   (mg/get-db db-name)
                   ))

(defn- _insert [pub]
  (as-> (mc/insert-and-return mongodb col-name (assoc pub :_id (ObjectId.))) $
    (:_id $)
    {:_id (.toString $)} 
    )
  )

(defn- _update [pub]
  (mc/update-by-id mongodb col-name (ObjectId. (:_id pub)) (dissoc pub :_id))
  {:_id (.toString (:_id pub))}
  )

(defn create-pub [pub]
  (prn "CREATE PUB" pub)
  (if (:_id pub) (_update pub) (_insert pub))
  )

(defn get-pubs []
  (mc/find-maps mongodb col-name)
  )

(defn get-pub [id]
  (prn "GET PUB" id)
  (as-> (mc/find-one mongodb col-name {:_id (ObjectId. id)}) $
    (map (fn [k]
           (prn k)
           [(keyword k)
            (if (= k "_id") (.toString (.get $ k)) (.get $ k))]
           ) (.keySet $))
    (into {} $) 
    )
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


  (get-pub "5dfe449f1bbe8f22701dcf27")

  )


