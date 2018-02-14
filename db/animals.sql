-- Table: animal

-- DROP TABLE animal;

CREATE TABLE animal
(
    animal_id bigint NOT NULL DEFAULT nextval('animal_animal_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    breed character varying(50) COLLATE pg_catalog."default" NOT NULL,
    age character varying(20) COLLATE pg_catalog."default" NOT NULL,
    weight character varying(20) COLLATE pg_catalog."default" NOT NULL,
    sex character varying(10) COLLATE pg_catalog."default" NOT NULL,
    user_id bigint NOT NULL,
    CONSTRAINT animal_pkey PRIMARY KEY (animal_id),
    CONSTRAINT user_id FOREIGN KEY (animal_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE animal