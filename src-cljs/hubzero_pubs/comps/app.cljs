(ns hubzero-pubs.comps.app
  (:require
    [hubzero-pubs.utils :as utils]
    [hubzero-pubs.comps.panels :as panels]
    [hubzero-pubs.comps.files :as files]
    [hubzero-pubs.comps.tags :as tags]
    [hubzero-pubs.comps.options :as options] 
    [hubzero-pubs.comps.ui :as ui] 
    )
  )

(defn textfield [s title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:input {:type :text
            :name name
            :on-change #(swap! s assoc-in [:data (keyword name)] (-> % .-target .-value))}]
   ]
  )

(defn textarea [s title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:textarea {:name name
               :on-change #(swap! s assoc-in [:data (keyword name)] (-> % .-target .-value))  
               }]
   ]
  )

(defn file [s key name]
  [:li {:class :item :key name}
   (ui/icon s "#icon-file-text2")
   [:div {:class "main"} [:a {:href "#"} name]]
   [:div {:class "options" :on-click
          #(swap! s assoc-in [:ui :options key name] true)
          }
    (ui/icon s "#icon-dots")
    (options/items s key name)
    ]
   ] 
  )

(defn author [s author]
  [:li {:class :item :key (:name author)}
   (ui/icon s "#icon-user")
   [:div {:class :main}
    [:div {:class :subject} [:a {:href "#"} (:name author)] ]
    [:div {:class :meta} [:a {:href "#"} (:org author)] ]
    [:div {:class [:ui :checkbox :inline :meta]}
     [:input {:type :checkbox :name :poc}]
     [:label (:for :poc) "Point of contact"]
     ]
    ]
   ]
  )

(defn image [s name]
  [:li {:class :item :key name}
   (ui/icon s "#icon-file-picture")
   [:div {:class :main} [:a {:href "#"} name]]
   (ui/icon s "#icon-dots")
   ]
  )

(defn item [s name key]
  (key {
        :content (file s key name)
        :support-docs (file s key name)
        :authors (author s name)
        :images (image s name)
        })
  )

(defn items [s key]
  (merge 
    [:ul]
    (doall
      (map #(item s % key) (as-> (get-in @s [:data key]) $
                             (if (map? $) (vals $) $)
                             ))  
      )
    )
  )

(defn selector-classes [s key classes]
  (concat classes (key {:authors [:options :author-selector ]}))
  )

(defn collection [s title key options-comp f]
  [:div {:class :field}
   [:label {:for :title} title]
   [:div {:class :collection}
    (items s key)
    [:div {:class (selector-classes s key [:selector]) }
     [:a {:href "#"
          :class :selector-button
          :on-click #(f s % key)}
      (ui/icon s "#icon-plus")
      ]  
      options-comp
     ]
    ]
   ]
  )

(defn license-item [s name detail]
  [:div {:class :item :key name}
   [:div {:class :main}
    [:header {:class :subject} name]   
    [:div {:class [:details :meta]} detail]  
    ]
   ]
  )

(defn acknowledge [s]
  [:div {:class [:details :last-child]}
   [:div {:class :inner}
    [:header "License acknowledgement"]
    [:div {:class [:ui :checkbox :inline]}
     [:input {:type :checkbox :class :important :name :poc} ]
     [:label {:for :poc}
      "I have read the "
      [:a {:href "#"} "license terms"]
      " and agree to license my work under the attribution 3.0 unported license."
      ]
     ]
    ]
   ] 
  )

(defn licenses [s]
  [:div {:class :field}
   [:label {:for :title} "License:"]
   (merge
     [:div {:class [:collection :single-item]}
      (map (fn [l]
             (license-item s (:name l) (:detail l))
             ) (get-in @s [:data :licenses]))
      (acknowledge s)
      ]   
     )
   ]
  )

(defn agreements [s]
  [:div {:class :field}
   [:label {:for :agreement} "Agreements"]
   [:div {:class :field-wrapper}
    [:div {:class [:item :ui :checkbox :inline]}
     [:input {:type :checkbox :name :poc}]
     [:label {:for :pox} "I and all publication authors have read and agree to PURR terms of deposit."]
     ]
    ]
   ]
  )


(defn essentials [s]
  [:fieldset {:class :section}
   [:header
    [:legend "Essentials"]
    [:div {:class "note"} "all field required"]
    ]
    (textfield s "Title:" "title")
    (textarea s "Synopsis:" "synopsis")
    (collection s "Content:" :content nil (fn [s e key] (panels/show s e true key)))
    (collection s "Authors:" :authors (options/authors s) (fn [s e key]
                                                            (.stopPropagation e)
                                                            (swap! s assoc-in [:ui :options :authors] true)
                                                            ))
    (licenses s)
    (agreements s)
   ]
  )

(defn additional-details [s]
  [:fieldset {:class :section}
   [:header [:legend "Additional Details"]]
   (collection s "Image gallery:" :images nil
               (fn [s e key] (panels/show s e true key)))
   (textfield s "External website URL:" "url")
   (collection s "Supporting docs:" :support-docs nil
               (fn [s e key] (panels/show s e true key)))
   (tags/tags s)
   (collection s "Citations:" :citations nil #())
   (textarea s "Version release notes:" "release-notes")
   ]
  )

(defn publish-settings [s]
  [:fieldset {:class :section}
   [:header [:legend "Publish Settings"]]
    (textfield s "Publication date:" "publication-date")
    (textarea s "Comments to the administrator:" "comments")
   ]
  )

(defn aside-buttons [s]
  [:aside
   [:fieldset {:class :buttons-aside}
    [:a {:href "#" :class :btn} "Proceed with the draft"]
    [:a {:href "#" :class [:btn :secondary]} "Submit draft"]
    ]
   ]
  )

(defn section-buttons [s]
  [:fieldset {:class [:section :buttons]}
   [:div {:class [:field :buttons]}
    [:a {:href "#" :class :btn} "Proceed with the draft"]
    ]
   ]
  )

(defn main-form [s]
  [:main
   [:form
    (essentials s) 
    (additional-details s)
    (publish-settings s)
    (section-buttons s)
    ]
   ]
  )

(defn nav-section [s]
  [:div
   [:header "Essentials"]
   [:ul
    [:li [:a {:href "#"} "Title"]]
    [:li "Synopsis"]
    [:li "Content"]
    [:li "Authors"]
    [:li "License"]
    [:li "Point of Contact"]
    [:li "Agreements"]
    ]
   ]
  )
 
(defn navigation [s]
  [:aside
   [:nav
    (nav-section s)
    ]
   ]
  )

(defn page [s]
  [:div {:class :page}
   (navigation s) 
   (main-form s)
   (aside-buttons s)
   ]
  )

(defn wrap [s]
  [:div {:class :wrap :on-click (fn [e] (options/close s)) }
   [:header
    [:h1 "New Publication"]
    (page s)
    ]])

(defn app [s]
  (merge
    [:div]
    (wrap s)
    (panels/overlay s)
    (files/files s :content)
    (files/files s :images)
    (files/files s :support-docs)
    )
  )
 
