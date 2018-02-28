UPDATE jobs
SET checkin_time = $2
WHERE job_id = $1
RETURNING checkin_time;