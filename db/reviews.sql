-- Table: reviews

-- DROP TABLE reviews;

CREATE TABLE reviews
(
    review_id bigint NOT NULL DEFAULT nextval('reviews_review_id_seq'::regclass),
    "clientId" bigint NOT NULL,
    "caregiverId" bigint NOT NULL,
    message character varying(1000) COLLATE pg_catalog."default",
    rating character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT reviews_pkey PRIMARY KEY (review_id),
    CONSTRAINT "caregiverId" FOREIGN KEY (review_id)
        REFERENCES caregivers ("caregiverId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "clientId" FOREIGN KEY (review_id)
        REFERENCES clients ("clientId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE reviews