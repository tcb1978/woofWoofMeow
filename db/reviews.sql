-- Table: public.reviews

-- DROP TABLE public.reviews;

CREATE TABLE public.reviews
(
    review_id bigint NOT NULL DEFAULT nextval('reviews_review_id_seq'::regclass),
    "clientId" bigint NOT NULL,
    message character varying(1000) COLLATE pg_catalog."default",
    rating character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT "clientId" FOREIGN KEY (review_id)
        REFERENCES public.clients ("clientId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.reviews