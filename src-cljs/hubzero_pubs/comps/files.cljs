(ns hubzero-pubs.comps.files
  (:require
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.panels :as panels] 
    [hubzero-pubs.comps.folders :as folders] 
    ) 
  )


(defn progress [s]
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

(defn backarrow [s]
  [:a {:href "#"
       :class [:icon (if (> (count (get-in @s [:ui :current-folder])) 1) :show)]
       :on-click #(folders/folder-pop s %)

       }
   (ui/icon s "#icon-left")
   [:span {:class :name} "Return"]
   ] 
  )

(defn subheader [s]
  [:header {:class :subheader}
   (backarrow s)   
   [:div {:class :content}
    [:h1 (first (last (get-in @s [:ui :current-folder])))]
    ]  
   ]
  )

(defn select-all [s key index]
  [:li {:class :select-all :on-click #(folders/folder-click s key index %)}
   [:div {:class :inner}
    [:div {:class [:selected-indicator (if (folders/folder-selected? s key index) :selected)]}
     [:div {:class :icon}
      (ui/icon s "#icon-checkmark")
      [:span {:class :name} "Selected"]
      ]
     ] "Select all"
    ]
   ]
  )

(defn file-click [s path name key e]
  (let [k (folders/spf path name)]
    (if (get-in @s [:data key k])
      (swap! s update-in [:data key] dissoc k)
      (swap! s assoc-in [:data key k] name)
      )   
    )
  )
 
(defn file [s path name key]
  [:li {:key name :on-click #(file-click s path name key %)}
   [:div {:class [:inner] }
    [:div {:class [:selected-indicator (if (get-in @s [:data key (folders/spf path name)]) :selected)] }
     [:div {:class :icon}
      (ui/icon s "#icon-checkmark")
      [:span {:class :name} "Selected"]
      ]
     ]
    [:div {:class :icon}
     (ui/icon s "#icon-file-text2")
     [:span {:class :name} "Remove"]
     ] 
    name
    ]
   ]
  )

(defn file-selector [s files key index]
  [:ul {:class [:ui :file-selector :item-selector]}
   (select-all s key index)
   (doall (map (fn [[path name]] (file s path name key)) (as-> files $ (nth $ index) (map (fn [f] [(first $) f]) (last $)))))
   (doall (map (fn [[path name]] (folders/folder s path name key (inc index))) (as-> files $ (nth $ index) (map (fn [f] [(first $) f]) (second $)))))
   ] 
  )

(defn container [s files key index]
  [:div {:class :overlay-panel-container}
   (file-selector s files key index)
   ]
  )

(defn subpanel [s files name key index]
  [:div {:id name :class [:panel-subpanel :as-panel :files :-open]}
   (file-selector s files key index)
   ] 
  )

(defn files [s key]
  [:div {:class [:page-panel :as-panel key :-open (if (get-in @s [:ui :panels key]) :open)]}
   [:div {:class :inner}
    (panels/header s "Add files from project")  
    (progress s)
    (subheader s)
    (container s (:files @s) key 0)
    ]
   ]
  )


