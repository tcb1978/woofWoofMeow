SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE request_status = 't' AND checkout_time IS NULL AND j.petowner_id = $1;