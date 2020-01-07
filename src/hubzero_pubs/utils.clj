(ns hubzero-pubs.utils
  (:require [clojure.string :as string])
  (:import java.security.SecureRandom
           java.math.BigInteger)
  )

(def random (SecureRandom.))

(defn rand-str
  ([] (rand-str 26 32))
  ([len] (rand-str len 32))
  ([len radix] (let [s (.toString (BigInteger. (* 5 len) random) radix)]
                 (if (== (count s) len)
                   s
                   (rand-str len radix)))))

