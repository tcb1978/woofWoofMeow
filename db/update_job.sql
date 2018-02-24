UPDATE jobs
SET request_status = 't'
WHERE job_id = $1 AND caregiver_id = $2
RETURNING *;