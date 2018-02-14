DROP TABLE IF EXISTS animal
CREATE TABLE IF NOT EXISTS animal (
    animal_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR (100) NOT NULL,
    age VARCHAR (100) NOT NULL,
    weight VARCHAR (3) NOT NULL,
    sex VARCHAR (7) NOT NULL
);
--SELECT * FROM animal
--ORDER BY animal_id ASC

DROP TABLE IF EXISTS users
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    firstName VARCHAR (100) NOT NULL,
    lasttName VARCHAR (100) NOT NULL,
    streetAddress VARCHAR (100) NOT NULL,
    state VARCHAR (50) NOT NULL,
    city VARCHAR (50) NOT NULL,
    zip VARCHAR (25) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone VARCHAR (25) NOT NULL,
    avatar VARCHAR (200) NOT NULL,
    title VARCHAR (50) NOT NULL,
    longitude VARCHAR (100) NOT NULL,
    latitude VARCHAR (100) NOT NULL
);
--SELECT * FROM client
--ORDER BY user_id ASC

DROP TABLE IF EXISTS caregiver_availability
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
--SELECT * FROM caregiver_availability
--ORDER BY caregiver_availability_id ASC

DROP TABLE IF EXISTS jobs
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
--SELECT * FROM jobs
--ORDER BY job_id ASC

DROP TABLE IF EXISTS reviews
CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL,
    job_id INTEGER NOT NULL,
);
--SELECT * FROM reviews
--ORDER BY review_id ASC