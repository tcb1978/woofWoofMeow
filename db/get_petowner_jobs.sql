SELECT * FROM jobs j
JOIN users u ON j.petowner_id = u.user_id
WHERE j.petowner_id = $1;