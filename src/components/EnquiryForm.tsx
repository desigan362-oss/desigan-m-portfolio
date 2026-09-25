import { useMemo, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { enquiryBudgets, enquirySchema, enquiryServices, enquiryTimelines, type EnquiryInput } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiries.functions";

type FormValues = Omit<EnquiryInput, "submissionToken" | "website"> & { website: string };
type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  clientName: "",
  email: "",
  phone: "",
  service: "Logo Design",
  budget: "Let’s discuss",
  timeline: "Flexible",
  projectBrief: "",
  website: "",
};

export function EnquiryForm() {
  const sendEnquiry = useServerFn(submitEnquiry);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const submissionToken = useMemo(() => crypto.randomUUID(), []);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending" || status === "success") return;
    const parsed = enquirySchema.safeParse({ ...values, submissionToken });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormValues | undefined;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      const firstIssue = parsed.error.issues[0];
      setMessage(firstIssue?.message ?? "Please review the highlighted fields.");
      setStatus("error");
      const firstField = firstIssue?.path[0];
      if (typeof firstField === "string") {
        const fieldIds: Partial<Record<keyof FormValues, string>> = {
          clientName: "client-name",
          email: "client-email",
          phone: "client-phone",
          projectBrief: "project-brief",
        };
        const fieldId = fieldIds[firstField as keyof FormValues];
        if (fieldId) document.getElementById(fieldId)?.focus();
      }
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      await sendEnquiry({ data: parsed.data });
      setStatus("success");
      setMessage("Your project brief has been received. Desigan will contact you using the details provided.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent. Please try again.");
    }
  };

  const fieldClass = "h-11 border-ink/15 bg-surface shadow-none focus-visible:ring-accent";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-md border border-ink/10 bg-card p-6 shadow-xl md:p-9">
      <div>
        <p className="text-xs font-bold uppercase text-accent">Project enquiry</p>
        <h2 className="mt-3 font-display text-3xl font-bold">Tell me what you’re planning.</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">Share the essentials and I’ll respond with the right next step.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="client-name" label="Name" error={errors.clientName}><Input id="client-name" value={values.clientName} onChange={(event) => update("clientName", event.target.value)} maxLength={100} autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.clientName)} className={fieldClass} /></Field>
        <Field id="client-email" label="Email" error={errors.email}><Input id="client-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} maxLength={255} autoComplete="email" placeholder="you@company.com" aria-invalid={Boolean(errors.email)} className={fieldClass} /></Field>
      </div>

      <Field id="client-phone" label="Phone / WhatsApp" error={errors.phone}><Input id="client-phone" type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} maxLength={24} autoComplete="tel" placeholder="+91 98765 43210" aria-invalid={Boolean(errors.phone)} className={fieldClass} /></Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <SelectField id="enquiry-service" label="Service" value={values.service} options={enquiryServices} onChange={(value) => update("service", value)} />
        <SelectField id="enquiry-budget" label="Budget" value={values.budget} options={enquiryBudgets} onChange={(value) => update("budget", value)} />
        <SelectField id="enquiry-timeline" label="Timeline" value={values.timeline} options={enquiryTimelines} onChange={(value) => update("timeline", value)} />
      </div>

      <Field id="project-brief" label="Project brief" error={errors.projectBrief} detail={`${values.projectBrief.length}/3000`}>
        <Textarea id="project-brief" value={values.projectBrief} onChange={(event) => update("projectBrief", event.target.value)} maxLength={3000} rows={7} placeholder="What do you need, who is it for, and what should the final work achieve?" aria-invalid={Boolean(errors.projectBrief)} className="min-h-40 resize-y border-ink/15 bg-surface shadow-none focus-visible:ring-accent" />
      </Field>

      {message && <Alert variant={status === "error" ? "destructive" : "default"} className={status === "success" ? "border-accent bg-accent-soft" : undefined}>{status === "success" && <CheckCircle2 className="size-4" />}<AlertTitle>{status === "success" ? "Enquiry received" : "Please check your enquiry"}</AlertTitle><AlertDescription>{message}</AlertDescription></Alert>}

      <Button type="submit" size="lg" disabled={status === "sending" || status === "success"} className="h-12 w-full bg-accent font-bold text-accent-foreground shadow-[0_8px_24px_var(--accent-shadow)] hover:bg-accent-strong">
        {status === "sending" ? <><LoaderCircle className="animate-spin" /> Sending enquiry</> : status === "success" ? <><CheckCircle2 /> Enquiry received</> : <><Send /> Send project enquiry</>}
      </Button>
      <p className="text-center text-xs leading-relaxed text-ink/45">Your contact details and project brief are kept private.</p>
    </form>
  );
}

function Field({ id, label, error, detail, children }: { id: string; label: string; error?: string | undefined; detail?: string | undefined; children: React.ReactNode }) {
  return <div className="space-y-2"><div className="flex items-center justify-between gap-3"><Label htmlFor={id}>{label}</Label>{detail && <span className="text-xs text-ink/40">{detail}</span>}</div>{children}{error && <p className="text-xs font-medium text-destructive">{error}</p>}</div>;
}

function SelectField({ id, label, value, options, onChange }: { id: string; label: string; value: string; options: readonly string[]; onChange: (value: string) => void }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}</Label><Select value={value} onValueChange={onChange}><SelectTrigger id={id} className="h-11 border-ink/15 bg-surface shadow-none focus:ring-accent"><SelectValue /></SelectTrigger><SelectContent>{options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></div>;
}