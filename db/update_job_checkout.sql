UPDATE jobs
SET checkout_time = $2
WHERE job_id = $1
RETURNING checkout_time;