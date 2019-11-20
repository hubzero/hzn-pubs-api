(ns hubzero-pubs.comps.options
  (:require
    [hubzero-pubs.utils :as utils]
    )
  )

(defn close [s]
  (swap! s assoc-in [:ui :options] nil)
;  (if (not (utils/find-ancestor el ".options-list, .options"))
;    (doall (map
;             #(-> % .-classList (.remove "open"))
;             (array-seq (.querySelectorAll js/document ".options-list"))
;             ) 
;           )
;    )
  )
 
(defn item [s i name]
  [:li
   [:a {:href "#"}
    [:div {:class :icon}
     [:svg [:use {:xlinkHref i}]]
     [:span {:class :name} name]
     ]
    name
    ]
   ]
  )

(defn items [s key name]
  [:div {:class [:options-list
                 :--as-panel
                 (if (get-in @s [:ui :options key name]) :open)
                 ]}
   [:div {:class :inner}
    (merge
      [:ul]
      (item s "#icon-edit" "Rename")
      (item s "#icon-download" "Download")
      (item s "#icon-delete" "Remove")
      ) 
    ]
   ]
  )

(defn authors [s]
  [:div {:class [:authors-options
                 :options-list
                 (if (get-in @s [:ui :options :authors]) :open)
                 ]}
   [:div {:class :inner}
    (merge
      [:ul]
      (item s "#icon-user" "Add from project")
      (item s "#icon-user" "Add new")
      )
    ]
   ]
  )
