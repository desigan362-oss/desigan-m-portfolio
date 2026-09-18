ALTER TABLE public.client_enquiries
ADD COLUMN submission_token uuid NOT NULL;

CREATE UNIQUE INDEX client_enquiries_submission_token_idx
ON public.client_enquiries (submission_token);