UPDATE jobs
SET update_message = $1, update_image = $2
WHERE job_id = $3 AND caregiver_id = $4
RETURNING *;