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
  (doall (map
           #(-> % .-classList (.remove "open"))
           (array-seq (.querySelectorAll js/document ".page-panel, .as-panel"))
           )
         )
  (show-overlay s false)
  )

(defn show [s e show key]
  (.preventDefault e)
  (data/get-files s 1)
  (as-> (.querySelector js/document (str ".as-panel." (name key))) $
    (.-classList $)
    (if show (.add $ "open") (.remove $ "open"))
    )
  (show-overlay s true)
  )

(defn overlay [s]
  [:div {:class :page-overlay :on-click #(close s) }]
  )

(defn page-panel [s]
  [:div {:class [:options-list :page-panel :as-panel]}]
  )


