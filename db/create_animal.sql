INSERT INTO animals
(name, breed, age, weight, sex, user_id)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;