(ns pubs.core
  (:require [clojure.tools.cli :refer [parse-opts]]
            [mount.core :as mount :refer [defstate]]
            [clojure.tools.logging :as log]
            [cheshire.generate :as gen]
            [pubs.http-server :as http]
            [pubs.repl-server :as repl]
            [pubs.handler :as handler]
            [pubs.config :refer [config]]
            )
  (:gen-class))

(def cli-options
  [["-p" "--port PORT"       "Port number" :parse-fn #(Integer/parseInt %)]
   ["-c" "--config EDNFILE"  "EDN Config Overrides"]
   ["-b" "--bind address"    "Bind address"]])

(defstate ^{:on-reload :noop} http-server
  :start
  (http/start
   (-> config
       (assoc :handler #'handler/app)
       (update :io-threads #(or % (* 2 (.availableProcessors (Runtime/getRuntime)))))
       (update :host #(or (-> config :service-host-args :host) %))
       (update :port #(or (-> config :options :port) (-> config :service-host-args :port) % 8888))))
  :stop
  (http/stop http-server))

(defstate ^{:on-reload :noop} repl-server
  :start
  (if-let [np (get-in config [:nrepl :port])]
    (if-let [nb (get-in config [:nrepl :bind] "localhost")]
      (repl/start {:bind nb :port np})))
  :stop
  (when repl-server
    (repl/stop repl-server)))


(gen/add-encoder java.time.LocalDateTime
                 (fn [ldt jsonGenerator]
                   (.writeString jsonGenerator
                                 (->
                                   ldt
                                   (.toInstant java.time.ZoneOffset/UTC)
                                   ;    java.util.Date/from
                                   .toString
                                   ))))

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
  [& args]
  (println "Hubzero Publications Starting ...")
  (start-app args))
