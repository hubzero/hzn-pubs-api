(ns hubzero-pubs.core
  (:require [reagent.core :as r]
            [hubzero-pubs.comps.app :as app]
            )
  )

(defonce s (r/atom {:data
                    {:content {} 
                     :authors []
                     :licenses []
                     :citations [] 
                     :usage {:size 1.25
                             :units "GB"
                             :percent "25"
                             :max 5
                             }
                     }
                    :terms "I and all publication authors have read and agree to PURR terms of deposit."
                    }
                   ))

(defn on-js-reload [])

(defn get-prj-id []
  (-> (.-cookie js/document)
      (clojure.string/split #";")
      (first)
      (clojure.string/split #"=")
      (last)
      )
  )

(defn ^:export run [prj-id]
  ;(token-request)
  ;(prn "PROJECT" prj-id)
  (swap! s assoc :prj-id prj-id)
  (r/render [#(app/app s)] (js/document.getElementById "app")))

(run (get-prj-id))

