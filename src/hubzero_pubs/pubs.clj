(ns hubzero-pubs.pubs
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.conversion :refer [from-db-object]]
            [monger.operators :refer :all]
            )
  (:import org.bson.types.ObjectId)
  )

(defonce db-name "hubzero")
(defonce col-name "pubs")
(defonce mongodb (->
                   (mg/connect {:host "mongodb"})
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

(defn get-pubs [prj-id user-id]
  (prn "GET PUBS" prj-id user-id)
  ;(mc/find-maps mongodb col-name)
  (->> (mc/find-maps mongodb col-name {(str "authors-list." user-id) {$exists true} :prj-id (Integer/parseInt prj-id)})
    (map #(assoc % :_id (.toString (:_id %))))
    )
  )

(defn get-pub [id]
  (prn "GET PUB" id)
  (as-> (mc/find-one-as-map mongodb col-name { :_id (ObjectId. id) }) $
    (assoc $ :_id (.toString (:_id $)))
    )
;  (mc/find-one-as-map mongodb col-name { :_id (ObjectId. id) }) 
;  (as-> (mc/find-one mongodb col-name {:_id (ObjectId. id)}) $
;    (map (fn [k]
;           (prn k)
;           [(keyword k)
;            (if (= k "_id") (.toString (.get $ k)) (.get $ k))]
;           ) (.keySet $))
;    (into {} $) 
;    )
;
  )

(comment

  (get-pubs 1001)

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


