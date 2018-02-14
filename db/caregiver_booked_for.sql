-- Table: caregiver_booked_for

-- DROP TABLE caregiver_booked_for;

CREATE TABLE caregiver_booked_for
(
    days_booked_id bigint NOT NULL DEFAULT nextval('caregiver_booked_for_days_booked_id_seq'::regclass),
    user_id bigint NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    year integer NOT NULL,
    begin_time character varying(10) COLLATE pg_catalog."default" NOT NULL,
    end_time character varying COLLATE pg_catalog."default" NOT NULL,
    am_pm character varying(5) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT caregiver_booked_for_pkey PRIMARY KEY (days_booked_id),
    CONSTRAINT user_id FOREIGN KEY (days_booked_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE caregiver_booked_for