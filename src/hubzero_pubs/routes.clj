(ns hubzero-pubs.routes
  (:require [compojure.core :refer [defroutes context GET POST]]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [ring.util.response :refer [redirect]]
            [ring.util.response :as response]
            ))

(defroutes api-routes
  (GET "/api/v1/helloworld/user" request {:body (:user request)})
  )

