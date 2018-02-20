DROP TABLE IF EXISTS users, animals, jobs, review, caregiver_availability CASCADE;


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
    proximity_definition VARCHAR (10)
);

INSERT INTO users
(first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, longitude, latitude, about_message, proximity_definition)
VALUES
('Jemaine', 'Brown', 'Lane', 'Ca', 'Santa Monica', '90048', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'petowner', '1', '-118.390856', '34.095567', 'blablabla', 'bla');

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
<<<<<<< HEAD
('Mia', 'Chihuahua Mix', '5', '6 lbs', 'Female', 'https://ibb.co/bRxU2c', 1);
=======
('Mia', 'Chihuahua Mix', '5', '6 lbs', 'Female', 'https://image.ibb.co/cLyDTH/mia.jpg', 1);
>>>>>>> caregiver

CREATE TABLE IF NOT EXISTS caregiver_availability (
    caregiver_availability_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    day INTEGER,
    begin_time VARCHAR (10),
    end_time VARCHAR (10),
    am_pm VARCHAR (5)
);

CREATE TABLE IF NOT EXISTS jobs (
    job_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    comments VARCHAR (100),
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    year INTEGER NOT NULL,
    begin_time VARCHAR (10) NOT NULL,
    end_time VARCHAR (10) NOT NULL,
    am_pm VARCHAR (5) NOT NULL,
    animal_id INTEGER REFERENCES animals (animal_id) NOT NULL,
    request_status VARCHAR (3) NOT NULL,
    thirty_minute_service VARCHAR (3) NOT NULL,
    sixty_minute_service VARCHAR (3) NOT NULL,
    sixty_minute_park_service VARCHAR (3) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL,
    job_id INTEGER REFERENCES jobs (job_id) NOT NULL
);