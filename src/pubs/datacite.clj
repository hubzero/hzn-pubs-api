(ns pubs.datacite
  (:require [clojure.xml :as xml]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-http.client :as http]
            [pubs.config :refer [config]])
  (:import java.util.Base64
           [org.jsoup Jsoup]))

(defn- _year [d]
  (-> d (clojure.string/split  #"/") (last)))

(defn- _encode [s]
  (.encodeToString (Base64/getEncoder) (.getBytes s)))

(defn- _titles [pub]
  {:tag :titles :content [{:tag :title :content [(:title pub)]}]})

(defn- _creators [pub]
  {:tag :creators
   :content (map (fn [a] {:tag :creator
                          :content [{:tag :creatorName
                                     :content [(:fullname a)]}]})
                 (vals (:authors-list pub)))})

(defn- _dates [d]
  {:tag :dates
   :content [{:tag :date
              :attrs {:dateType "Valid"}
              :content [d]}]})

(defn- _license [s]
  {:tag :rightsList
   :content [{:tag :rights
              :content [s]}]})

(defn- _related [pub]
  {:tag :relatedIdentifiers
   :content [{:tag :relatedIdentifier
              :attrs {:relatedIdentifierType "DOI"
                      :relationType "IsNewVersionOf"}
              :content [(str (:ver-id pub))]}]})

(defn- escape-abstract [abstract]
  (if abstract
    (-> abstract Jsoup/parse .text)
    ""))

(defn- _descriptions [pub]
  {:tag :descriptions
   :content [{:tag :description
              :attrs {:descriptionType "Abstract"}
              :content [(-> pub :abstract escape-abstract)]}]})

(defn- _resource [pub]
  {:tag     :resource
   :attrs   {"xmlns"              "http://datacite.org/schema/kernel-4"
             "xmlns:xsi"          "http://www.w3.org/2001/XMLSchema-instance"
             "xsi:schemaLocation" "http://datacite.org/schema/kernel-4 http://schema.datacite.org/meta/kernel-4/metadata.xsd"}
   :content (concat
              [{:tag :identifier
                :attrs {:identifierType "DOI"}
                :content [(get-in config [:doi :shoulder])]}

               (_creators pub)

               (_titles pub)

               {:tag :publisher
                :content [(get-in config [:doi :publisher])]}

               {:tag :resourceType
                :attrs {:resourceTypeGeneral "Text"}
                :content ["Document"]}

               {:tag :version
                :content [(str (:ver-id pub))]}

               (_descriptions pub)]

              (if-let [d (:publication-date pub)]
                [{:tag :publicationYear
                  :content [(_year d)]}
                 (_dates d)]
                (let [d (f/unparse (f/formatter "MM/dd/yyyy") (t/now))]
                  [{:tag :publicationYear
                    :content [(_year d)]}
                   (_dates d)]))
              (if-let [s (get-in pub [:licenses :name])] [(_license s)]))})

(defn pub->xml [pub]
  (xml/emit-element (_resource pub)))

(defn- _get-datacite [xml-str]
  (->>
    (http/post (str (get-in config [:datacite-doi :service]) "/metadata/" (get-in config [:doi :shoulder]))
               {:headers {"Authorization" (str "Basic " (_encode (get-in config [:datacite-doi :userpw])))
                          "Content-Type"  "application/xml;charset=UTF-8"}
                :body    xml-str})
    (:body)
    (re-find #"\(([^\)(]+)\)")
    (last)))

(defn get-datacite [pub]
  (_get-datacite (with-out-str (pub->xml pub))))
