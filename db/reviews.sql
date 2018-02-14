-- Table: reviews

-- DROP TABLE reviews;

CREATE TABLE reviews
(
    review_id bigint NOT NULL DEFAULT nextval('reviews_review_id_seq'::regclass),
    user_id bigint NOT NULL,
    message character varying(1000) COLLATE pg_catalog."default",
    rating character varying(10) COLLATE pg_catalog."default",
    job_id bigint NOT NULL,
    CONSTRAINT user_id FOREIGN KEY (review_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE reviews