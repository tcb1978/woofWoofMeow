-- Table: users

-- DROP TABLE users;

CREATE TABLE users
(
    user_id integer NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    first_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    street_address character varying(100) COLLATE pg_catalog."default" NOT NULL,
    state character varying(50) COLLATE pg_catalog."default" NOT NULL,
    city character varying(50) COLLATE pg_catalog."default" NOT NULL,
    zip character varying(25) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(25) COLLATE pg_catalog."default" NOT NULL,
    avatar character varying(200) COLLATE pg_catalog."default" NOT NULL,
    title character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(100) COLLATE pg_catalog."default",
    latitude character varying(100) COLLATE pg_catalog."default",
    about_message character varying(1000) COLLATE pg_catalog."default",
    proximity character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE users