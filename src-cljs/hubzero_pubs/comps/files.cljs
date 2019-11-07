(ns hubzero-pubs.comps.files
  (:require
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.panels :as panels] 
    ) 
  )


(defn header [s]
  [:header
   [:a {:href "#" :class :icon :on-click #(panels/close s)}
    (ui/icon s "#icon-left")
    [:span {:class :name} "Return"]
    ]
   [:div {:class :content}
    [:h1 "Add files from project"]
    ]
   ] 
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
       :on-click #(folder-pop s %)

       }
   (ui/icon s "#icon-left")
   [:span {:class :name} "Return"]
   ] 
  )

(defn subheader [s]
  [:header {:class :subheader}
   (backarrow s)   
   [:div {:class :content}
    [:h1 (last (get-in @s [:ui :current-folder]))]
    ]  
   ]
  )

(defn select-all [s]
  [:li {:class :select-all}
   [:div {:class :inner}
    [:div {:class :selected-indicator}
     [:div {:class :icon}
      (ui/icon s "#icon-checkmark")
      [:span {:class :name} "Selected"]
      ] 
     ] "Select all"
    ]
   ] 
  )

(defn file-selector [s files index]
  [:ul {:class [:ui :file-selector]}
   (select-all s)
   (doall (map (fn [[path name]] (file s path name)) (as-> files $ (nth $ index) (map (fn [f] [(first $) f]) (last $)))))
   (doall (map (fn [[path name]] (folder s path name (inc index))) (as-> files $ (nth $ index) (map (fn [f] [(first $) f]) (second $)))))
   ] 
  )

(defn container [s files index]
  [:div {:class :overlay-panel-container}
   (file-selector s files index)
   ]
  )

(defn subpanel [s name files index]
  [:div {:id name :class [:panel-subpanel :as-panel :files :-open]}
   (file-selector s files index)
   ] 
  )

(defn files [s]
  [:div {:class [:page-panel :as-panel :files :-open]}
   [:div {:class :inner}
    (header s)  
    (progress s)
    (subheader s)
    (container s (:files @s) 0)
    ]
   ]
  )

(defn file-click [s path name e]
  (prn (spf path name))
  (-> e 
      .-target
      (utils/find-ancestor "li")
      (.querySelector ".selected-indicator")
      .-classList
      (.toggle "selected")
      )
  (let [k (spf path name)]
    (if (get-in @s [:data :content k])
      (swap! s update-in [:data :content] dissoc k)
      (swap! s assoc-in [:data :content k] name)
      )   
    )
  )

(defn file [s path name]
  [:li {:key name :on-click #(file-click s path name %)}
   [:div {:class [:inner] }
    [:div {:class [:selected-indicator (if (get-in @s [:data :content (spf path name)]) :selected)] }
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

(defn folder-pop [s e]
  (-> (get-in @s [:ui :current-panel])
      (first)
      .-classList
      (.remove "open") 
      )
  (swap! s update-in [:ui :current-panel] pop)
  (swap! s update-in [:ui :current-folder] pop)
  )

(defn folder-push [s name e]
  (.stopPropagation e)
  (let [node (-> e 
                 .-target
                 (utils/find-ancestor "li")
                 (.querySelector ".panel-subpanel")
                 )
        ]
    (-> node .-classList (.toggle "open"))
    (swap! s update-in [:ui :current-panel] conj node)
    )
  (swap! s update-in [:ui :current-folder] conj name)
  )

;(def s hubzero-pubs.core/s)

(defn spf [path file]
  (str path "/" file)
  )
 
(defn add-folder-files [s index]
  (as-> (:files @s) $
    (nth $ index) 
    (first $)
    (reduce (fn [c f]
              (if (clojure.string/includes? (first f) $)
                (reduce (fn [c2 f2]
                          (let [k (spf (first f) f2)]
                            (if (c2 k)
                              (dissoc c2 k)
                              (assoc c2 k f2)
                              )
                            )
                          ) c (last f))
                c
                )
              )
            (get-in @s [:data :content]) (:files @s))
    (swap! s assoc-in [:data :content] $)
    )
  )

(defn folder-click [s index e]
  (.stopPropagation e)
  (-> e 
      .-target
      (utils/find-ancestor "li")
      (.querySelector ".selected-indicator")
      .-classList
      (.toggle "selected") 
      )
  (add-folder-files s index)
  )

(defn folder [s path name index]
  [:li {:key name :on-click #(folder-push s name %)}
   [:div {:class [:inner :folder]}
    [:div {:class :selected-indicator :on-click #(folder-click s index %)}
     [:div {:class :icon }
      (ui/icon s "#icon-checkmark")
      [:span {:class :name} "Selected indicator"]
      ]
     ]
    [:header
     [:div {:class :icon}
      (ui/icon s "#icon-folder-open")
      [:span {:class :name} "Folder"]
      ]
     name
     ]
    ]
   (if (< index (count (:files @s)))
     (subpanel s name (:files @s) index)
     )
   ]
  )

