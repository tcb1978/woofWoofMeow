-- Table: public."daysAvailable"

-- DROP TABLE public."daysAvailable";

CREATE TABLE public."daysAvailable"
(
    "daysAvailable_id" bigint NOT NULL DEFAULT nextval('"daysAvailable_daysAvailable_id_seq"'::regclass),
    "caregiverId" bigint NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    "beginTime" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "endTime" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    am_pm character varying(4) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "daysAvailable_pkey" PRIMARY KEY ("daysAvailable_id"),
    CONSTRAINT "caregiverId" FOREIGN KEY ("daysAvailable_id")
        REFERENCES public.caregivers ("caregiverId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."daysAvailable"