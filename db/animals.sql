-- Table: public.animals

-- DROP TABLE public.animals;

CREATE TABLE public.animals
(
    "animalId" bigint NOT NULL DEFAULT nextval('"animals_animalId_seq"'::regclass),
    "ClientId" bigint NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    age character varying(100) COLLATE pg_catalog."default" NOT NULL,
    weight character varying(3) COLLATE pg_catalog."default" NOT NULL,
    sex character varying(7) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT animals_pkey PRIMARY KEY ("animalId"),
    CONSTRAINT "clientId" FOREIGN KEY ("animalId")
        REFERENCES public.clients ("clientId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.animals