(ns hubzero-pubs.core
  (:require [clojure.tools.cli :refer [parse-opts]]
            [mount.core :as mount :refer [defstate]]
            [clojure.tools.logging :as log]
            [hubzero-pubs.http-server :as http]
            [hubzero-pubs.handler :as handler]  
            )
  (:gen-class))

(def cli-options
  [["-p" "--port PORT"    "Port number" :parse-fn #(Integer/parseInt %)]
   ["-b" "--bind address" "Bind address"]])

(defstate ^{:on-reload :noop} http-server
  :start
  (http/start {:handler #'handler/app :port 8888 })
  :stop
  (http/stop http-server))

(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app [args]
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!")
  (start-app args)
  )
