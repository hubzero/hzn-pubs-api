(ns figwheel.connect.build-dev (:require [hubzero-pubs.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/hubzero-pubs.core.on-js-reload (apply js/hubzero-pubs.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'hubzero-pubs.core/on-js-reload' is missing"))), :websocket-url "ws://0.0.0.0:3449/figwheel-ws", :build-id "dev"})

