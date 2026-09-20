import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "@/lib/enquiry-schema";
import { sendTemplateEmail } from "@/lib/email-templates/send-email";

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

    if (error && error.code !== "23505") {
      console.error("Unable to save client enquiry:", error.message);
      throw new Error("Your enquiry could not be sent. Please try again or contact Desigan directly.");
    }

    // Notify Desigan by email. A duplicate submission (23505) still returns
    // success without re-sending; email failures never block the client.
    if (!error) {
      try {
        await sendTemplateEmail("enquiry-notification", data.email, {
          templateData: {
            clientName: data.clientName,
            email: data.email,
            phone: data.phone,
            service: data.service,
            budget: data.budget,
            timeline: data.timeline,
            projectBrief: data.projectBrief,
          },
          idempotencyKey: `enquiry-notification-${data.submissionToken}`,
          replyTo: data.email,
        });
      } catch (sendError) {
        console.error("Enquiry saved but notification email failed:", sendError instanceof Error ? sendError.message : sendError);
      }
    }

    return { received: true };
  });