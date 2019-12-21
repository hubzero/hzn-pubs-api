(ns hubzero-pubs.core
  (:require [reagent.core :as r]
            [hubzero-pubs.utils :as utils]
            [hubzero-pubs.comps.app :as app]
            )
  )

(defonce s (r/atom {:usage {:size 1.25
                            :units "GB"
                            :percent "25"
                            :max 5
                            } 
                    :terms "I and all publication authors have read and agree to PURR terms of deposit." 
                    }
                   ))

(defn on-js-reload [])

(defn ^:export run [cookie-map]
  ;(token-request)
  ;(prn "COOKIES" cookie-map)
  (swap! s assoc :prj-id (:project-id cookie-map))
  (swap! s assoc :pub-id (:publication-id cookie-map))
  (r/render [#(app/app s)] (js/document.getElementById "app")))

(run (utils/eat-cookies))

