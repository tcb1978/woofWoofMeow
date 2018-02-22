SELECT DISTINCT u.user_id, u.first_name, u.last_name, u.street_address, u.state, u.city, u.zip, u.email, u.phone, u.avatar, u.title, u.longitude, u.latitude, u.about_message, u.proximity
FROM users u
JOIN caregiver_availability ca ON ca.user_id = u.user_id
WHERE (begin_time < $1 AND end_time > $1) AND (u.proximity = $2);