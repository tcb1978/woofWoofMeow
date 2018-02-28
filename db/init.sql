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
    avatar VARCHAR (500),
    title VARCHAR (50) NOT NULL,
    password VARCHAR (100),
    longitude VARCHAR (100),
    latitude VARCHAR (100),
    about_message VARCHAR (1000),
    proximity VARCHAR (10)
);


CREATE TABLE IF NOT EXISTS animals (
    animal_id SERIAL PRIMARY KEY,
    animal_name VARCHAR (100) NOT NULL,
    breed VARCHAR (100) NOT NULL,
    age VARCHAR (100) NOT NULL,
    weight VARCHAR (7) NOT NULL,
    sex VARCHAR (7) NOT NULL,
    animal_avatar VARCHAR (200),
    animal_about_message VARCHAR (1000),
    user_id INTEGER REFERENCES users (user_id) NOT NULL
);

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
    end_time VARCHAR (10),
    request_status BOOLEAN,
    service VARCHAR(20) NOT NULL,
    checkin_time VARCHAR(10),
    checkout_time VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id) NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL,
    job_id INTEGER REFERENCES jobs (job_id) NOT NULL
);