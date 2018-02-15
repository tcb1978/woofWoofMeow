INSERT INTO reviews
(user_id, message, rating, job_id)
VALUES
($1, $2, $3, $4)
RETURNING *;