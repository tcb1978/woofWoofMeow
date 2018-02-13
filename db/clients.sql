-- Table: clients

-- DROP TABLE clients;

CREATE TABLE clients
(
    "clientId" bigint NOT NULL DEFAULT nextval('"clients_clientId_seq"'::regclass),
    "firstName" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "streetAddress" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    state character varying(30) COLLATE pg_catalog."default" NOT NULL,
    city character varying(30) COLLATE pg_catalog."default" NOT NULL,
    zip character varying(25) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(25) COLLATE pg_catalog."default" NOT NULL,
    avatar character varying(25) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(100) COLLATE pg_catalog."default" NOT NULL,
    latitude character varying(100) COLLATE pg_catalog."default" NOT NULL,
    username character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT clients_pkey PRIMARY KEY ("clientId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE clients