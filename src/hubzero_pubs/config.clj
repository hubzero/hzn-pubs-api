(ns hubzero-pubs.config)

(defonce config (clojure.edn/read-string (slurp "config.edn")))
