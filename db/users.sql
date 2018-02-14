-- Table: users

-- DROP TABLE users;

CREATE TABLE users
(
    user_id bigint NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    first_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    street_address character varying(200) COLLATE pg_catalog."default" NOT NULL,
    state character varying(50) COLLATE pg_catalog."default" NOT NULL,
    city character varying(50) COLLATE pg_catalog."default" NOT NULL,
    zip character varying(25) COLLATE pg_catalog."default" NOT NULL,
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(25) COLLATE pg_catalog."default" NOT NULL,
    avatar character varying(200) COLLATE pg_catalog."default",
    title character varying(50) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(20) COLLATE pg_catalog."default" NOT NULL,
    latitude character varying(20) COLLATE pg_catalog."default" NOT NULL,
    password character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE users