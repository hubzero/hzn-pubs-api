(ns hubzero-pubs.core
  (:require [reagent.core :as r]

            [hubzero-pubs.comps.app :as app]
            )
  )

(defonce s (r/atom {:data
                    {:content {} 
                     :support-docs ["file1.pdf" "file2.pdf" "file3.pdf"]
                     :authors [{:name "J" :org "UCSD"}
                               {:name "B" :org "UCSD"}
                               {:name "G" :org "UCSD"}
                               ]
                     :images ["image1.jpg" "image2.jpg" "image3.jpg"]
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
                    :ui
                    {:current-folder ["Project files"]

                     } 
                    }
                   ))

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

(defn ^:export run [prj-id]
;;  (token-request)

  (r/render [#(app/app s)] (js/document.getElementById "app")))

(run 1)

