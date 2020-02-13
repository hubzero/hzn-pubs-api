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
                   ) {} {:title "Title"
                         :abstract "Abstract"
                         :publication-date "Publication date"
                         :authors-list "Authors" 
                         })
         )
  (= (count (get-in @s [:ui :errors])) 0)
  )
