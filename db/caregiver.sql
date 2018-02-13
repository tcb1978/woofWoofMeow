-- Table: public.caregivers

-- DROP TABLE public.caregivers;

CREATE TABLE public.caregivers
(
    "caregiverId" bigint NOT NULL DEFAULT nextval('"caregivers_caregiverId_seq"'::regclass),
    "firstName" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "streetAddress" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    state character varying(50) COLLATE pg_catalog."default" NOT NULL,
    city character varying(50) COLLATE pg_catalog."default" NOT NULL,
    zip character varying(25) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(25) COLLATE pg_catalog."default" NOT NULL,
    avatar character varying(200) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(100) COLLATE pg_catalog."default" NOT NULL,
    latitude character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT caregivers_pkey PRIMARY KEY ("caregiverId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.caregivers