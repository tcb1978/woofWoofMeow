DROP TABLE IF EXISTS users, animals, jobs, reviews, caregiver_availability CASCADE;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR (100),
    last_name VARCHAR (100),
    street_address VARCHAR (100),
    state VARCHAR (50),
    city VARCHAR (50),
    zip VARCHAR (25),
    email VARCHAR (100),
    phone VARCHAR (25),
    avatar VARCHAR (200),
    title VARCHAR (50) NOT NULL,
    password VARCHAR (100),
    longitude VARCHAR (100),
    latitude VARCHAR (100),
    about_message VARCHAR (1000),
    proximity VARCHAR (10)
);

INSERT INTO users
(first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, longitude, latitude, about_message, proximity)
VALUES
('PetOwner 1', 'LastName', '1234 N Street St', 'CA', 'Santa Monica', '90048', 'pmail1', '1234567890', 'http://busybridgeng.com/wp-content/uploads/2017/05/generic-avatar.png', 'petowner', '1', '-118.390856', '34.095567', 'Hi, my name is PetOwner 1, and I have dogs.', '3'),
('PetOwner 2', 'LastName', '1234 N Street St', 'CA', 'Santa Monica', '90048', 'pmail2', '1234567890', 'http://busybridgeng.com/wp-content/uploads/2017/05/generic-avatar.png', 'petowner', '1', '-118.390856', '34.095567', 'Hi, my name is PetOwner 2, and these boots were not made for walking.', '3'),

('Caregiver 1', 'LastName', '1234 N Street St', 'Ca', 'Santa Monica', '90048', 'cmail1', '1234567890', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'Hi, my name is Caregiver 1, and these boots were made for walking.', '3'),
('Caregiver 2', 'LastName', '1234 N Street St', 'Ca', 'Santa Monica', '90048', 'cmail2', '1234567890', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'Hi, my name is Caregiver 2, and these boots were made for walking.', '3'),
('Caregiver 3', 'LastName', '1234 N Street St', 'Ca', 'Santa Monica', '90048', 'cmail3', '1234567890', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'Hi, my name is Caregiver 3, and these boots were made for walking.', '3'),
('Caregiver 4', 'LastName', '1234 N Street St', 'Ca', 'Santa Monica', '90048', 'cmail4', '1234567890', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'Hi, my name is Caregiver 4, and these boots were made for walking.', '3'),
-- ('Sergey', 'Sherstobitov', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '5'),
-- ('Jake', 'Jakeson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '7'),
-- ('John', 'Johnson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '10'),
-- ('Kate', 'Kateson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '3'),
-- ('Jane', 'Janeson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '5'),
-- ('Petowner', 'Petownerson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'petowner', '1', '-118.390856', '34.095567', 'blablabla', '5');

CREATE TABLE IF NOT EXISTS animals (
    animal_id SERIAL PRIMARY KEY,
    animal_name VARCHAR (100) NOT NULL,
    breed VARCHAR (100) NOT NULL,
    age VARCHAR (100) NOT NULL,
    weight VARCHAR (7) NOT NULL,
    sex VARCHAR (7) NOT NULL,
    animal_avatar VARCHAR (200),
    user_id INTEGER REFERENCES users (user_id) NOT NULL
);

INSERT INTO animals
(animal_name, breed, age, weight, sex, animal_avatar, user_id)
VALUES
('Mia', 'Chihuahua Mix', '5', '6 lbs', 'Female', 'https://image.ibb.co/cLyDTH/mia.jpg', 1);
('Copper', 'Chihuahua Mix', '5', '6 lbs', 'Female', 'http://images6.fanpop.com/image/photos/36300000/German-Shepherds-image-german-shepherds-36311386-1997-1636.jpg', 2;

CREATE TABLE IF NOT EXISTS caregiver_availability (
    caregiver_availability_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    day INTEGER NOT NULL,
    time_range VARCHAR (10),
    begin_time INTEGER,
    end_time INTEGER
);

INSERT INTO caregiver_availability
(user_id, day, time_range, begin_time, end_time)
VALUES
(1, 0, '6AM - 2PM', 6, 14),
(1, 1, '2PM - 10PM', 2, 10),
(1, 2, '6AM - 2PM', 6, 14),
(1, 3, '2PM - 10PM', 2, 10),
(1, 4, '6AM - 2PM', 6, 14),
(1, 5, '6AM - 2PM', 6, 14),
(1, 6, '2PM - 10PM', 2, 10),
(2, 0, '6AM - 2PM', 6, 14),
(2, 1, '6AM - 2PM', 6, 14),
(2, 2, '2PM - 10PM', 2, 10),
(2, 3, '2PM - 10PM', 2, 10),
(2, 4, '6AM - 2PM', 6, 14),
(2, 5, '2PM - 10PM', 2, 10),
(2, 6, '2PM - 10PM', 2, 10),
(3, 0, '2PM - 10PM', 2, 10),
(3, 1, '2PM - 10PM', 2, 10),
(3, 2, '2PM - 10PM', 2, 10),
(3, 3, '6AM - 2PM', 6, 14),
(3, 4, '6AM - 2PM', 6, 14),
(3, 5, '6AM - 2PM', 6, 14),
(3, 6, '6AM - 2PM', 6, 14),
(4, 0, '2PM - 10PM', 2, 10),
(4, 1, '6AM - 2PM', 6, 14),
(4, 2, '2PM - 10PM', 2, 10),
(4, 3, '6AM - 2PM', 6, 14),
(4, 4, '6AM - 2PM', 6, 14),
(4, 5, '6AM - 2PM', 6, 14),
(4, 6, '6AM - 2PM', 6, 14),
(5, 0, '2PM - 10PM', 2, 10),
(5, 1, '2PM - 10PM', 2, 10),
(5, 2, '6AM - 2PM', 6, 14),
(5, 3, '6AM - 2PM', 6, 14),
(5, 4, '6AM - 2PM', 6, 14),
(5, 5, '2PM - 10PM', 2, 10),
(5, 6, '6AM - 2PM', 6, 14),
(6, 0, '6AM - 2PM', 6, 14),
(6, 1, '6AM - 2PM', 6, 14),
(6, 2, '2PM - 10PM', 2, 10),
(6, 3, '2PM - 10PM', 2, 10),
(6, 4, '6AM - 2PM', 6, 14),
(6, 5, '6AM - 2PM', 6, 14),
(6, 6, '2PM - 10PM', 2, 10),
(7, 0, '6AM - 2PM', 6, 14),
(7, 1, '2PM - 10PM', 2, 10),
(7, 2, '6AM - 2PM', 6, 14),
(7, 3, '2PM - 10PM', 2, 10),
(7, 4, '6AM - 2PM', 6, 14),
(7, 5, '6AM - 2PM', 6, 14),
(7, 6, '6AM - 2PM', 6, 14);


CREATE TABLE IF NOT EXISTS jobs (
    job_id SERIAL PRIMARY KEY,
    caregiver_id INTEGER REFERENCES users (user_id) NOT NULL,
    petowner_id INTEGER REFERENCES users (user_id) NOT NULL,
    comments VARCHAR (100),
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    year INTEGER NOT NULL,
    begin_time VARCHAR (10) NOT NULL,
    end_time VARCHAR (10) NOT NULL,
    request_status BOOLEAN NOT NULL,
    service VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL,
    job_id INTEGER REFERENCES jobs (job_id) NOT NULL
);