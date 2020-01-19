(ns hubzero-pubs.comps.app
  (:require
    [hubzero-pubs.utils :as utils]
    [hubzero-pubs.data :as data]
    [hubzero-pubs.routes :as routes]
    [hubzero-pubs.comps.panels :as panels]
    [hubzero-pubs.comps.files :as files]
    [hubzero-pubs.comps.tags :as tags]
    [hubzero-pubs.comps.authors :as authors]
    [hubzero-pubs.comps.options :as options] 
    [hubzero-pubs.comps.licenses :as licenses] 
    [hubzero-pubs.comps.citations :as citations] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.summary :as summary] 
    )
  )

(defn- _handle-value [e s name]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:data (keyword name)] (-> e .-target .-value))
  )

(defn textfield [s id title name]
  [:div.field {:id id}
   [:label {:for :title} title]
   [:input {:type :text
            :name name
            :value (get-in @s [:data (keyword name)])
            :on-change #(_handle-value % s name)
            }]
   ]
  )

(defn textarea [s id title name]
  [:div.field {:id id}
   [:label {:for :title} title]
   [:textarea {:name name
               :value (get-in @s [:data (keyword name)])
               :on-change #(_handle-value % s name)
               }]
   ]
  )

(defn file [s key name]
  [:li.item {:key name}
   (ui/icon s "#icon-file-text2")
   [:div.main [:a {:href "#"} name]]
   [:div.options {:on-click #(swap! s assoc-in [:ui :options key name] true)}
    (ui/icon s "#icon-dots")
    (options/items s key name)
    ]
   ] 
  )

(defn handle-poc-click [s e id]
  (.preventDefault e)
  (.stopPropagation e)
  (if (some #{id} (get-in @s [:data :poc]))
    (swap! s assoc-in [:data :poc] (remove #{id} (get-in @s [:data :poc])))
    (swap! s update-in [:data :poc] conj id)
    )
  )

(defn author [s author]
  [:li.item {:key (:id author)}
   (ui/icon s "#icon-user")
   [:div.main
    [:div.subject [:a {:href "#"} (:name author)] ]
    [:div.meta [:a {:href "#"} (:org author)] ]
    [:div.ui.checkbox.inline.meta
     [:input (merge {:type :checkbox :name :poc :on-change #(handle-poc-click s % (:id author))} {:checked (boolean (some #{(:id author)} (get-in @s [:data :poc]))) })]
     [:label (:for :poc) "Point of contact"]
     ]
    ]
   ] 
  )

(defn image [s name]
  [:li.item {:key name}
   (ui/icon s "#icon-file-picture")
   [:div.main [:a {:href "#"} name]]
   (ui/icon s "#icon-dots")
   ]
  )

(defn citation [s key c]
  [:li.item {:key (:id c)}
   [:div.icon (ui/icon s "#icon-file-text2")]
   [:div.main
    [:div.subject
     [:a {:href "#"} (utils/format-citation c)]
     ]
    ]
   ]
  )

(defn item [s name key]
  (key {
        :content (file s key name)
        :support-docs (file s key name)
        :authors-list (author s name)
        :images (image s name)
        :citations (citation s key name)
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
  (concat classes (key {:authors-list [:options
                                       :author-selector
                                       (if (get-in @s [:ui :options :authors]) :open)
                                       ]
                        :citations [:options
                                    :citations-selector
                                    (if (get-in @s [:ui :options :citations]) :open)
                                    ]
                        }))
  )

(defn selector-button [s key options-comp f]
  [:div {:class (selector-classes s key [:selector]) }
   [:a.selector-button {:href "#" :on-click #(f s % key)}
    (ui/icon s "#icon-plus")
    ] options-comp]
  )

(defn collection [s id title key options-comp f]
  [:div.field {:id id}
   [:label {:for :title} title]
   [:div.collection
    (items s key)
    (selector-button s key options-comp f)
    ]
   ]
  )

(defn acknowledge [s]
  [:div.details.last-child
   [:div.inner
    [:header "License acknowledgement"]
    [:div.ui.checkbox.inline
     [:input.important {:type :checkbox
                        :name :ack
                        :checked (or (get-in @s [:data :ack]) false) 
                        :on-change #(swap! s update-in [:data :ack] not)
                        } ]
     [:label {:for :poc}
      "I have read the "
      [:a {:href "#"} "license terms"]
      " and agree to license my work under the attribution 3.0 unported license."
      ]
     ]
    ]
   ] 
  )

(defn license-item [s name detail]
  [:div.item {:key name}
   [:div.main
    [:header.subject name]   
    [:div.details.meta detail]  
    ]
   ]
  )

(defn handle-licenses-options [s e key]
  (data/get-licenses s)
  (panels/show s e true key)
  )

(defn licenses [s]
  [:div.field
   [:label {:for :title} "License:"]
   (merge
     [:div.collection.single-item
      [:div.item
       [:div.main
        [:header.subject
         (get-in @s [:data :licenses :title])
         ]
        [:div.meta
         (get-in @s [:data :licenses :info])
         ]
        ] 
       ]
      (acknowledge s)
      (selector-button s :licenses nil handle-licenses-options)
      ]   
     )
   ]
  )

(defn agreements [s]
  [:div.field
   [:label {:for :agreement} "Agreements"]
   [:div.field-wrapper
    [:div.item.ui.checkbox.inline
     [:input {:type :checkbox
              :name :terms
              :checked (or (get-in @s [:data :terms]) false) 
              :on-change #(swap! s update-in [:data :terms] not)
              }]
     [:label {:for :terms} (:terms @s)]
     ]
    ]
   ]
  )

(defn handle-files-options [s e key]
  (data/get-files s)
  (panels/show s e true key)
  )

(defn handle-author-options [s e key]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:ui :options :authors] true) 
  )

(defn essentials [s]
  [:fieldset.section
   [:header
    [:legend "Essentials"]
    [:div.note "all field required"]
    ]
   (textfield s "a-title" "Title:" "title")
   (textarea s "a-abstract" "Abstract:" "abstract")
   (collection s "a-content" "Content:" :content nil handle-files-options)
   (collection s "a-authors" "Authors:" :authors-list (options/authors s) handle-author-options)
   (tags/tags s)
   (licenses s)
   (agreements s)
   ]
  )

(defn handle-citation-options [s e key]
  (.preventDefault e)
  (.stopPropagation e)
  (swap! s assoc-in [:ui :options :citations] true) 
  )

(defn additional-details [s]
  [:fieldset.section
   [:header [:legend "Additional Details"]]
   (collection s "a-image-gallery" "Image gallery:" :images nil handle-files-options)
   (textfield s "a-url" "External website URL:" "url")
   (collection s "a-docs" "Supporting docs:" :support-docs nil handle-files-options)
   (collection s "a-citations" "Citations:" :citations (options/citations s) handle-citation-options)
   (textarea s "a-verion-notes" "Version release notes:" "release-notes")
   ]
  )

(defn pub-date [s]
  [^{:component-did-mount
     (fn []
       (js/Lightpick. (clj->js {:field (.querySelector js/document "input[name=publication-date]")
                                :onSelect (fn [date]
                                            (swap! s assoc-in [:data :publication-date] (.format date "MM/DD/YYYY"))
                                            )
                                }))

       (set! (.-value (.querySelector js/document "input[name=publication-date]")) (get-in @s [:data :publication-date]))
       )
     }
   (fn []
     [:div#a-pub-date.field.anchor
      [:label {:for :title} "Publication date:"]
      [:input {:type :text
               :name "publication-date" 
               }]
      ]
     )
   ]
  )

(defn publish-settings [s]
  [:fieldset.section
   [:header#a-pub-settings.anchor.a-header [:legend "Publish Settings"]]
   (pub-date s)
   (textarea s "a-comments" "Comments to the administrator:" "comments")
   ]
  )

(defn aside-buttons [s]
  [:aside
   [:div.inner
    [:fieldset.buttons-aside
     [:a.btn {:href "/pubs/#/summary"} "Proceed with the draft"]
     ]
    ]
   ]
  )

(defn section-buttons [s]
  [:fieldset.section.buttons
   [:div.field.buttons
    [:a.btn {:href "/pubs/#/summary"} "Proceed with the draft"]
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

(defn- _handle-nav [id e]
  (.preventDefault e)
  (.stopPropagation e) 
  (-> (.getElementById js/document id)
      (.scrollIntoView (clj->js {:behavior :smooth}))
      )
  )

(defn- _menu-item [id label & [header?]]
  [:li.item {:key id :class (if header? :header)}
   [:a {:href id :on-click #(_handle-nav id %)} label]]
  )

(defn nav-section [s]
  (merge 
    [:ul]
    (doall (map (fn [{id :id label :label header :header}]
                  (_menu-item id label header)
                  ) [{:id "a-essentials" :label "Essentials" :header true}
                     {:id "a-title" :label "Title"}
                     {:id "a-abstract" :label "Abstract"}
                     {:id "a-content" :label "Content"}
                     {:id "a-authors" :label "Authors"}
                     {:id "a-license" :label "License"}

                     {:id "a-details" :label "Additional Details" :header true}
                     {:id "a-image-gallery" :label "Image gallery"}
                     {:id "a-url" :label "External website URL"}
                     {:id "a-docs" :label "Supporting documents"}
                     {:id "a-tags" :label "Tags"}
                     {:id "a-citations" :label "Citations"}
                     {:id "a-version-notes" :label "Version release notes"}

                     {:id "a-pub-settings" :label "Publishing Settings" :header true}
                     {:id "a-pub-date" :label "Publication date"}
                     {:id "a-comments" :label "Comments to the administrator"}


                     ]))
    )
  )

(defn navigation [s]
  [:aside
   [:nav
    (nav-section s)
    ]
   ]
  )

(defn page-main [s]
  [:div {:class (concat [:page :page-main :--remove]
                        (if (get-in @s [:ui :summary])
                          [:hide :remove]
                          )
                        ) }
   (navigation s) 
   (main-form s)
   (aside-buttons s)
   ]
  )

(defn wrap [s]
  [:div.wrap {:on-click (fn [e] (options/close s)) }
   (if (get-in @s [:ui :summary])
     (summary/page-summary s) 
     (page-main s)
     ) 
   ])

(defn app [s]
  (merge
    [:div]
    (wrap s)
    (panels/overlay s)
    (files/files s :content)
    (files/files s :images)
    (files/files s :support-docs)
    (authors/authors-list s :authors-list)
    (authors/authors-new s :authors-new)
    (licenses/license-list s :licenses)
    (citations/doi s :citations-doi)
    (citations/manual s :citations-manual)
    )
  )

