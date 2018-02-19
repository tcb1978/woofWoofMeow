UPDATE users
SET first_name = $1, last_name = $2, street_address = $3, state = $4, city = $5, zip = $6, email = $7, phone = $8, avatar = $9, title = $10, password = $11, longitude = $12, latitude = $13, about_message = $14, proximity_definition = $15
WHERE user_id = $16
RETURNING *;