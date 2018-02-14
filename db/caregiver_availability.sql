-- Table: caregiver_availability

-- DROP TABLE caregiver_availability;

CREATE TABLE caregiver_availability
(
    caregiver_availability_id bigint NOT NULL DEFAULT nextval('caregiver_availability_caregiver_availability_id_seq'::regclass),
    user_id bigint NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    year integer NOT NULL,
    begin_time character varying(10) COLLATE pg_catalog."default" NOT NULL,
    end_time character varying(10) COLLATE pg_catalog."default" NOT NULL,
    am_pm character varying(5) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT caregiver_availability_pkey PRIMARY KEY (caregiver_availability_id),
    CONSTRAINT user_id FOREIGN KEY (caregiver_availability_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE caregiver_availability