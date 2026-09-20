import * as React from "react";
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface EnquiryNotificationProps {
  clientName?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  projectBrief?: string;
}

const EnquiryNotification = ({ clientName, email, phone, service, budget, timeline, projectBrief }: EnquiryNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New project enquiry — ${service ?? "Design service"} from ${clientName ?? "a client"}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>Desigan M · Portfolio</Text>
        <Heading style={heading}>New project enquiry</Heading>
        <Text style={intro}>A client sent a project brief through your portfolio contact form.</Text>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{clientName ?? "—"}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email ?? "—"}</Text>
          <Text style={label}>Phone / WhatsApp</Text>
          <Text style={value}>{phone ?? "—"}</Text>
          <Hr style={divider} />
          <Text style={label}>Service</Text>
          <Text style={value}>{service ?? "—"}</Text>
          <Text style={label}>Budget</Text>
          <Text style={value}>{budget ?? "—"}</Text>
          <Text style={label}>Timeline</Text>
          <Text style={value}>{timeline ?? "—"}</Text>
          <Hr style={divider} />
          <Text style={label}>Project brief</Text>
          <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{projectBrief ?? "—"}</Text>
        </Section>

        <Text style={footer}>Reply directly to this email to respond to the client.</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: EnquiryNotification,
  subject: (data: Record<string, any>) => `New enquiry: ${data.service ?? "Design project"} — ${data.clientName ?? "Client"}`,
  displayName: "Client enquiry notification",
  to: "desigan362@gmail.com",
  previewData: {
    clientName: "Jane Kumar",
    email: "jane@example.com",
    phone: "+91 98765 43210",
    service: "Logo Design",
    budget: "₹5,000–₹15,000",
    timeline: "2–4 weeks",
    projectBrief: "I need a fresh logo for my bakery brand with packaging-ready variations.",
  },
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" };
const container = { padding: "24px 28px", maxWidth: "560px" };
const eyebrow = { color: "#7c5cbf", fontSize: "11px", fontWeight: "bold" as const, letterSpacing: "2px", textTransform: "uppercase" as const, margin: "0 0 8px" };
const heading = { color: "#1a1425", fontSize: "24px", margin: "0 0 8px" };
const intro = { color: "#5a5466", fontSize: "14px", lineHeight: "22px", margin: "0 0 20px" };
const card = { backgroundColor: "#f6f3fb", borderRadius: "8px", padding: "18px 20px" };
const label = { color: "#7c5cbf", fontSize: "11px", fontWeight: "bold" as const, textTransform: "uppercase" as const, letterSpacing: "1px", margin: "12px 0 2px" };
const value = { color: "#1a1425", fontSize: "14px", lineHeight: "20px", margin: "0" };
const divider = { borderColor: "#e2d9f2", margin: "16px 0 4px" };
const footer = { color: "#8a8296", fontSize: "12px", lineHeight: "18px", marginTop: "20px" };
