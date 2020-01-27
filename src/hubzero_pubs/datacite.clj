(ns hubzero-pubs.datacite
  (:require [clojure.xml :as xml]
            [clj-http.client :as http]
            [cheshire.core :as json]
            [hubzero-pubs.config :refer [config]]
            )
  (:import java.util.Base64))

(defn- _year [pub]
  (-> (:publication-date pub)
      (clojure.string/split  #" ")
      (last) 
      )
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
                   {:tag :creator :content [{:tag :creatorName :content [(:name a)]}]}
                   ) (vals (:authors-list pub)))
   }
  )

(defn- _dates [pub]
  {:tag :dates
   :content [{:tag :date :attrs {:dateType "Valid"} :content [(:publication-date pub)]}
             ;; "Accepted" date type - JBG
             ]
   }
  )

(defn- _license [pub]
  {:tag :rightsList :content [{:tag :rights :content [(get-in pub [:licenses :name])]}]}
  )

(defn- _related [pub]
  {:tag :relatedIdentifiers :content [{:tag :relatedIdentifier :attrs {:relatedIdentifierType "DOI" :relationType "IsNewVersionOf" :content [(:ver-id pub)]}}]}
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
   :content [{:tag :identifier :attrs {:identifierType "DOI"} :content [(get-in config [:doi :shoulder])]}
             (_creators pub)
             (_titles pub)
             ; Not sure publisher is a thing? - JBG
             {:tag :publisher :content [(get-in config [:doi :publisher])]}
             {:tag :publicationYear :content [(_year pub)]}
             ; Not sure contributor is a thing? - JBG
             ;(_contributors pub)
             (_dates pub)
             ; Language? - JBG
             {:tag :resourceType :attrs {:resourceTypeGeneral "Text"} :content ["Document"]} ; Is this correct? - JBG
             ;(_related pub) Versioning? - JBG
             {:tag :version :content [(:ver-id pub)]}
             (_license pub)
             (_descriptions pub)
             ]
   }
;  :content [{:tag :identifier
;             :attrs {:identifierType :DOI}
;             :content [(:doi_shoulder config)
;                       (_creators pub)
;                       (_titles pub)
;                       ]
;             }
;            ]


  )

(defn pub2xml [pub]
  (xml/emit-element (_resource pub))
  )

(defn get-datacite [xml-str]
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

(comment

  (:doi_shoulder config)
  (:ver-id pub)


  (spit "doi.xml" (with-out-str (pub2xml pub)))

  ;; This creates the DOI - JBG
  (get-datacite (with-out-str (pub2xml pub)))

  (_creators pub)
  (_titles pub)
  (_license pub)
  (_descriptions pub)

  (_encode (get-in config [:datacite-doi :userpw]))

  (prn pub)

  (def pub {:_id "5e13137085b4b9002ed5dc58",
            :prj-id "1",
            :ver-id "1",
            :authors-list {1001 {:id 1001, :name "J B G", :organization ""}},
            :content [{:path "prjfoobar/files/foo", :name "foo"} {:path "prjfoobar/files/Screenshot from 2019-09-09 20-35-28.png", :name "Screenshot from 2019-09-09 20-35-28.png"}]
            :images {},
            :support-docs {},
            :title "Foorepl",
            :user-id 1001
            :licenses {:restriction nil, :opensource false, :name "cc", :agreement 1, :icon "/components/com_publications/assets/img/logos/cc.gif", :title "CC0 - Creative Commons", :customizable 0, :ordering 2, :active 1, :id 2, :info "CC0 enables scientists, educators, artists and other creators and owners of copyright- or database-protected content to waive those interests in their works and thereby place them as completely as possible in the public domain, so that others may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or database law.", :url "http://creativecommons.org/about/cc0", :main 1, :derivatives 1, :text ""}
            :citations
            [{:institution "",
              :date_publish nil,
              :software_use nil,
              :address "",
              :format "apa",
              :fundedby 0,
              :publisher "",
              :key nil,
              :series "",
              :number "8",
              :school "",
              :short_title "",
              :custom3 nil,
              :call_number "",
              :uid 1292,
              :formatted "",
              :res_edu nil,
              :author_address "",
              :ref_type "",
              :params "{\"exclude\":\"\",\"rollover\":1}",
              :abstract
              "<p>Using transparent microfluidic cells to study the two-phase properties of a synthetic porous medium, we establish that the interfacial area per volume between nonwetting and wetting fluids lifts the ambiguity associated with the hysteretic relationship between capillary pressure and saturation in porous media. The interface between the nonwetting and wetting phases is composed of two subsets: one with a unique curvature determined by the capillary pressure, and the other with a distribution of curvatures dominated by disjoining pressure. This work provides experimental support for recent theoretical predictions that the capillary-dominated subset plays a role analogous to a state variable. Any comprehensive description of multiphase flow properties must include this interfacial area with the traditional variables of pressure and fluid saturation.</p>",
              :month "April",
              :date_accept nil,
              :type "2",
              :created #inst "2013-09-24T17:39:09.000-00:00",
              :howpublished "",
              :organization nil,
              :isbn "",
              :scope "hub",
              :journal "Geophysical Research Letters",
              :doi "10.1029/2003GL019282",
              :keywords "",
              :title
              "Linking Pressure and Saturation through Interfacial Areas in Porous Media",
              :pages "",
              :volume "310",
              :note "",
              :author
              "Cheng, J.-T., Pyrak-Nolte, L. J., Nolte, D. D. and N. J. Giordano",
              :chapter nil,
              :year "2004",
              :date_submit nil,
              :research_notes "",
              :language nil,
              :label nil,
              :id 1,
              :notes nil,
              :eprint
              "http://www.physics.purdue.edu/rockphys/docs/publications/porous-media/LinkingPressure.pdf",
              :scope_id "0",
              :exp_list_exp_data nil,
              :url "http://onlinelibrary.wiley.com/doi/10.1029/2003GL019282/full",
              :editor "",
              :custom2 nil,
              :affiliated 1,
              :edition "",
              :custom1 nil,
              :location "",
              :cite "",
              :published 1,
              :custom4 nil,
              :accession_number "",
              :booktitle "",
              :exp_data nil}],
            :ack true
            :publication-date "11th January 2020"
            :tags ["admin" "bar" "foo"]
            }
    )

  )

