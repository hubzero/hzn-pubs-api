(ns hubzero-pubs.comps.panels
  (:require
    [hubzero-pubs.data :as data] 
    [hubzero-pubs.comps.ui :as ui] 
    ) 
  )

(defn show-overlay [s show]
  (as-> js/document $ 
    (.querySelector $ "body")
    (.-classList $)
    (if show
      (.add $ "with-overlay")
      (.remove $ "with-overlay")
      )
    )

  )

(defn close [s]
;  (doall (map
;           #(-> % .-classList (.remove "open"))
;           (array-seq (.querySelectorAll js/document ".page-panel, .as-panel"))
;           )
;         )
  (swap! s assoc-in [:ui :panels] nil)
  (show-overlay s false)
  )

(defn show [s e show key]
  (prn "SHOW SHOW SHOW" key)
  (.preventDefault e)
  (data/get-files s)
  (swap! s assoc-in [:ui :panels key] show)
  (show-overlay s true)
  )

(defn overlay [s]
  [:div {:class :page-overlay :on-click #(close s) }]
  )

