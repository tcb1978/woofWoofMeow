SELECT * FROM jobs
WHERE caregiver_id = $1 AND checkout_time IS NOT NULL;