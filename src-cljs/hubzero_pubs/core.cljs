(ns hubzero-pubs.core
  (:require [reagent.core :as r]
            [hubzero-pubs.utils :as utils]
            [hubzero-pubs.data :as data]
            [hubzero-pubs.comps.app :as app]
            )
  )

(defonce s (r/atom {:prj-id 1
                    :pub-id "5e00e21785b4b9178270e103"
                    :usage {:size 1.25
                            :units "GB"
                            :percent "25"
                            :max 5
                            } 
                    :terms "I and all publication authors have read and agree to PURR terms of deposit." 
                    }
                   ))

(defn on-js-reload [])

(defn ^:export run []
  
  (data/get-prj s)
  (r/render [#(app/app s)] (js/document.getElementById "app"))
  )

(-> js/document (.addEventListener "DOMContentLoaded" run))

