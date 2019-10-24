(ns hubzero-pubs.comps.options
  (:require
    [hubzero-pubs.utils :as utils]
    )
  )

(defn close [s el]
  (if (not (utils/find-ancestor el ".options-list, .options"))
    (doall (map
             #(-> % .-classList (.remove "open"))
             (array-seq (.querySelectorAll js/document ".options-list"))
             ) 
           )
    )
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

(defn items [s]
  [:div {:class [:options-list :--as-panel]}
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

