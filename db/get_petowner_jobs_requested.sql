SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE j.request_status = 'f' AND j.petowner_id = $1;