(ns hubzero-pubs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]] 
            [cljs-http.client :as http]
            )
  )

(defonce s (r/atom {:content ["file1.pdf" "file2.pdf" "file3.pdf"]
                    :authors [{:name "J" :org "UCSD"}
                              {:name "B" :org "UCSD"}
                              {:name "G" :org "UCSD"}
                              ]
                    :licenses [{:name "Attribution-NoDerivs 3.0 Unported"
                                :detail "You are free: to Share — to copy, distribute and transmit the work, to Remix — to adapt the work, to make commercial use of the work"
                                }]
                    }))

(defn on-js-reload [])

;;(defn hello-request []
;;  (go (let [res (<! (http/get "https://localhost/api/v1/helloworld/user"
;;                              {
;;                               :with-credentials? true 
;;                               :headers {"Authorization" (str "Bearer " (:token @s)) }
;;                               }))]
;;        (swap! s assoc :username (get-in res [:body :username]))
;;        ))
;;  )
;;
;;(defn token-request []
;;  (go (let [res (<! (http/post "https://localhost/developer/oauth/token" {:json-params {
;;                                                                                        :grant_type "session"
;;                                                                                        ;:client_id "3a223f193b9481749152e76cfa9b8599" 
;;                                                                                        }}))]
;;        (swap! s assoc :token (get-in res [:body :access_token]))
;;        (swap! s assoc :type (get-in res [:body :token_type]))
;;        (hello-request)
;;        )
;;      )
;;  )
;;

(defn textfield [title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:input {:type :text :name name}]
   ]
  )

(defn textarea [title name]
  [:div {:class :field}
   [:label {:for :title} title]
   [:textarea {:name name}]
   ]
  )

(defn icon [i]
  [:div {:class "icon"} [:svg [:use {:xlinkHref i}]]]
  )

(defn file [name]
  [:li {:class :item :key name}
   (icon "#icon-file-text2")
   [:div {:class "main"} [:a {:href "#"} name]]
   [icon "#icon-dots"]
   ] 
  )

(defn author [author]
  [:li {:class :item :key (:name author)}
   (icon "#icon-user")
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


(defn item [name type]
  (type {
         :file (file name)
         :author (author name)
         })
  )

(defn items [type key]
  (merge 
    [:ul]
    (map #(item % type) (key @s))
    )
  )

(defn collection [title type key]
  [:div {:class :field}
   [:label {:for :title} title]
   [:div {:class :collection}
    (items type key)
    ]
   ]
  )

(defn license-item [name detail]
  [:div {:class :item :key name}
   [:div {:class :main}
    [:header {:class :subject} name]   
    [:div {:class [:details :meta]} detail]  
    ]
   ]
  )

(defn acknowledge []
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

(defn licenses []
  [:div {:class :field}
   [:label {:for :title} "License:"]
   (merge
     [:div {:class [:collection :single-item]}
      (map (fn [l] (license-item (:name l) (:detail l))) (:licenses @s))
      (acknowledge)
      ]   
     )
   ]
  )

(defn agreements []
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

(defn essentials []
  [:fieldset {:class :section}
   [:header
    [:legend "Essentials"]
    [:div {:class "note"} "all field required"]
    ]
    (textfield "Title:" "title")
    (textarea "Synopsis:" "synopsis")
    (collection "Content:" :file :content)
    (collection "Authors:" :author :authors)
    (licenses)
    (agreements)
   ]
  )

(defn aside-buttons []
  [:aside
   [:fieldset {:class :buttons-aside}
    [:a {:href "#" :class :btn} "Proceed with the draft"]
    [:a {:href "#" :class [:btn :secondary]} "Submit draft"]
    ]
   ]
  )

(defn main-form []
  [:main
   [:form
    (essentials) 
    ]
   ]
  )

(defn nav-section []
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
 
(defn navigation []
  [:aside
   [:nav
    (nav-section)
    ]
   ]
  )

(defn page []
  [:div {:class :page}
   (navigation) 
   (main-form)
   (aside-buttons)
   ]
  )

(defn wrap []
  [:div {:class :wrap}
   [:header
    [:h1 "New Publication"]
    (page)
    ] ])

(defn ^:export run []
;;  (token-request)
  (r/render [wrap] (js/document.getElementById "app")))

(run)

