INSERT INTO caregiver_availability
(user_id, day, begin_time, end_time, am_pm)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;