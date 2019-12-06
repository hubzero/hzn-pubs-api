-- name: sel-session
--
SELECT * FROM jos_session WHERE session_id = :session_id

-- name: sel-user
--
SELECT username FROM jos_users WHERE id = :user_id

-- name: sel-users
--
SELECT u.id, u.name, u.givenName, u.middleName, u.surname, u.username, u.email, up.profile_value AS 'org', u.access, (LOWER(u.name) LIKE :name OR LOWER(u.givenName) LIKE :name OR LOWER(u.surname) LIKE :name) as rel FROM `jos_users` AS u LEFT JOIN `jos_user_profiles` AS up ON u.id=up.user_id WHERE (LOWER(u.name) LIKE :name OR LOWER(u.givenName) LIKE :name OR LOWER(u.surname) LIKE :name) AND u.block=0 AND u.activation>0 AND u.email NOT LIKE '%@invalid' AND up.profile_key = 'organization' ORDER BY rel DESC, u.name ASC LIMIT 0,20

-- name: sel-prj
--
SELECT * FROM jos_projects WHERE id = :id

-- name: sel-prj-users 
--
SELECT DISTINCT o.*, x.name, x.username, x.organization, x.picture, g.cn as groupname, g.description as groupdesc, p.created_by_user , if (o.userid = 0, o.invited_name, x.name) as fullname  FROM jos_project_owners AS o  JOIN jos_projects as p ON o.projectid=p.id LEFT JOIN jos_xprofiles as x ON o.userid=x.uidNumber  LEFT JOIN jos_xgroups as g ON o.groupid=g.gidNumber  WHERE o.projectid=:id AND (o.userid > 0 OR o.invited_email IS NOT null OR o.invited_name IS NOT null)  AND o.status='1' ORDER BY fullname ASC

-- name: sel-prj-pubs
--
SELECT V.*, C.id as id, C.category, C.project_id, C.access as master_access,
C.checked_out, C.checked_out_time, C.rating as master_rating, C.group_owner, C.master_type, C.master_doi, C.ranking as master_ranking, C.times_rated as master_times_rated, C.alias, V.id as version_id, t.name AS cat_name, t.alias as cat_alias, t.url_alias as cat_url, PP.alias as project_alias, PP.title as project_title, PP.state as project_status, PP.private as project_private, PP.provisioned as project_provisioned, MT.alias as base, MT.params as type_params, (SELECT vv.version_label FROM `jos_publication_versions` as vv WHERE vv.publication_id=C.id AND vv.state=3 ORDER BY ID DESC LIMIT 1) AS dev_version_label , (SELECT COUNT(*) FROM `jos_publication_versions` WHERE publication_id=C.id AND state!=3) AS versions   FROM jos_publication_versions V LEFT JOIN jos_publications C ON V.publication_id = C.id LEFT JOIN jos_projects PP ON PP.id = C.project_id LEFT JOIN jos_publication_master_types MT ON MT.id = C.master_type LEFT JOIN jos_publication_categories AS t ON t.id = C.category WHERE 1  AND V.id = (SELECT MAX(wv2.id) FROM `jos_publication_versions` AS wv2 WHERE wv2.publication_id = C.id) AND C.project_id=:id AND V.state != 2  AND (V.access != 2)   GROUP BY C.id  ORDER BY V.title ASC, V.version_number DESC 

-- name: insert-pub<!
--
INSERT INTO `jos_publications` (`category`, `master_type`, `project_id`, `access`, `created_by`, `created` ) VALUES (:category, :master_type, :project_id, :access, :created_by, :created)

-- name: sel-pub-version
--
SELECT * FROM `jos_publication_versions` WHERE `id` = :id

-- name: insert-pub-version<!
--
INSERT INTO `jos_publication_versions` (`publication_id`, `main`, `state`, `title`, `description`, `abstract`, `created`, `created_by`, `secret`, `version_number`, `license_type`, `access`) VALUES (:publication_id, :main, :state, :title, :description, :abstract, :created, :created_by, :secret, :version_number, :license_type, :access)

-- name: update-pub-version!
--
UPDATE `jos_publication_versions` SET `publication_id`=:publication_id, `main`=:main,`doi`=:doi, `state`=:state, `title`=:title, `description`=:description, `abstract`=:abstract, `created`=:created, `created_by`=:created_by, `modified`=:modified, `modified_by`=:modified_by, `version_label`=:version_label, `secret`=:secret, `version_number`=:version_number, `license_type`=:license_type, `access`=:access, `rating`=:rating, `times_rated`=:times_rated, `ranking`=:ranking, `forked_from`=:forked_from WHERE `id`=:id

-- name: insert-attachment<!
--
INSERT INTO `jos_publication_attachments` (`publication_version_id`,`publication_id`,`created`,`created_by`,`role`,`path`,`type`,`ordering`,`element_id`) VALUES (:publication_version_id, :publication_id, :created, :created_by, :role, :path, :type, :ordering, element_id)

-- name: update-attachment!
--
UPDATE `jos_publication_attachments` SET `publication_version_id`=:publication_version_id, `publication_id`=:publication_id, `created`=:created, `created_by`=:created_by, `role`=:role, `path`=:path, `type`=:type, `ordering`=:ordering, `content_hash`=:content_hash, `element_id`=:element_id, `modified_by`=:modified_by, `object_id`=:object_id, `object_name`=:object_name, `object_instance`=object_instance, `object_revision`=:object_revision WHERE `id`=:id

-- name: del-attachment!
--
DELETE FROM `jos_publication_attachments` WHERE `id` = :id 

-- name: sel-prj-owners
--
SELECT DISTINCT * FROM jos_project_owners AS o JOIN jos_projects as p ON o.projectid=p.id LEFT JOIN jos_publication_authors as pa ON o.id=pa.project_owner_id AND pa.publication_version_id=:publication_version_id LEFT JOIN jos_xprofiles as x ON o.userid=x.uidNumber LEFT JOIN jos_xgroups as g ON o.groupid=g.gidNumber WHERE o.projectid=:project_id AND (o.userid > 0 OR o.invited_email IS NOT null OR o.invited_name IS NOT null) AND o.status NOT IN (2,4) GROUP BY o.id, pa.name, pa.organization, pa.credit

-- name: sel-pub-authors
--
SELECT A.*, PO.invited_name, PO.invited_email  FROM jos_publication_authors as A  JOIN jos_project_owners as PO ON PO.id=A.project_owner_id  WHERE A.publication_version_id=:publication_version_id AND A.status=1 AND (A.role != 'submitter' || A.role IS NULL) ORDER BY A.ordering ASC

-- name: sel-licenses
--
SELECT * FROM jos_publication_licenses WHERE active=1 ORDER BY ordering;









-- name: update-curation!
--
UPDATE `jos_publication_curation` SET `publication_id`=:publication_id, `publication_version_id`=:publication_id, `updated`=:updated, `updated_by`= :updated_by, `update`=:update,`reviewed_by`=:reviewed_by, `review_status`=:review_status, `block`=:block, `step`=:step, `element`=:element WHERE `id`=:id


