-- Table: animals

-- DROP TABLE animals;

CREATE TABLE animals
(
    animal_id integer NOT NULL DEFAULT nextval('animals_animal_id_seq'::regclass),
    animal_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    breed character varying(100) COLLATE pg_catalog."default" NOT NULL,
    age character varying(100) COLLATE pg_catalog."default" NOT NULL,
    weight character varying(7) COLLATE pg_catalog."default" NOT NULL,
    sex character varying(7) COLLATE pg_catalog."default" NOT NULL,
    user_id integer NOT NULL,
    animal_avatar character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT animals_pkey PRIMARY KEY (animal_id),
    CONSTRAINT animals_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE animals