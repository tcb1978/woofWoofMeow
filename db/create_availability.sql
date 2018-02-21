INSERT INTO caregiver_availability
(user_id, day, time_range, begin_time, end_time)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;