SELECT * FROM jobs
WHERE petowner_id = $1 AND checkout_time IS NOT NULL;