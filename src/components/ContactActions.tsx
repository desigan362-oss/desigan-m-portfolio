import { Download, Linkedin, Mail, Phone } from "lucide-react";
import resumeAsset from "@/assets/desigan-resume.pdf.asset.json";

const LINKEDIN_URL = "https://www.linkedin.com/in/desigan-m-162s7964";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  const base = compact
    ? "inline-flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-ink"
    : "group inline-flex min-h-11 items-center gap-3 rounded-md border border-ink/15 bg-card px-4 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg";
  return (
    <div className="flex flex-wrap gap-3">
      <a href="mailto:desigan362@gmail.com" className={base}><Mail className="size-4" /> Email</a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={base}><Linkedin className="size-4" /> LinkedIn</a>
      <a href="tel:+919384952112" className={base}><Phone className="size-4" /> Phone</a>
      <a href={resumeAsset.url} download="Desigan-M-Resume.pdf" className={base}><Download className="size-4" /> Résumé</a>
    </div>
  );
}
