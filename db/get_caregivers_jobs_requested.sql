SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE request_status = 'f' AND u.petowner_id = $1;