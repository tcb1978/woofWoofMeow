SELECT * FROM reviews r
JOIN jobs j ON r.job_id = j.job_id
WHERE caregiver_id = $1;