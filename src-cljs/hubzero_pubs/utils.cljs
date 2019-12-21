(ns hubzero-pubs.utils
  )

(defn find-ancestor [el sel]
  (if el
    (if (.matches el sel) el (find-ancestor el.parentElement sel))
    )
  )

(defn eat-cookies []
  (reduce (fn [m c]
            (as-> (clojure.string/split c #"=") $
              (assoc m 
                     (keyword (clojure.string/trim (first $))) 
                     (if (> (count $) 1)
                       (clojure.string/trim (last $))
                       nil
                       )
                     )

              )
            ) {} (clojure.string/split (.-cookie js/document) #";"))
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
 
