(defproject pubs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ch.qos.logback/logback-classic "1.2.3"]
                 [org.clojure/java.jdbc "0.7.9"]
                 [ring/ring-jetty-adapter "1.8.0"]
                 [cheshire "5.10.0"]
                 [compojure "1.6.1"]
                 [com.cognitect/transit-clj "0.8.309"]
                 [markdown-clj "1.0.2"]
                 [ring/ring-core "1.8.0"]
                 [ring/ring-defaults "0.3.2"]
                 [metosin/muuntaja "0.6.7"]
                 [metosin/ring-http-response "0.9.1"]
                 [clj-http "3.10.3"]
                 [mysql/mysql-connector-java "8.0.17"]
                 [yesql "0.5.3"]
                 [clj-time "0.15.2"]
                 [digest "1.4.9"]
                 [me.raynes/fs "1.4.6"]
                 [org.jsoup/jsoup "1.13.1"]
                 [ring-logger "1.0.1"]

                 [com.fasterxml.jackson.core/jackson-core "2.11.2"]
                 [com.fasterxml.jackson.core/jackson-databind "2.11.2"]
                 [com.fasterxml.jackson.datatype/jackson-datatype-jsr310 "2.11.2"]

                 [hzn-common "0.1.0-SNAPSHOT"]
                 [hzn-app-core "0.1.0-SNAPSHOT"]
                 ]
  :exclusions [log4j
               org.slf4j/simple
               org.slf4j/slf4j-jcl
               org.slf4j/slf4j-nop
               org.slf4j/slf4j-log4j12
               org.slf4j/slf4j-log4j13]
  :plugins [[s3-wagon-private "1.3.4"]]
  :repositories {"snapshots" {:url        "s3p://hzn-mvn-libs/snapshots"
                              :username   :env/hzn_s3_id
                              :passphrase :env/hzn_s3_key
                              }
                 "releases"  {:url        "s3p://hzn-mvn-libs/releases"
                              :username   :env/hzn_s3_id
                              :passphrase :env/hzn_s3_key
                              :sign-releases false}}
  :profiles {:dev  [:project/dev]
             :test [:project/dev :project/test]
             :uberjar {:env {:production true}
                       :uberjar-name "pubs-api.jar"
                       :resource-paths ["env/prod/resources"]
                       :source-paths ["env/prod/clj"]
                       :aot :all
                       :omit-source true}
             :project/test {}
             :project/dev {:dependencies [[ring/ring-devel "1.8.0"]
                                          [ring/ring-mock "0.4.0"]
                                          [org.clojure/spec.alpha "0.2.187"]]
                           :source-paths ["env/dev/clj"]
                           :resource-paths ["env/dev/resources"]
                           :plugins [[com.jakemccrary/lein-test-refresh "0.24.1"]
                                     [jonase/eastwood "0.3.7"]]}}
  :min-lein-version "2.5.0"
  :main ^:skip-aot pubs.core
  :target-path "target/%s")
