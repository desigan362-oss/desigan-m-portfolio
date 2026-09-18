CREATE POLICY "Trusted service manages client enquiries"
ON public.client_enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);