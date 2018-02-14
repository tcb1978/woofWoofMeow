-- Table: caregiver_jobs

-- DROP TABLE caregiver_jobs;

CREATE TABLE caregiver_jobs
(
    caregiver_job_id bigint NOT NULL DEFAULT nextval('caregiver_jobs_caregiver_job_id_seq'::regclass),
    job_id bigint NOT NULL,
    user_id bigint NOT NULL,
    completed character varying(5) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT caregiver_jobs_pkey PRIMARY KEY (caregiver_job_id),
    CONSTRAINT job_id FOREIGN KEY (caregiver_job_id)
        REFERENCES jobs (job_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE caregiver_jobs