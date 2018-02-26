SELECT * FROM jobs j
JOIN users u ON j.caregiver_id = u.user_id
WHERE j.petowner_id = $1;