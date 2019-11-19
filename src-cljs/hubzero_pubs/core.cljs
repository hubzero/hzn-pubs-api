(ns hubzero-pubs.core
  (:require [reagent.core :as r]
            [hubzero-pubs.comps.app :as app]
            )
  )

(defonce s (r/atom {:data
                    {:content {} 
                     :authors [{:name "J" :org "UCSD"}
                               {:name "B" :org "UCSD"}
                               {:name "G" :org "UCSD"}
                               ]
                     :tags ["foo" "bar" "baz"]
                     :licenses [{:name "Attribution-NoDerivs 3.0 Unported"
                                 :detail "You are free: to Share — to copy, distribute and transmit the work, to Remix — to adapt the work, to make commercial use of the work"
                                 }]
                     :citations ["Paskin, N. (1999). Toward unique identifiers. Proceedings of the IEEE, 87(7), 1208–1227. doi:10.1109/5.771073"
                                 "Paskin, N. (2001). Toward unique identifiers. Proceedings of the IEEE, 87(7), 1208–1227. doi:10.1109/5.771073"
                                 ]
                     :usage {:size 1.25
                             :units "GB"
                             :percent "25"
                             :max 5
                             }
                     }
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
;;  (token-request)
  (prn "PROJECT" prj-id)
  (swap! s assoc :prj-id prj-id)
  (r/render [#(app/app s)] (js/document.getElementById "app")))

(run (get-prj-id))

