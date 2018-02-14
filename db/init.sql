DROP TABLE IF EXISTS users, animals, jobs, review, caregiver_availability CASCADE;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR (100) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    street_address VARCHAR (100) NOT NULL,
    state VARCHAR (50) NOT NULL,
    city VARCHAR (50) NOT NULL,
    zip VARCHAR (25) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone VARCHAR (25) NOT NULL,
    avatar VARCHAR (200) NOT NULL,
    title VARCHAR (50) NOT NULL,
    longitude VARCHAR (100) NOT NULL,
    latitude VARCHAR (100) NOT NULL,
    password VARCHAR (100) NOT NULL
);


INSERT INTO users
(first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, longitude, latitude, password)
VALUES
('Jemaine', 'Brown', 'Lane', 'Ca', 'Santa Monica', '90048', 'mrmunster@gmail.com', '3236666666', 'https://vignette.wikia.nocookie.net/headhuntershorrorhouse/images/6/6b/Herman_Munster_001.jpg/revision/latest?cb=20091022161116', 'petowner', '-118.390856', '34.095567', '1');


CREATE TABLE IF NOT EXISTS animals (
    animal_id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    breed VARCHAR (100) NOT NULL,
    age VARCHAR (100) NOT NULL,
    weight VARCHAR (7) NOT NULL,
    sex VARCHAR (7) NOT NULL,
    user_id INTEGER NOT NULL
);

INSERT INTO animals
(name, breed, age, weight, sex, user_id)
VALUES
('Mia', 'Chihuahua Mix', '5', '6 lbs', 'Female', 1);

CREATE TABLE IF NOT EXISTS caregiver_availability (
    caregiver_availability_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    year INTEGER NOT NULL,
    begin_time VARCHAR (10) NOT NULL,
    end_time VARCHAR (10) NOT NULL,
    am_pm VARCHAR (5) NOT NULL
);

CREATE TABLE IF NOT EXISTS jobs (
    job_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    comments VARCHAR (100),
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    year INTEGER NOT NULL,
    begin_time VARCHAR (10) NOT NULL,
    end_time VARCHAR (10) NOT NULL,
    am_pm VARCHAR (5) NOT NULL,
    animal_id INTEGER NOT NULL,
    request_status VARCHAR (3) NOT NULL,
    thirty_minute_service VARCHAR (3) NOT NULL,
    sixty_minute_service VARCHAR (3) NOT NULL,
    sixty_minute_park_service VARCHAR (3) NOT NULL
);


CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL,
    job_id INTEGER NOT NULL
);