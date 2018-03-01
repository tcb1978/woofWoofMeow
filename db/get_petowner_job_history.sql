SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE checkout_time IS NOT NULL AND petowner_id = $1;