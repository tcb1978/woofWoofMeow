SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE j.caregiver_id = $1;