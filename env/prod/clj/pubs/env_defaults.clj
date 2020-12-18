(ns pubs.env-defaults
  (:require [clojure.tools.logging :as log]))

(defn log-init! []
  (log/info "\n[icl-pd-api started using the prod profile]"))

(defn log-stop! []
  (log/info "\n[icl-pd-api has shut down successfully]"))

(def defaults
  {:init log-init!
   :stop log-stop!
   :middleware identity})
