(ns hubzero-pubs.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.history.Html5History)
  (:require [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]            
            [hubzero-pubs.data :as data]
            )
  )

(defn hook-browser-navigation! []
  (doto (Html5History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (prn (.-token event))
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn- _load-pub [s params]
  (swap! s assoc
           :prj-id (:prj-id params)
           :pub-id (:pub-id params))
    (data/get-prj s) 
  )

(defn summary [s]
  (prn "ROUTES SUMMARY")
  (secretary/dispatch! (str "/prjs/"
                            (:prj-id @s)
                            "/pubs/"
                            (:pub-id @s)
                            "/summary"))
  )

(defn app-routes [s]
  (secretary/set-config! :prefix "#")

  (defroute "/prjs/:id/pubs/new" {:as params}
    (prn "PRJ" (:id params) "NEW")
    (swap! s assoc :prj-id (:id params))
    (data/get-prj s)
    )

  (defroute "/prjs/:prj-id/pubs/:pub-id" {:as params}
    (prn "ROUTE IDS" (:prj-id params) (:pub-id params))
    (_load-pub s params)
    )

  (defroute "/prjs/:prj-id/pubs/:pub-id/summary" {:as params}
    (prn "SUMMARY IDS" (:prj-id params) (:pub-id params))
    (swap! s assoc-in [:ui :summary] true)
    (_load-pub s params)  
    )

  (hook-browser-navigation!)) 

