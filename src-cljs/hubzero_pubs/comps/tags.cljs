(ns hubzero-pubs.comps.tags
  (:require [reagent.core :as r]
            [hubzero-pubs.comps.ui :as ui]
            [hubzero-pubs.utils :as utils]
            )
  )

(defn tag-creator [s]
  [:div.ptag.creator {:href "#"
                      :class (if (get-in @s [:ui :tag]) :hide)
                      :on-click #(swap! s assoc-in [:ui :tag] true)
                      }
   [:div.inner
    [:div.add.icon
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
     [:input.new-tag {
                      :type :text
                      :placeholder "Enter tag"
                      :onKeyUp #(if (= 13 (.-keyCode %)) (add-tag s %))
                      }] 
     )])

(defn tag-creating [s]
  [:div.ptag.creating {:class (if (get-in @s [:ui :tag]) :show)}
   [:div.inner
    (tag-input s)    
    [:a.add.icon { :on-click #(add-tag s %) }
     (ui/icon s "#icon-plus")
     [:span.name "Add"]
     ] 
    ]
   ]
  )

(defn remove-tag [s e]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:data :tags] (remove #{(-> e
                                                .-target
                                                (utils/find-ancestor ".ptag")
                                                (.getAttribute "data-val"))} (get-in @s [:data :tags])))
  )

(defn tag [s name]
  [:a.ptag {:href "#" :key name :data-val name :on-click (fn [e]
                                                           (.preventDefault e)
                                                           (.stopPropagation e)
                                                           )}
   [:div.inner name
    [:div.remove.icon {:on-click #(remove-tag s %)}
     (ui/icon s "#icon-cross")
     ]
    ]
   ]
  )

(defn tags [s]
  [:div#a-tags.field
   [:label {:for :tags} "Tags:"]
   [:div.field-wrapper
    (merge
      [:div.item.ui.ptags]
      (map #(tag s %)  (get-in @s [:data :tags]))
      (tag-creator s)
      (tag-creating s)
      )
    ]
   ]
  )

