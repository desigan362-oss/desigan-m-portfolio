import { z } from "zod";

export const enquiryServices = [
  "Logo Design",
  "Freelance Design",
  "Branding",
  "Banner Design",
  "Poster Design",
  "UI Design",
  "Part-time Freelance Trainer",
  "Pencil Art",
] as const;

export const enquiryBudgets = [
  "Under ₹5,000",
  "₹5,000–₹15,000",
  "₹15,000–₹30,000",
  "₹30,000+",
  "Let’s discuss",
] as const;

export const enquiryTimelines = ["Within 1 week", "2–4 weeks", "1–2 months", "Flexible"] as const;

export const enquirySchema = z.object({
  clientName: z.string().trim().min(2, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Email is too long."),
  phone: z.string().trim().regex(/^\+?[0-9 ()-]{7,24}$/, "Enter a valid phone or WhatsApp number."),
  service: z.enum(enquiryServices, { required_error: "Select a service." }),
  budget: z.enum(enquiryBudgets, { required_error: "Select a budget range." }),
  timeline: z.enum(enquiryTimelines, { required_error: "Select a timeline." }),
  projectBrief: z.string().trim().min(20, "Please share at least 20 characters about your project.").max(3000, "Brief must be under 3,000 characters."),
  submissionToken: z.string().uuid("Please refresh and try again."),
  website: z.string().max(0, "Submission could not be accepted."),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;