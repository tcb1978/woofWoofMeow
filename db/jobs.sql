-- Table: jobs

-- DROP TABLE jobs;

CREATE TABLE jobs
(
    job_id bigint NOT NULL DEFAULT nextval('jobs_job_id_seq'::regclass),
    user_id bigint NOT NULL,
    comments character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    begin_time character varying(10) COLLATE pg_catalog."default" NOT NULL,
    end_time character varying(10) COLLATE pg_catalog."default" NOT NULL,
    animal_id bigint NOT NULL,
    am_pm character varying(4) COLLATE pg_catalog."default" NOT NULL,
    request_status character varying(5) COLLATE pg_catalog."default" NOT NULL,
    year integer NOT NULL,
    "    thirty_minute_service" character varying(10) COLLATE pg_catalog."default",
    sixty_minute_service character varying(10) COLLATE pg_catalog."default",
    sixty_minute_park_service character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT jobs_pkey PRIMARY KEY (job_id),
    CONSTRAINT animal_id FOREIGN KEY (job_id)
        REFERENCES animal (animal_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT user_id FOREIGN KEY (job_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE jobs