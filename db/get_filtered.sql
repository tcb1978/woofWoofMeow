SELECT * 
FROM caregiver_availability ca
JOIN users u ON ca.user_id = u.user_id
WHERE (begin_time < $1 AND end_time > $1) AND (u.proximity = $2);