-- Table: reviews

-- DROP TABLE reviews;

CREATE TABLE reviews
(
    review_id integer NOT NULL DEFAULT nextval('reviews_review_id_seq'::regclass),
    user_id integer NOT NULL,
    message character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    rating character varying(100) COLLATE pg_catalog."default" NOT NULL,
    job_id integer NOT NULL,
    day character varying(10) COLLATE pg_catalog."default" NOT NULL DEFAULT 1,
    month character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT 1,
    year character varying(4) COLLATE pg_catalog."default" NOT NULL DEFAULT 2018,
    CONSTRAINT reviews_pkey PRIMARY KEY (review_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE reviews