(ns hubzero-pubs.utils
  )

(defn find-ancestor [el sel]
  (if el
    (if (.matches el sel) el (find-ancestor el.parentElement sel))
    )
  )

(defn author-key [a]
  (str (:id a) "_"
       (:user_id a) "_"
       (or (:name a) (str (:firstname a) "_" (:lastname a)))  "_"
       (:organization a))
  )

(defn format-citation [c]
  (str (:author c) ". "
       (:year c) ". "
       (:title c) ". "
       (:journal c) ", "
       (:volume c) ", "
       (:pages c) ". "
       "doi:" (:doi c)
       ) 
  )

(defn valid? [s]
  (swap! s assoc-in [:ui :errors]
         (reduce (fn [errors [k v]]
                   (if (= 0 (count (get-in @s [:data k])))
                     (assoc errors k v)
                     errors
                     )
                   ) {} {:title ["Title" "Can not be empty"]
                         :abstract ["Abstract" "Can not be empty"]
                         :publication-date ["Embargo date" "Can not be empty"]
                         :authors-list ["Authors"  "Can not be empty"]
                         })
         )
  (if (< (js/Date. (get-in @s [:data :publication-date])) (js/Date.))
    (swap! s assoc-in [:ui :errors :publication-date] ["Publication date" "Can not be in the past"])
    )
  (= (count (get-in @s [:ui :errors])) 0)
  )

(defn file-count [files]
  (reduce (fn [c d]
            (+ c (count (nth d 2 [])))
            ) 0 files) 
  )

