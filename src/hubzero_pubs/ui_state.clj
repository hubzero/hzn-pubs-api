(ns hubzero-pubs.ui-state
  (:require [clj-time.core :as t]
            [clj-time.coerce :as c]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.conversion :refer [from-db-object]]
            [monger.operators :refer :all]
            [mount.core :as mount :refer [defstate]]
            [hubzero-pubs.config :refer [config]]
            )
  (:import org.bson.types.ObjectId)
  )

(defstate db-name :start "hubzero")
(defstate col-name :start "ui-state")
(defstate db-host :start (:mongodb config)) 
(defstate db :start (->
                      (mg/connect db-host)
                      (mg/get-db db-name)
                      )
  )

(defn- _keys-to-strs
  "Mongo doesn't like Long type keys, make them Strings"
  [s k]
  (->> (into {} (map (fn [[k v]] [(str k) v]) (get-in s k)))
       (assoc-in s k) 
       )
  )

(defn create [s]
  (prn "SAVING UI STATE" s)
  (as-> s $
    (_keys-to-strs $ [:users])
    (_keys-to-strs $ [:data :content])
    (_keys-to-strs $ [:data :images])
    (_keys-to-strs $ [:data :support-docs])
    (_keys-to-strs $ [:data :authors-list])
    (_keys-to-strs $ [:data :tags])
    (_keys-to-strs $ [:data :citations])
    (_keys-to-strs $ [:ui :options :content])
    (_keys-to-strs $ [:ui :options :authors-list])
    (assoc $
           :_id (ObjectId.)
           :app "pubs"
           :time (c/to-long (t/now))  
           )
    (mc/insert-and-return db col-name $)
    (:_id $)
    {:_id (.toString $)}
    )
  )

(comment

  (def s {:ver-id 153})

  (def s {:ver-id 153,
          :prj-id 1,
          :terms "I and all publication authors have read and agree to PURR terms of deposit.",
          :months ["January" "February" "March" "April" "May" "June" "July" "August" "September" "October" "November" "December"],
          :user-id 1001,
          :usage {:size "0.00", :units "GB", :percent "0.00", :max "1.00"},
          :ui {:summary false,
               :options nil,
               :panels nil,
               :authors-list {"1001__J B G_" true}},
          :users {1001 {:role 1,
                        :projectid 1,
                        :userid 1001,
                        :created_by_user 1001,
                        :added #inst "2019-09-01T08:48:18.000-00:00",
                        :name "J B G",
                        :invited_email "",
                        :username "jbg",
                        :groupname nil,
                        :params "join_activityid=69",
                        :fullname "J B G",
                        :invited_name nil,
                        :invited_code nil,
                        :organization "",
                        :lastvisit #inst "2020-02-27T12:20:01.000-00:00",
                        :num_visits 1,
                        :native 1,
                        :groupid 0,
                        :status 1,
                        :id 1,
                        :picture "",
                        :groupdesc nil,
                        :prev_visit nil}},
          :data {:tags (),
                 :pub-id 164,
                 :ver-id 153,
                 :prj-id 1,
                 :authors-list {"1001__J B G_" {:id 1001,
                                                :name "J B G",
                                                :organization ""}},
                 :content {},
                 :images {},
                 :support-docs {},
                 :comments nil,
                 :abstract "a sdfa sdfasd",
                 :licenses nil,
                 :user-id 1001,
                 :state 3,
                 :doi "",
                 :title "asdf asdf asdf",
                 :citations (),
                 :publication-date "02/02/2020",
                 :ack false,
                 :url nil,
                 :release-notes nil}})

  (prn (:mongodb config))

  (create s)

  (_keys-to-strs {:users {1000 :a}} :users)

  )

