(ns hubzero-pubs.comps.citations
  (:require
    [hubzero-pubs.utils :as utils] 
    [hubzero-pubs.data :as data] 
    [hubzero-pubs.comps.ui :as ui] 
    [hubzero-pubs.comps.panels :as panels] 
    )
  )

(defn search-doi [s key]
  [:div {:class :field}
   [:label {:for :doi} "DOI:"]
   [:input {:type :text :onChange (fn [e]
                                    (swap! s assoc :doi-query (-> e .-target .-value))
                                    (data/search-citations s)
                                    )}]
   ]
  )

(defn citation [s key c]
  [:p {:class :formatted-meta :key (:id c)} (utils/format-citation c)]
  )

(defn list-citations [s key]
  (merge
    [:div {:class :field}] 
    (doall (map #(citation s key %)
                (:doi-results @s)
                ))
    )
  )

(defn- _doi [s key]
  [:fieldset {:class :citations-doi}
   [:div {:class :selected-item}
    (search-doi s key)
    (list-citations s key)
    ]
   [:hr]
   [:div {:class [:field :buttons]}
    [:a {:class :btn :href "#"} "Add citation"]  
    [:a {:class [:btn :secondary] :href "#"} "Close"]
    ]
   ]
  )

(defn text [s key f]
  [:div {:class :field :key (:name f)}
   [:label {:for :title} (str (:label f) ":")]
   [:input {:type :text :onChange (fn [e]
                                    (.preventDefault e)
                                    (.stopPropagation e)
                                    (swap! s assoc-in [:data key (:name f)] (-> e .-target .-value))
                                    )}]
   
   ]
  )

(defn textfield [s key f]
  (merge
    [:div {:class :field :key (:name f)}]
    [:label {:for :citation} (str (:label f) ":")]
    [:textarea {:name :citation :onChange (fn [e]
                                            (.preventDefault e)
                                            (.stopPropagation e)
                                            (swap! s assoc-in [:data :key (:name f)] (-> e .-target .-value))
                                            )}]
    (if (:hint f) [:p {:class :hint} (:hint f)])
    ) 
  )

(defn field [s key f]
  (((:type f) {
               :text #(text s key f)
               :textfield #(textfield s key f)
               }))
  )

(defn- _manual [s key]
  [:fieldset {:class :citations-manual}
   [:div {:class :selected-item}
    (doall (map #(field s key %) [{:name :title :label "Title" :type :text}
                                  {:name :year :label "Year" :type :text}
                                  {:name :authors :label "Authors" :type :text}
                                  {:name :journal :label "Journal" :type :text}
                                  {:name :book :label "Book title" :type :text}
                                  {:name :volume :label "Volume" :type :text}
                                  {:name :issue :label "Issue/Number" :type :text}
                                  {:name :pages :label "Pages" :type :text}
                                  {:name :eprint :label "E-print" :type :text}
                                  {:name :isbn :label "ISBN/ISSN" :type :text}
                                  {:name :doi :label "DOI" :type :text}
                                  {:name :abstract :label "Abstract" :type :textfield}
                                  {:name :series :label "Series" :type :text}
                                  {:name :edition :label "Edition" :type :text}
                                  {:name :publisher :label "Publisher" :type :text}
                                  {:name :url :label "URL" :type :text}
                                  {:name :citation :label "Formatted citation" :type :textfield}
                                  ] )) 
    ]
   ]
  )

(defn doi [s key]
  [:div {:class [:page-panel :as-panel key (if (get-in @s [:ui :panels key]) :open)]}
   [:div {:class :inner}
    (panels/header s "Add a DOI citation")
    (_doi s key)
    ]
   ]
  )

(defn manual [s key]
  [:div {:class [:page-panel :as-panel key (if (get-in @s [:ui :panels key]) :open)]}
   [:div {:class :inner}
    (panels/header s "Add a citation manually")
    (_manual s key)
    ]
   ]
  )

