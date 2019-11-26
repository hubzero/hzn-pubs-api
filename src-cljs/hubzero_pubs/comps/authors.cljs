(ns hubzero-pubs.comps.authors
  (:require
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.panels :as panels] 
    ) 
  )

(defn user-click [s id key e]
  (swap! s update-in [:ui key id] not)
  (if (some #{id} (get-in @s [:data key]))
    (swap! s assoc-in [:data key] (remove #{id} (get-in @s [:data key])))
    (swap! s update-in [:data key] conj id)
    )
  )

(defn user [s key u]
  [:li {:key (:userid u) :on-click #(user-click s (:userid u) key %)}
   [:div {:class :inner}
    [:div {:class [:selected-indicator (if (get-in @s [:ui key (:userid u)]) :selected)] }
     [:div {:class :icon}
      (ui/icon s "#icon-checkmark")
      [:span {:class :name} "Selected"]
      ]
     ]
    [:div {:class :icon}
     (ui/icon s "#icon-user")
     ] 
    (:fullname u)
    ]
   ]
  )

(defn users [s key]
  (merge
    [:ul {:class [:ui :user-selector :item-selector]}]
    (doall
      (map #(user s key %) (vals (:users @s)))
      )
    )
  )

(defn authors-list [s key]
  [:div {:class [:page-panel :as-panel key (if (get-in @s [:ui :panels key]) :open)]}
   [:div {:class :inner}
    (panels/header s "Add authors from project team")
    (users s key)
    ]
   ]
  )


