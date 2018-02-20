INSERT INTO caregiver_availability
(user_id)
VALUES
($1)
RETURNING *;