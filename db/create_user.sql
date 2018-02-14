INSERT INTO users
(first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, longitude, latitude, password)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;