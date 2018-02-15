INSERT INTO caregiver_availability
(user_id, month, day, year, begin_time, end_time, am_pm)
VALUES
($1, $2, $3, $4, $5, $6, $7)
RETURNING *;