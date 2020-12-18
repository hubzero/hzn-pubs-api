(ns pubs.core
  (:require [clojure.tools.cli :refer [parse-opts]]
            [mount.core :as mount :refer [defstate]]
            [clojure.tools.logging :as log]
            [cheshire.generate :as gen]
            [hzn-app-core.config :refer [config]]
            [hzn-app-core.nrepl]
            [hzn-app-core.core]
            [hzn-app-core.http-server :as http]
            [pubs.handler :as handler])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT"       "Port number" :parse-fn #(Integer/parseInt %)]
   ["-c" "--config EDNFILE"  "EDN Config Overrides"]
   ["-b" "--bind address"    "Bind address"]])

(gen/add-encoder java.time.LocalDateTime
                 (fn [ldt jsonGenerator]
                   (.writeString jsonGenerator
                                 (->
                                   ldt
                                   (.toInstant java.time.ZoneOffset/UTC)
                                   ;    java.util.Date/from
                                   .toString
                                   ))))

(defstate ^{:on-reload :noop} http-server
          :start (http/start (http/update-http-config handler/_app config))
          :stop (http/stop http-server))

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
