CREATE TABLE public.client_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL CHECK (char_length(client_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 24),
  service text NOT NULL CHECK (service IN ('Logo Design', 'Freelance Design', 'Branding', 'Banner Design', 'Poster Design', 'UI Design', 'Part-time Freelance Trainer', 'Pencil Art')),
  budget text NOT NULL CHECK (budget IN ('Under ₹5,000', '₹5,000–₹15,000', '₹15,000–₹30,000', '₹30,000+', 'Let’s discuss')),
  timeline text NOT NULL CHECK (timeline IN ('Within 1 week', '2–4 weeks', '1–2 months', 'Flexible')),
  project_brief text NOT NULL CHECK (char_length(project_brief) BETWEEN 20 AND 3000),
  email_status text NOT NULL DEFAULT 'pending_setup' CHECK (email_status IN ('pending_setup', 'sent', 'failed')),
  whatsapp_status text NOT NULL DEFAULT 'pending_setup' CHECK (whatsapp_status IN ('pending_setup', 'accepted', 'sent', 'delivered', 'read', 'failed')),
  notification_note text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.client_enquiries TO service_role;

ALTER TABLE public.client_enquiries ENABLE ROW LEVEL SECURITY;

CREATE INDEX client_enquiries_created_at_idx ON public.client_enquiries (created_at DESC);