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

(defn- _manual [s key]
  [:fieldset {:class :citations-manual}
   [:div {:class :selected-item}
    
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
    ]
   ]
  )

