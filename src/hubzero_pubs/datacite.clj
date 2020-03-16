(ns hubzero-pubs.datacite
  (:require [clojure.xml :as xml]
            [clj-http.client :as http]
            [cheshire.core :as json]
            [hubzero-pubs.config :refer [config]]
            )
  (:import java.util.Base64))

(defn- _year [d]
  (-> d (clojure.string/split  #"/") (last))
  )

(defn- _encode [s]
  (.encodeToString (Base64/getEncoder) (.getBytes s))
  )


(defn- _titles [pub]
  {:tag :titles :content [{:tag :title :content [(:title pub)]}]}
  )

(defn- _creators [pub]
  {:tag :creators
   :content (map (fn [a]
                   {:tag :creator :content [{:tag :creatorName :content [(:fullname a)]}]}
                   ) (vals (:authors-list pub)))
   }
  )

(defn- _dates [d]
  {:tag :dates
   :content [{:tag :date :attrs {:dateType "Valid"} :content [d]}
             ;; "Accepted" date type - JBG
             ]
   }
  )

(defn- _license [s]
  {:tag :rightsList :content [{:tag :rights :content [s]}]}
  )

(defn- _related [pub]
  {:tag :relatedIdentifiers :content [{:tag :relatedIdentifier :attrs {:relatedIdentifierType "DOI" :relationType "IsNewVersionOf" } :content [(str (:ver-id pub))]}]}
  )

(defn- _descriptions [pub]
  {:tag :descriptions :content [{:tag :description :attrs {:descriptionType "Abstract"} :content [(:abstract pub "")]}]}
  )

(defn- _resource [pub]
  {:tag     :resource
   :attrs   {"xmlns"              "http://datacite.org/schema/kernel-4"
             "xmlns:xsi"          "http://www.w3.org/2001/XMLSchema-instance"
             "xsi:schemaLocation" "http://datacite.org/schema/kernel-4 http://schema.datacite.org/meta/kernel-4/metadata.xsd"
             }
   :content (concat 
              [{:tag :identifier :attrs {:identifierType "DOI"} :content [(get-in config [:doi :shoulder])]}
               (_creators pub)
               (_titles pub)
               {:tag :publisher :content [(get-in config [:doi :publisher])]}

               ; Not sure contributor is a thing? - JBG
               ;(_contributors pub)

               ; Language? - JBG
               {:tag :resourceType :attrs {:resourceTypeGeneral "Text"} :content ["Document"]} ; Is this correct? - JBG
               ;(_related pub)
               {:tag :version :content [(str (:ver-id pub))]}
               (_descriptions pub)
               ]            
              (if-let [d (:publication-date pub)] [{:tag :publicationYear :content [(_year d)]} (_dates d)])

              (if-let [s (get-in pub [:licenses :name])] [(_license s)])

              )
   }
  )

(defn pub2xml [pub]
  (xml/emit-element (_resource pub))
  )

(defn- _get-datacite [xml-str]
  (->>
    (http/post (str (get-in config [:datacite-doi :service]) "/metadata/" (get-in config [:doi :shoulder]))
               {:headers {"Authorization" (str "Basic " (_encode (get-in config [:datacite-doi :userpw])))
                          "Content-Type"  "application/xml;charset=UTF-8"
                          }
                :body    xml-str
                })
    (:body)
    (re-find #"\(([^\)(]+)\)")
    (last)
    )
  )

(defn get-datacite [pub]
  (_get-datacite (with-out-str (pub2xml pub)))
  )

(comment

  (:doi_shoulder config)
  (:ver-id pub)

    (def pub {
              :tags {5 {:description "<p>The foo tag.</p>", :admin 0, :objects 71, :raw_tag "foo", :created #inst "2020-01-08T10:44:33.000-00:00", :modified #inst "2020-03-11T10:56:36.000-00:00", :id 5, :tag "foo", :modified_by 1001, :created_by 1000, :substitutes 0}}, 
              :pub-id 209, 
              :ver-id 196, 
              :prj-id 1, 
              :authors-list {431 {:email "ps@example.com", :project_owner_id 42, :userid 0, :lastname "Smart", :fullname "Petra Smart", :organization "foo", :firstname "Petra", :id 431, :credit ""}, 422 {:email "fb@example.com", :project_owner_id 41, :userid 0, :lastname nil, :fullname "Femke Blokje", :organization nil, :firstname nil, :id 422, :credit ""}, 452 {:email "jbg@example.com", :project_owner_id 1, :userid 0, :lastname "G", :fullname "J B G", :organization "Bob Taco Stand Baz", :firstname "J B", :id 452, :credit ""}}, 
              :content {241 {:path "prjfoobar/files/foo", :name "foo", :id 241, :index 0}}, 
              :images {242 {:path "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png", :name "Screenshot from 2019-09-09 20-35-28.png", :id 242, :index 0}},
              :support-docs {243 {:path "prjfoobar/files/foo", :name "foo", :id 243, :index 0}},
              :comments "Blha blha blha",
              :abstract "blah foo bar",
              :licenses {:restriction nil, :opensource false, :name "cc", :agreement 1, :icon "/components/com_publications/assets/img/logos/cc.gif", :title "CC0 - Creative Commons", :customizable 0, :ordering 2, :active 1, :id 2, :info "CC0 enables scientists, educators, artists and other creators and owners of copyright- or database-protected content to waive those interests in their works and thereby place them as completely as possible in the public domain, so that others may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or database law.", :url "http://creativecommons.org/about/cc0", :main 1, :derivatives 1, :text ""},
              :user-id 1001, 
              :state 3, 
              :doi "", 
              :title "Hahaha", 
              :publication-date "03/31/2020",
              :ack true,
              :url nil,
              :license_type 2,
              :release-notes "hahahahaha"}
    )


  (pub2xml pub)

  (spit "doi.xml" (with-out-str (pub2xml pub)))

  ;; This creates the DOI - JBG
  (get-datacite pub)

  (_creators pub)

  (_titles pub)

  (_license pub)

  (_descriptions pub)

  (_resource pub)

  (_encode (get-in config [:datacite-doi :userpw]))

  (prn pub)



  )

