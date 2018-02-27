INSERT INTO reviews
(post_date, message, rating, job_id)
VALUES
($1, $2, $3, $4)
RETURNING *;