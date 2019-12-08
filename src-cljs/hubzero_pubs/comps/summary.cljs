(ns hubzero-pubs.comps.summary
  (:require 
    [hubzero-pubs.comps.ui :as ui] 
    )  
  )

(defn field [s key bold?]
  (if bold?
    [:h2 (get-in @s key)]
    [:p (get-in @s key)]
    ) 
  )

(defn file [s f]
  [:li {:class :item :key f}
   [:div {:class :icon} (ui/icon s "#icon-file-text2") ]
   [:div {:class :main} f]
   ] 
  )

(defn author [s a]
  [:li {:class :item :key (:id a )}
   [:div {:class :icon} (ui/icon s "#icon-user")]
   [:div {:class :main} 
    [:div {:class :subject} [:a {:href "#"} (:name a)]]
    [:div {:class :subject} [:a {:href "#"} (:organization a)]]
    ]
   ]
  )

(defn collection [s key type]
  [:div {:class [:collection :collection-summary]}
   (merge
     [:ul]
     (doall
       (map (fn [i] ((type {:files #(file s i)
                            :authors-list #(author s i)
                            }))) (vals (get-in @s key)))
       )
     )
   ]
  )

(defn acknowledge [s]
  [:div {:class [:details :last-child]}
   [:div {:class :inner}
    [:header "License acknowledgement"]
    [:p {:class :font-small}
     (str "You have read the license terms and agreed to license you work under...")
     ]
    ]
   ]
  )

(defn license [s l]
  [:div {:class [:collection :single-item :collection-summary]}
   [:div {:class :item}
    [:div {:class :main}
     [:header {:class :subject} (:title l)]
     [:div {:class :meta} (:info l)]
     ]
    ]
   (acknowledge s)
   ]
  )

(defn main [s]
  [:main
   [:section {:class [:fieldset :no-header]}
    (doall (map
             (fn [[key label type bold?]]
               [:div {:class [:field :field-summary] :key label}
                [:p {:class :label} (str label ":")] 
                ((type {:text #(field s key bold?)               
                        :files #(collection s key type)
                        :authors-list #(collection s key type)
                        :license #(license s (get-in @s key))
                        }))
                ]
               )
             [[[:data :title] "Title" :text true]
              [[:data :synopsis] "Synopsis" :text false]
              [[:data :content] "Content" :files false]
              [[:data :authors-list] "Authors" :authors-list false]
              [[:data :licenses] "License" :license false]
              ]))
    ]
   ]
  )

(defn page-summary [s]
  [:div {:class (concat [:page :page-summary :--add :--show]
                        (if (get-in @s [:ui :summary])
                          [:add :show]
                          )
                        ) }
   (main s)
   ]
  )

