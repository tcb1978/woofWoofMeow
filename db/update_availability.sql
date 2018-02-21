UPDATE caregiver_availability
SET time_range = $1, begin_time = $2, end_time = $3
WHERE day = $4 AND user_id = $5
RETURNING *;