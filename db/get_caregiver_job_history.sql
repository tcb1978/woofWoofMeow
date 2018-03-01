SELECT * FROM jobs j
JOIN users u ON j.petowner_id = u.user_id
WHERE checkout_time IS NOT NULL AND caregiver_id = $1;