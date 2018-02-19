UPDATE animals SET animal_name = $1 WHERE animal_id = $2 AND user_id = $3
RETURNING *;