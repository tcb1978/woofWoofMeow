DROP TABLE IF EXISTS animals
CREATE TABLE IF NOT EXISTS animals (
    animalId SERIAL PRIMARY KEY,
    clientId INTEGER NOT NULL,
    name VARCHAR (100) NOT NULL,
    age VARCHAR (100) NOT NULL,
    weight VARCHAR (3) NOT NULL,
    sex VARCHAR (7) NOT NULL
);
--SELECT * FROM animals
--ORDER BY animalId ASC

DROP TABLE IF EXISTS caregivers
CREATE TABLE IF NOT EXISTS caregivers (
    caregiverId SERIAL PRIMARY KEY,
    firstName VARCHAR (100) NOT NULL,
    lasttName VARCHAR (100) NOT NULL,
    streetAddress VARCHAR (100) NOT NULL,
    state VARCHAR (50) NOT NULL,
    city VARCHAR (50) NOT NULL,
    zip VARCHAR (25) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone VARCHAR (25) NOT NULL,
    avatar VARCHAR (200) NOT NULL,
    longitude VARCHAR (100) NOT NULL,
    latitude VARCHAR (100) NOT NULL
);
--SELECT * FROM caregivers
--ORDER BY caregiverId ASC

DROP TABLE IF EXISTS client
CREATE TABLE IF NOT EXISTS client (
    clientId SERIAL PRIMARY KEY,
    firstName VARCHAR (100) NOT NULL,
    lasttName VARCHAR (100) NOT NULL,
    streetAddress VARCHAR (100) NOT NULL,
    state VARCHAR (50) NOT NULL,
    city VARCHAR (50) NOT NULL,
    zip VARCHAR (25) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone VARCHAR (25) NOT NULL,
    avatar VARCHAR (200) NOT NULL,
    longitude VARCHAR (100) NOT NULL,
    latitude VARCHAR (100) NOT NULL
);
--SELECT * FROM client
--ORDER BY clientId ASC

DROP TABLE IF EXISTS daysAvailable
CREATE TABLE IF NOT EXISTS daysAvailable (
    daysAvailable_Id SERIAL PRIMARY KEY,
    caregiverId INTEGER NOT NULL,
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    beginTime VARCHAR (10) NOT NULL,
    endTime VARCHAR (10) NOT NULL,
    am_pm VARCHAR (4) NOT NULL
);
--SELECT * FROM daysAvailable
--ORDER BY daysAvailable_id ASC

DROP TABLE IF EXISTS jobs
CREATE TABLE IF NOT EXISTS jobs (
    jobs_id SERIAL PRIMARY KEY,
    clientId INTEGER NOT NULL,
    comments VARCHAR (100),
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    beginTime VARCHAR (10) NOT NULL,
    endTime VARCHAR (10) NOT NULL,
    am_pm VARCHAR (4) NOT NULL,
    animaltId INTEGER NOT NULL,
    requestStatus VARCHAR (3) NOT NULL,
    thirtyMinuteService VARCHAR (3) NOT NULL,
    sixtyMinuteService VARCHAR (3) NOT NULL,
    sixtyMinuteParkService VARCHAR (3) NOT NULL


);
--SELECT * FROM jobs
--ORDER BY jobs_id ASC

DROP TABLE IF EXISTS reviews
CREATE TABLE IF NOT EXISTS reviews (
    review_id SERIAL PRIMARY KEY,
    clientId INTEGER NOT NULL,
    caregiverId INTEGER NOT NULL,
    message VARCHAR (1000) NOT NULL,
    rating VARCHAR (100) NOT NULL
);
--SELECT * FROM reviews
--ORDER BY review_id ASC