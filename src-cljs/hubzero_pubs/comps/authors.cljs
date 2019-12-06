(ns hubzero-pubs.comps.authors
  (:require
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.data :as data] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.panels :as panels] 
    ) 
  )

(defn user-click [s u key e]
  (swap! s update-in [:ui key (:id u)] not)
  (if (get-in @s [:data key (:id u)])
    (swap! s update-in [:data key] dissoc (:id u))
    (swap! s assoc-in [:data key (:id u)] u)
    )
  )

(defn user [s key u]
  [:li {:key (:userid u) :on-click #(user-click s {:id (:userid u)
                                                   :name (:name u)
                                                   :organization (:organization u)
                                                   } key %)}
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

(defn add-click [s key e u]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s update-in [:data :authors-list] assoc (:id u) u)
  )

(defn buttons-new [s key]
  [:div {:class [:field :buttons]}
   [:a {:class :btn
        :href "#"
        :on-click #(add-click s key  % {:id (get-in @s [:data key :id]) 
                                        :name (get-in @s [:data key :name]) 
                                        :organization (get-in @s [:data key :organization]) 
                                        })
        } "Add author"]
   [:a {:class [:btn :secondary]
        :href "#"
        :on-click #(panels/close s)
        } "Close"]
   ] 
  )

(defn result-click [s key e res]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:data key :firstname] (str (:givenname res) " " (:middlename res)) ) 
  (swap! s assoc-in [:data key :lastname] (:surname res))
  (swap! s assoc-in [:data key :organization] (:org res))
  (swap! s assoc-in [:data key :email] (:email res))
  (swap! s assoc-in [:data key :id] (:id res))
  (swap! s assoc-in [:data key :name] (:name res))
  (swap! s assoc :user-query "")
  (swap! s assoc :user-results nil)
  )

(defn result [s key res]
  [:li {:class :result :key (str (:name res) (:org res))}
   [:a {:href "#"
        :on-click #(result-click s key % res)
        } (:name res) ", " [:span (:org res)]]
   ]
  )

(defn results [s key]
  (merge [:ul {:class :results}]
         (doall (map #(result s key %) (:user-results @s)))
         )
  )

(defn search [s key]
  [:div {:class :field}
   [:label {:for :title} "Look up author:"]
   [:input {:class [:form-textinput :loading-circle :hide-loading-circle]
            :type :text
            :value (:user-query @s)
            :onChange (fn [e]
                        (swap! s assoc :user-query (-> e .-target .-value))
                        (data/search-users s)
                        )
            }]
   [:div {:class [:ui :autocomplete]}
    (results s key)
    ]
   ]
  )

(defn fieldset [s key fields] 
  [:fieldset {:class key}
   (merge
     [:div {:class :selected-item}]
     (doall (map #(panels/field s key %) fields))
     )
   [:hr]
   (search s key)
   (buttons-new s key) 
   ]
  )

(defn authors-new [s key]
  [:div {:class [:page-panel :as-panel key (if (get-in @s [:ui :panels key]) :open)]}
   [:div {:class :inner}
    (panels/header s "Add new authors")
    (fieldset s key [{:name "firstname" :label "First name" :type :text}
                     {:name "lastname" :label "Last name" :type :text}
                     {:name "organization" :label "Organization" :type :text}
                     {:name "email" :label "Email" :type :text}
                     ])
    ]
   ]
  )



