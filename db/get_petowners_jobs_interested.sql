SELECT * FROM jobs j
JOIN users u ON j.petowner_id = u.user_id
WHERE request_status = 't' AND u.caregiver_id = $1;