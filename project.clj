(defproject pubs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/tools.logging "0.4.1"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [org.clojure/tools.cli "0.3.7"]
                 [org.clojure/java.jdbc "0.7.9"]
                 [cprop "0.1.15"]
                 [mount "0.1.12"]
                 [org.immutant/immutant "2.1.10"]
                 [cheshire "5.9.0"]
                 [compojure "1.6.1"]
                 [com.cognitect/transit-clj "0.8.309"]
                 [markdown-clj "1.0.2"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-defaults "0.3.2"]
                 [metosin/muuntaja "0.5.0"]
                 [metosin/ring-http-response "0.9.0"]
                 [clj-http "3.9.0"]
                 [mysql/mysql-connector-java "8.0.17"]
                 [yesql "0.5.3"]
                 [clj-time "0.15.2"]
                 [digest "1.4.9"]
                 [me.raynes/fs "1.4.6"]
                 [com.novemberain/monger "3.1.0"]
                 [org.jsoup/jsoup "1.13.1"]
                 [ring-logger "1.0.1"]]

:profiles {:uberjar {:aot :all :omit-source true}}

:main ^:skip-aot pubs.core
:target-path "target/%s"
)

