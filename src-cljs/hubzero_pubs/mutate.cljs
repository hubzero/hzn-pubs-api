(ns hubzero-pubs.mutate)

(defn- _prepare-authors [data ak]
  (->> (ak data)
       (map (fn [[k v]] [(str k) v]))
       (into {})
       (assoc data ak)
       )
  )

(defn- _prepare-files [data fk]
  (->> (fk data)
       (map (fn [[k v]] {:path k :name v}))
       (assoc data fk)
       )
  )

(defn prepare [data]
  (-> (_prepare-authors data :authors-list)
      (_prepare-files :content)
      (_prepare-files :images)
      (_prepare-files :support-docs)
      )
  )

(defn- _coerce-authors [data ak]
  (->> (ak data)
       (map (fn [[k v]] [(js/parseInt (name k)) v]))
       (into {}) 
       (assoc data ak)
       )
  )

(defn- _coerce-files [data fk]
  (->> (fk data)
       (reduce (fn [m f] (assoc m (:path f) (:name f))) {})
       (assoc data fk)
       )
  )

(defn coerce [data]
  (-> (_coerce-authors data :authors-list)
      (_coerce-files :content)
      ;(_coerce-files :images)
      ;(_coerce-files :support-docs)
      )
  )
