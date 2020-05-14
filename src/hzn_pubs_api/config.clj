(ns hzn-pubs-api.config
  (:require [cprop.source :as source]
            [cprop.core :refer [load-config]]
            [mount.core :as mount :refer [defstate]]))

;; Configuration comes from:
;;
;; 1. The bundled `pubs.config.edn` located in resources/
;; 2. Command line arguments.
;; 3. An EDN configuration file specified with the -c option.
;; 4. ENV vars
;;
;; They are over-ridden in that order.

(defstate config
  :start
  (load-config
    :resource "pubs.config.edn"
    :merge
    [;; see the :options key in `env`
     (mount/args)
     (try (source/from-file (get-in (mount/args) [:options :config] "")) (catch Exception e))
     ;(source/from-system-props)
     (source/from-env)]))
