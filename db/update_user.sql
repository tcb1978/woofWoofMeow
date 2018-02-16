UPDATE users
SET first_name = $1, last_name = $2, street_address = $3, state = $4, city = $5, zip = $6, phone = $7, avatar = $8, title = $9, longitude = $10, latitude = $11, about_message = $12, proximity_defenition = $13
WHERE user_id = $14
RETURNING *;