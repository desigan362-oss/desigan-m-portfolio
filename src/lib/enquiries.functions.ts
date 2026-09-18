import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "@/lib/enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((input) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("client_enquiries").insert({
      client_name: data.clientName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      project_brief: data.projectBrief,
      submission_token: data.submissionToken,
      notification_note: "Saved securely. Email domain and WhatsApp Business connection are pending setup.",
    });

    if (error?.code === "23505") return { received: true };
    if (error) {
      console.error("Unable to save client enquiry:", error.message);
      throw new Error("Your enquiry could not be sent. Please try again or contact Desigan directly.");
    }

    return { received: true };
  });