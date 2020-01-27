(ns hubzero-pubs.config
  (:require [cprop.source :as source]
            [cprop.core :refer [load-config]]
            [mount.core :as mount :refer [defstate]]))

(defstate config
  :start
  (load-config
   :resource "pubs.config.edn"
   :merge
   [;; see the :options key in `env`
    (mount/args)
    ;(source/from-system-props)
    (source/from-env)]))
