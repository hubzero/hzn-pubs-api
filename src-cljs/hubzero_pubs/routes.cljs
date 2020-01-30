(ns hubzero-pubs.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType])
  (:require [secretary.core :as secretary]
            [goog.events :as events]
            [reagent.core :as reagent]            
            [hubzero-pubs.data :as data]
            )
  )

;; TODO: Remove, I'm a placeholder! - JBG
(defn set-html! [content]
  (-> (js/document.getElementById "app") 
      (aset "innerHTML" content) 
    )
  )
;; END TODO

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
    (.setEnabled true))
  )

(defn app-routes [s]
  (secretary/set-config! :prefix "#")

  (defroute "/prjs/:id" {:as params}
    (prn "PRJ" (:id params) "NEW")
    (swap! s assoc-in [:ui :summary] false)
    (swap! s assoc :prj-id (:id params))
    (data/get-prj s)
    )

  (defroute "/pubs/:id" {:as params}
    (prn "PUB" (:id params))
    (swap! s assoc-in [:ui :summary] true)
    (swap! s assoc :ver-id (:id params))
    (data/get-pub s)
    )

  (defroute "/pubs/:id/edit" {:as params}
    (swap! s assoc-in [:ui :summary] false)
    (swap! s assoc :ver-id (:id params))
    (data/get-pub s)
    )

  (defroute "/summary" {:as params}
    (swap! s assoc-in [:ui :summary] true)
    (data/save-pub s)
    )

  (defroute "/submit" {:as params}
    ;;(set-html! "<h1>Submitted. :)</h1>")
    ;(swap! s assoc-in [:data :submitted] true)
    (swap! s assoc-in [:ui :summary] true)
    (data/save-pub s)
    )

  ;; Catch all
  (defroute "*" []
    (set-html! "<h1>LOL! YOU LOST!</h1>"))

  (hook-browser-navigation!))

