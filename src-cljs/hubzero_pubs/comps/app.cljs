(ns hubzero-pubs.comps.app
  (:require
    [hubzero-pubs.utils :as utils]
    [hubzero-pubs.comps.panels :as panels]
    [hubzero-pubs.comps.files :as files]
    [hubzero-pubs.comps.options :as options] 
    [hubzero-pubs.comps.ui :as ui] 
    )
  )

(defn textfield [s title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:input {:type :text
            :name name
            :on-change #(swap! s assoc-in [:form name] (-> % .-target .-value))}]
   ]
  )

(defn textarea [s title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:textarea {:name name
               :on-change #(swap! s assoc-in [:form name] (-> % .-target .-value))  
               }]
   ]
  )

(defn file [s name]
  [:li {:class :item :key name}
   (ui/icon s "#icon-file-text2")
   [:div {:class "main"} [:a {:href "#"} name]]
   [:div {:class "options" :on-click #(-> %
                                          .-target
                                          (utils/find-ancestor ".options")
                                          (.querySelector ".options-list")
                                          .-classList
                                          (.add "open")
                                          )}
    (ui/icon s "#icon-dots")
    (options/items s)
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

(defn item [s name type key]
  (type {
         :files (file s name)
         :author (author s name)
         :image (image s name)
         })
  )

(defn items [s type key]
  (merge 
    [:ul]
    (map #(item s % type key) (as-> (get-in @s [:data key]) $
                                (if (map? $) (vals $) $)
                                ))
    )
  )

(defn collection [s title type key]
  [:div {:class :field}
   [:label {:for :title} title]
   [:div {:class :collection}
    (items s type key)
    [:a {:href "#"
         :class :selector
         :on-click (fn [e] (panels/show s e true type))}
     (ui/icon s "#icon-plus")
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

(defn tag-creator [s]
  [:a {:href "#" :class [:tag :creator]}
   [:div {:class :inner}
    [:div {:class [:add :icon]}
     (ui/icon s "#icon-plus")
     ]
    "Add new tag"
    ]
   ]
  )

(defn tag [s name]
  [:a {:href "#" :class :tag :key name}
   [:div {:class :inner} name
    [:div {:class [:remove :icon]}
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
      [:div {:class [:item :ui :tags]}]
      (map #(tag s %)  (get-in @s [:data :tags]))
      (tag-creator s)
      )
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
    (collection s "Content:" :files :content)
    (collection s "Authors:" :author :authors)
    (licenses s)
    (agreements s)
   ]
  )

(defn additional-details [s]
  [:fieldset {:class :section}
   [:header [:legend "Additional Details"]]
   (collection s "Image gallery:" :image :images)
   (textfield s "External website URL:" "url")
   (collection s "Supporting docs:" :files :support-docs)
   (tags s)
   (collection s "Citations:" :files :citations)
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
  [:div {:class :wrap :on-click (fn [e] (options/close s (.-target e))) }
   [:header
    [:h1 "New Publication"]
    (page s)
    ] ])

(defn app [s]
  (merge
    [:div]
    (wrap s)
    (panels/overlay s)
    (files/files s :content)
    )

  )
 
