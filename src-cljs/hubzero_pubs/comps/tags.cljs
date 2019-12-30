(ns hubzero-pubs.comps.tags
  (:require [reagent.core :as r]
            [hubzero-pubs.comps.ui :as ui]
            [hubzero-pubs.utils :as utils]
            )
  )

(defn tag-creator [s]
  [:div {:href "#"
         :class [:ptag :creator (if (get-in @s [:ui :tag]) :hide)]
         :on-click #(swap! s assoc-in [:ui :tag] true)
         }
   [:div {:class :inner}
    [:div {:class [:add :icon]}
     (ui/icon s "#icon-plus")
     ]
    "Add new tag"
    ]
   ]
  )

(defn add-tag [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s update-in [:data :tags] conj (-> js/document
                                            (.querySelector ".new-tag")
                                            .-value))
  (swap! s assoc-in [:ui :tag] false)
  )

(defn tag-input [s]
  [^{;:component-did-mount
     ;#(-> js/document (.querySelector ".new-tag") (.focus))
     ;:component-did-update
     ;#(.log js/console "example-component-did-update")
     }
   (fn [] 
     [:input {:class :new-tag
              :type :text
              :placeholder "Enter tag"
              :onKeyUp #(if (= 13 (.-keyCode %)) (add-tag s %))
              }] 
     )])

(defn tag-creating [s]
  [:div {:class [:ptag :creating (if (get-in @s [:ui :tag]) :show)]}
   [:div {:class :inner}
    (tag-input s)    
    [:a {:class [:add :icon]
         :on-click #(add-tag s %)
         }
     (ui/icon s "#icon-plus")
     [:span {:class :name} "Add"]
     ] 
    ]
   ]
  )

(defn remove-tag [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:data :tags] (remove #{(-> e
                                                .-target
                                                (utils/find-ancestor ".tag")
                                                (.getAttribute "data-val"))} (get-in @s [:data :tags])))
  )

(defn tag [s name]
  [:a {:href "#" :class :ptag :key name :data-val name :on-click (fn [e]
                                                                   (.preventDefault e)
                                                                   (.stopPropagation e)
                                                                   )}
   [:div {:class :inner} name
    [:div {:class [:remove :icon] :on-click #(remove-tag s %)}
     (ui/icon s "#icon-cross")
     ]
    ]
   ]
  )

(defn tags [s]
  [:div {:class :field}
   [:label {:for :tags} "Tags:"]
   [:div {:class :field-wrapper}
    (merge
      [:div {:class [:item :ui :ptags]}]
      (map #(tag s %)  (get-in @s [:data :tags]))
      (tag-creator s)
      (tag-creating s)
      )
    ]
   ]
  )

