(ns hubzero-pubs.comps.options
  (:require
    [hubzero-pubs.utils :as utils]
    [hubzero-pubs.data :as data]
    [hubzero-pubs.comps.panels :as panels]
    )
  )

(defn close [s]
  (swap! s assoc-in [:ui :options] nil)
  )
 
(defn item [s i name f]
  [:li
   [:a {:href "#" :on-click #(f s %)}
    [:div {:class :icon}
     [:svg [:use {:xlinkHref i}]]
     [:span {:class :name} name]
     ] name]
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
      (item s "#icon-edit" "Rename" #())
      (item s "#icon-download" "Download" #())
      (item s "#icon-delete" "Remove" #())
      ) 
    ]
   ]
  )

(defn handle-add-author [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (data/get-users s)
  (panels/show-overlay s true)
  (swap! s assoc-in [:ui :panels :authors-list] true)
  (close s)
  )

(defn handle-new-author [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (panels/show-overlay s true)
  (swap! s assoc-in [:ui :panels :authors-new] true)
  (close s)
  )

(defn authors [s]
  [:div {:class [:authors-options
                 :options-list
                 (if (get-in @s [:ui :options :authors]) :open)
                 ]}
   [:div {:class :inner}
    (merge
      [:ul]
      (item s "#icon-user" "Add from project" handle-add-author)
      (item s "#icon-user" "Add new" handle-new-author)
      )
    ]
   ]
  )

(defn handle-doi [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (panels/show-overlay s true)
  (swap! s assoc-in [:ui :panels :citations-doi] true)
  (close s)
  )

(defn handle-manual [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (data/get-citation-types s)
  (panels/show-overlay s true)
  (swap! s assoc-in [:ui :panels :citations-manual] true)
  (close s)
  )

(defn citations [s]
  [:div {:class [:citations-options
                 :options-list
                 (if (get-in @s [:ui :options :citations]) :open)
                 ]}
   [:div {:class :inner}
    (merge
      [:ul]
      (item s "#icon-file-text2" "Enter a DOI" handle-doi)
      (item s "#icon-file-text2" "Enter Manually" handle-manual)
      )
    ]
   ]
  )
