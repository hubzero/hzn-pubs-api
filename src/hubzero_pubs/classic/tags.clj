(ns hubzero-pubs.classic.tags
  (:require [clj-time.core :as t]
            [clj-time.format :as f] 
            [clj-time.coerce :as c]
            [cheshire.core :as json]
            [yesql.core :refer [defqueries]]
            [clojure.java.jdbc :as jdbc]
            [hubzero-pubs.config :refer [config]]
            [mount.core :as mount :refer [defstate]]
            )
  )

(defstate db :start (:mysql config))
(defqueries "yesql/hzcms-queries.sql" )
(defn _connection [] {:connection db})

(defn get-tag [s]
  (first (sel-tag {:tag s} (_connection)))
  )

(defn- _add-tag [s user-id]
  (insert-tag<! {:admin 0
                 :raw_tag s 
                 :description ""
                 :created (f/unparse (:mysql f/formatters) (t/now))
                 :created_by user-id 
                 :tag (clojure.string/replace s #"[^\w]+" "")
                 :modified (f/unparse (:mysql f/formatters) (t/now))
                 :modified_by user-id 
                 } (_connection))
  )

(defn- _get-tag-by-id [id]
  (first (sel-tag-by-id {:id id} (_connection)))
  )

(defn ls [ver-id]
  (->>
    (sel-tag-objs {:object_id ver-id
                   :tbl "publications"
                   } (_connection))
    (map (fn [to] (_get-tag-by-id (:tagid to))))
    )
  )

(defn tag-obj-exists? [tag ver-id]
  (> (count (sel-tag-obj {:tag_id (:id tag)
                          :object_id ver-id
                          :tbl "publications"
                          } (_connection))) 0)
  )

(defn- _add-tag-obj [tag ver-id user-id]
  (if (not (tag-obj-exists? tag ver-id)) 
    (insert-tag-obj<! {:tbl "publications"
                       :object_id ver-id
                       :tag_id (:id tag)
                       :strength 1
                       :tagger_id user-id
                       :tagged_on (f/unparse (:mysql f/formatters) (t/now))
                       } (_connection))
    )
  )

(defn- _update-tag [tag user-id]
  (update-tag! (-> tag
                   (update :objects inc)
                   (assoc :modified (f/unparse (:mysql f/formatters) (t/now)))
                   (assoc :modified_by user-id)
                   ) (_connection))
  )

(defn- _log-tag [tag action user-id]
  (insert-tag-log<! {:tag_id (:id tag)
                     :action action
                     :json (json/generate-string tag)
                     :time (f/unparse (:mysql f/formatters) (t/now))
                     :user_id user-id 
                     :actor_id user-id 
                     } (_connection))
  )

(defn- _tag [tag ver-id user-id]
  (_add-tag-obj tag ver-id user-id)
  (_update-tag tag user-id)
  (_log-tag tag "tag_edited" user-id)
  )

(defn- _create-tag [s user-id]
  (as-> (_add-tag s user-id) $
    (:generated_key $)
    (sel-tag-by-id {:id $} (_connection))
    (first $)
    (_log-tag $ "tag_created" user-id)
    )
  )

(defn add-tag [s ver-id user-id]
  (if-let [tag (get-tag s)]
    (_tag tag ver-id user-id)
    (_create-tag s user-id)
    )
  )

(defn rm-tag [ver-id tag-id]
  (prn "BLAH BLAH" ver-id tag-id)
  (del-tag-obj! {:tag_id tag-id
                 :object_id ver-id
                 } (_connection))
  )


