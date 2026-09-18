import { Download, Linkedin, Mail, Phone } from "lucide-react";
import resumeAsset from "@/assets/desigan-resume.pdf.asset.json";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/desigan-m-162s7964";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  const base = compact
    ? "inline-flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-ink"
    : cn(buttonVariants({ variant: "outline" }), "group min-h-11 border-ink/15 bg-card px-4 py-3 text-sm text-ink shadow-none transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-ink hover:shadow-lg");
  return (
    <div className="flex flex-wrap gap-3">
      <a href="mailto:desigan362@gmail.com" className={base}><Mail className="size-4" /> Send an email</a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={base}><Linkedin className="size-4" /> View LinkedIn</a>
      <a href="tel:+919384952112" className={base}><Phone className="size-4" /> Call me</a>
      <a href={resumeAsset.url} download="Desigan-M-Resume.pdf" className={base}><Download className="size-4" /> Download résumé</a>
    </div>
  );
}
