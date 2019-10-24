(ns hubzero-pubs.comps.panels
  (:require
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

(defn show [s e show panel]
  (.preventDefault e)
  (as-> (.querySelector js/document (str ".as-panel." (name panel))) $
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

(defn files-header [s]
  [:header
     [:a {:href "#" :class :icon :on-click #(close s)}
      (ui/icon s "#icon-left")
      [:span {:class :name} "Return"]
      ]
     [:div {:class :content}
      [:h1 "Add files from project"]
      ]
     ] 
  )

(defn files-progress [s]
  [:div {:class [:ui :progress-bar]}
   [:div {:class :status}
    [:strong (str (get-in @s [:data :usage :size])
                  (get-in @s [:data :usage :units])
                  " ("
                  (get-in @s [:data :usage :percent])
                  ")"
                  )]
    " of your "
    [:strong (str (get-in @s [:data :usage :max])
                  (get-in @s [:data :usage :units])
                  )]
    ]
   [:div {:class :progress}

    [:div {:class :bar}
     [:span (str (get-in @s [:data :usage :percent]) "%")]
     ]
    ]
   ]
  )

(defn files [s]
  [:div {:class [:page-panel :as-panel :files :-open]}
   [:div {:class :inner}
    (files-header s)  
    (files-progress s)  
    ]
   ]
  )

