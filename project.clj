(defproject hubzero-pubs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/tools.logging "0.4.1"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [org.clojure/tools.cli "0.3.7"]
                 [org.clojure/java.jdbc "0.7.9"]
                 [cprop "0.1.14"]                        
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

                 [org.clojure/clojurescript "1.10.520"]
                 [cljs-http "0.1.46"]
                 [reagent "0.8.1"]
                 [clj-commons/secretary "1.2.4"]
                 ;[glue "0.1.3-SNAPSHOT"]
                 [me.raynes/fs "1.4.6"]
                 ]
  :plugins [[lein-figwheel "0.5.14"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  ;;:source-paths ["src-cljs"]

  :cljsbuild {:builds
              [{:id "local"
                :source-paths ["src-cljs"]
                :figwheel {:on-jsload "hubzero-pubs.core/on-js-reload"
                           :websocket-url "ws://0.0.0.0:3449/figwheel-ws"}
                :compiler {:main hubzero-pubs.core
                           :asset-path "/js/compiled/out"
                           :output-to "resources/public/js/compiled/hubzero_pubs.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}

               {:id "dev"
                :source-paths ["src-cljs"]

                ;; The presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client
                ;; into your build
                :figwheel {:on-jsload "hubzero-pubs.core/on-js-reload"
                           :websocket-url "ws://0.0.0.0:3449/figwheel-ws"
                           ;; :open-urls will pop open your application
                           ;; in the default browser once Figwheel has
                           ;; started and compiled your application.
                           ;; Comment this out once it no longer serves you.
                           ;:open-urls ["http://localhost:3449/index.html"]

                           }

                :compiler {:main hubzero-pubs.core
                           ;:asset-path "/js/compiled/out"
                           ;:output-to "resources/public/js/compiled/hubzero_pubs.js"
                           ;:output-dir "resources/public/js/compiled/out"

                           ; fix this make new profile for ilya's stuff
                           :asset-path "/app/components/com_pubs/site/assets/js/compiled"
                           :output-to "resources/public/js/compiled/hubzero_pubs.js"
                           :output-dir "resources/public/js/compiled"
                           :source-map-timestamp true
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;:install-deps true
                           ;:npm-deps {:vue "^2.6.11"
                           ;           :react "^16.12.0",
                           ;           :react-dom "^16.12.0"
                           ;           :vuera "^0.2.6" }
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}

               ;; lein cljsbuild once comp 
               {:id "comp"
                :source-paths ["src-cljs"]
                :figwheel {:on-jsload "hubzero-pubs.core/on-js-reload"
                           :websocket-url "ws://0.0.0.0:3449/figwheel-ws"
                           }

                :compiler {:main hubzero-pubs.core

                           :asset-path "/app/components/com_pubs/site/assets/js/compiled"
                           :output-to  "/home/jbg/Development/hub/app/components/com_pubs/site/assets/js/compiled/hubzero_pubs.js"
                           :output-dir "/home/jbg/Development/hub/app/components/com_pubs/site/assets/js/compiled"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}

               {:id "min"
                :source-paths ["src-cljs"]
                :compiler {:output-to "resources/public/js/compiled/hubzero_pubs.js"
                           :main hubzero-pubs.core
                           :optimizations :advanced
                           :pretty-print false}}]}

:figwheel {;; :http-server-root "public" ;; default and assumes "resources"
           ;; :server-port 3449 ;; default
           ;; :server-ip "127.0.0.1"

           :css-dirs ["resources/public/css"] ;; watch and update CSS

           ;; Start an nREPL server into the running figwheel process
           ;; :nrepl-port 7888

           ;; Server Ring Handler (optional)
           ;; if you want to embed a ring handler into the figwheel http-kit
           ;; server, this is for simple ring servers, if this

           ;; doesn't work for you just run your own server :) (see lein-ring)

           ;; :ring-handler hello_world.server/handler

           ;; To be able to open files in your editor from the heads up display
           ;; you will need to put a script on your path.
           ;; that script will have to take a file path and a line number
           ;; ie. in  ~/bin/myfile-opener
           ;; #! /bin/sh
           ;; emacsclient -n +$2 $1
           ;;
           ;; :open-file-command "myfile-opener"

           ;; if you are using emacsclient you can just use
           ;; :open-file-command "emacsclient"

           ;; if you want to disable the REPL
           ;; :repl false

           ;; to configure a different figwheel logfile path
           ;; :server-logfile "tmp/logs/figwheel-logfile.log"

           ;; to pipe all the output to the repl
           ;; :server-logfile false
           }

;; Setting up nREPL for Figwheel and ClojureScript dev
;; Please see:
;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
:profiles {:uberjar {:aot :all :omit-source true}
           :cln {:clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]}
           :dev {:dependencies [[binaryage/devtools "0.9.4"]
                                [figwheel-sidecar "0.5.14"]
                                [com.cemerick/piggieback "0.2.2"]]
                 }}

:main ^:skip-aot hubzero-pubs.core
:target-path "target/%s"
)

