import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton({ to = "/", label = "Back home" }: { to?: "/"; label?: string }) {
  return (
    <Button asChild variant="outline" className="group h-10 border-ink/15 bg-surface/70 px-4 text-ink shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-accent hover:bg-accent-soft hover:text-ink hover:shadow-md">
      <Link to={to} aria-label={label}>
        <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        {label}
      </Link>
    </Button>
  );
}