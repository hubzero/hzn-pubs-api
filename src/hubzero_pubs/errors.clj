(ns hubzero-pubs.errors)

(defn four-ohoh []
  {:status 400
   :title "Bad Request"
   :body "Validation failure."} 
  ) 

(defn four-oh-1 []
  {:status 401
   :title "Unauthorized"
   :body "Cookie based auth failure."} 
  )

(defn four-oh-4 []
  {:status 404
   :title "Not found"
   :body "Resource not found."} 
  )
 

 
