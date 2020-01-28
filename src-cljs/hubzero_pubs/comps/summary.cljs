(ns hubzero-pubs.comps.summary
  (:require 
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.data :as data] 
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

(defn image [s i]
  [:li {:class :item :key i}
   [:div {:class :icon} (ui/icon s "#icon-file-picture")]
   [:div {:class :main} i]
   ]
  )

(defn citation [s c]
  [:li {:class :item :key c}
   [:div {:class :icon} (ui/icon s "#icon-file-text2") ]
   [:div {:class :main} (utils/format-citation c)]
   ] 
  )

(defn collection [s key type]
  [:div {:class [:collection :collection-summary]}
   (merge
     [:ul]
     (doall
       (map (fn [i] ((type {:files #(file s i)
                            :authors-list #(author s i)
                            :images #(image s i)
                            :citations #(citation s i)
                            }))) (as-> (get-in @s key) $ (if (map? $) (vals $) $)))
       )
     )
   ]
  )

(defn acknowledge [s]
  [:div {:class [:details :last-child]}
   [:div {:class :inner}
    [:header "License acknowledgement"]
    [:p {:class :font-small}
     (str "You have read the license terms and agreed to license you work under " (get-in @s [:data :licenses :name]) ".")
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

(defn tag [s t]
  [:div {:class :tag :key t} [:div {:class :inner} t]]
  )

(defn tags [s key type]
  [:div {:class [:item :ui :tags]}
   (doall (map #(tag s %) (get-in @s [:data :tags]))) ] 
  )

(defn _type [s key type bold?]
  ((type {:text #(field s key bold?)               
          :files #(collection s key type)
          :authors-list #(collection s key type)
          :license #(license s (get-in @s key))
          :images #(collection s key type)
          :tags #(tags s key type)
          :citations #(collection s key type)
          }))
  )

(defn- _section [s fields]
  [:section {:class [:fieldset :no-header]}
   (doall (map
            (fn [[key label type bold?]]
              [:div {:class [:field :field-summary] :key label}
               [:p {:class :label} (str label ":")] 
               (_type s key type bold?)             
               ]
              )
            fields))
   ]
  )

(defn essentials [s]
  (_section s [[[:data :doi] "DOI" :text true]
               [[:data :title] "Title" :text true]
               [[:data :abstract] "Abstract" :text false]
               [[:data :content] "Content" :files false]
               [[:data :authors-list] "Authors" :authors-list false]
               [[:data :licenses] "License" :license false]
               [[:terms] "Agreements" :text false]
               ]) 
  )

(defn additional [s]
  (_section s [[[:data :images] "Image Gallery" :images false]
               [[:data :url] "External website URL" :text false]
               [[:data :support-docs] "Supporting documents" :files false]
               [[:data :tags] "Tags" :tags false]
               [[:data :citations] "Citations" :citations false]
               [[:data :release-notes] "Version release notes" :text false]
               ])
  )

(defn publish-settings [s]
  (_section s [[[:data :publication-date] "Publication date" :text false]
               [[:data :comments] "Comments to the administrator" :text false]
               ])
  )

(defn main [s]
  [:main
   (essentials s)   
   (additional s)
   (publish-settings s)
   ]
  )

(defn- _submit [s e]
  (swap! s assoc-in [:data :state] 1)
  (data/save-pub s)
  )

(defn aside [s]
  (prn "ASIDE" (:pub-id @s))
  [:aside
   [:div.inner
    [:div.notification
     [:header "Your publication is ready for submission!"]
     [:p "Please review your publication and make sure everything looks good."]
     [:fieldset.buttons-aside
      [:a.btn {:href "/pubs/#/submit"
               :on-click #(_submit s %)
               } "Submit publication"]
      [:a.btn.secondary {:href (str "/pubs/#/pubs/" (:ver-id @s) "/edit")} "Edit draft"]
      ]
     ]
    ]
   ]
  )

(defn page-summary [s]
  [:div.page.page-summary.--add.--show {:class (if (get-in @s [:ui :summary])
                                                 [:add :show]
                                                 )}
   (main s)
   (if (not (= 1 (get-in @s [:data :state]))) (aside s))
   ]
  )

