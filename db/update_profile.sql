UPDATE users
SET street_address = $1, state = $2, city = $3, zip = $4, email = $5, phone = $6, avatar = $7, about_message = $8, proximity = $9
WHERE user_id = $10
RETURNING *;