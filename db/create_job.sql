INSERT INTO jobs
(caregiver_id, petowner_id, month, day, year, begin_time, end_time, request_status, service)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;