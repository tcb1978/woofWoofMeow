-- Table: jobs

-- DROP TABLE jobs;

CREATE TABLE jobs
(
    jobs_id bigint NOT NULL DEFAULT nextval('jobs_jobs_id_seq'::regclass),
    "clientId" bigint NOT NULL,
    comments bit varying(1000),
    month integer NOT NULL,
    day integer NOT NULL,
    year integer NOT NULL,
    "beginTime" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "endTime" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    am_pm character varying(4) COLLATE pg_catalog."default" NOT NULL,
    "animalId" bigint NOT NULL,
    "requestStatus" character varying(3) COLLATE pg_catalog."default" NOT NULL,
    "thirtyMinuteService" character varying(3) COLLATE pg_catalog."default",
    "sixtyMinuteService" character varying(3) COLLATE pg_catalog."default",
    "sixtyMinuteParkService" character varying(3) COLLATE pg_catalog."default",
    CONSTRAINT jobs_pkey PRIMARY KEY (jobs_id),
    CONSTRAINT "animalId" FOREIGN KEY (jobs_id)
        REFERENCES animals ("animalId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "clientId" FOREIGN KEY (jobs_id)
        REFERENCES clients ("clientId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE jobs