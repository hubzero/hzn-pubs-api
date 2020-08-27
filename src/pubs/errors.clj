(ns pubs.errors)

(defn !400 []
  {:status 400
   :title "Bad Request"
   :body "Validation failure."} 
  ) 

(defn !401 []
  {:status 401
   :title "Unauthorized"
   :body "Cookie based auth failure."} 
  )

(defn !404 []
  {:status 404
   :title "Not Found"
   :body "Resource not found."} 
  )

(defn !500 []
  {:status 500 
   :title "Server Error"
   :body "Something terrible happened."}
  )
 
