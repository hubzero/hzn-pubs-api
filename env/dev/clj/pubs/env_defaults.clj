(ns pubs.env-defaults
  (:require [clojure.tools.logging :as log]))

(defn log-init! []
  (log/info "\n[pubs started using the dev profile]"))

(defn log-stop! []
  (log/info "\n.[pubs has shut down successfully]"))

(def defaults
  {:init       log-init!
   :stop       log-stop!
   :middleware identity})
