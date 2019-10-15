(ns hubzero-pubs.core
  (:refer-clojure :exclude [atom])
  (:require [glue.core :as g :refer [atom]])
  )

(enable-console-print!)

(g/defcomponent
  :wrap
  {:template "#wrap" :state (fn [] {}) })

(g/defcomponent
  :page
  {:template "#page" :state (fn [] {}) })

(g/defcomponent
  :navigation
  {:template "#navigation" :state (fn [] {}) }) 

(g/defcomponent
  :navsec
  {:template "#navsec" :state (fn [] {}) }) 

(g/defcomponent
  :mainform
  {:template "#mainform" :state (fn [] {}) }) 

(g/defcomponent
  :textfield
  {:template "#textfield"
   :props [:title :name]
   :state (fn [] {}) }) 

(g/defcomponent
  :ta
  {:template "#ta"
   :props [:title :name]
   :state (fn [] {}) }) 

(g/defcomponent
  :icon-file-text2
  {:template "#icon-file-text2"
   :props []
   :state (fn [] {}) }) 

(g/defcomponent
  :options
  {:template "#options"
   :props []
   :state (fn [] {}) }) 

(g/defcomponent
  :item
  {:template "#item"
   :props [:name]
   :state (fn [] {}) }) 

(g/defcomponent
  :collection
  {:template "#collection"
   :props [:title]
   :data (fn [] { :items ["first-file.pdf" "second-file.pdf" "third-file.pdf"] }) 
   :state (fn [] {}) }) 

(g/defcomponent
  :icon
  {:template "#icon"
   :props [:icon]
   :state (fn [] {}) }) 

(g/defcomponent
  :essentials 
  {:template "#essentials" :state (fn [] {}) }) 

(g/defcomponent
  :additional-details 
  {:template "#additional-details" :state (fn [] {}) }) 



;(g/defcomponent
;  :todo-item
;  {:template "#todo-item"
;   :props [:label]
;   :state (fn [] {:counter (atom 0)})
;   :computed {:counter-label (fn [this state]
;                               (str @(:counter state) " clicks"))}
;   :methods {:click-me (fn [this state _]
;                         (println "Click happened on" (g/prop this :label))
;                         (swap! (:counter state) inc)
;                         (g/emit this :todo-click 1))}})


(defonce app (g/vue {:el "#app"}))

(defn on-js-reload []
  (g/reset-state!))

