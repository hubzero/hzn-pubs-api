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
  (.preventDefault e)
  (swap! s assoc-in [:ui :panels key] show)
  (show-overlay s true)
  )

(defn overlay [s]
  [:div {:class :page-overlay :on-click #(close s) }]
  )

(defn header [s title]
  [:header
   [:a {:href "#" :class :icon :on-click #(close s)}
    (ui/icon s "#icon-left")
    [:span {:class :name} "Return"]
    ]
   [:div {:class :content}
    [:h1 title]
    ]
   ] 
  )

(defn textfield [s key name]
  [:input {:type :text
           :value (get-in @s [:data key (keyword name)])
           :on-change #(swap! s assoc-in [:data key (keyword name)]
                              (-> % .-target .-value)          
                              )}]
  )

(defn field [s key f]
  [:div {:class :field :key (:name f)}
   [:label {:for (:name f)} (:label f)]
   ((:type f) {
               :text (textfield s key (:name f))
               })
   ]
  )


