INSERT INTO jobs
(user_id, comments, month, day, year, begin_time, end_time, am_pm, animal_id, request_status, thirty_minute_service, sixty_minute_service, sixty_minute_park_service)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;