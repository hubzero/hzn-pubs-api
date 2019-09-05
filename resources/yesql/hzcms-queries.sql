-- name: get-session
--
SELECT * FROM jos_session WHERE session_id = :session_id; 

-- name: get-user
--
SELECT username FROM jos_users WHERE id = :user_id;


