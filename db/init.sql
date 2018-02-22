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
('Jemaine', 'Brown', 'Lane', 'Ca', 'Santa Monica', '90048', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '3'),
('Sergey', 'Sherstobitov', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '5'),
('Jake', 'Jakeson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '7'),
('John', 'Johnson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '10'),
('Kate', 'Kateson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '3'),
('Jane', 'Janeson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'caregiver', '1', '-118.390856', '34.095567', 'blablabla', '5'),
('Petowner', 'Petownerson', 'Lane', 'Ca', 'Santa Monica', '9813', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'petowner', '1', '-118.390856', '34.095567', 'blablabla', '5');

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

CREATE TABLE IF NOT EXISTS caregiver_availability (
    caregiver_availability_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    day INTEGER NOT NULL,
    time_range VARCHAR (10),
    begin_time INTEGER,
    end_time INTEGER
);

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