import type { ReactNode } from "react";
import { BackButton } from "@/components/BackButton";
import { SolarSystemBackground } from "@/components/SolarSystemBackground";
import { cn } from "@/lib/utils";

export function PageHero({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-panel px-6 py-24 text-ink md:py-32", className)}>
      <SolarSystemBackground />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10"><BackButton /></div>
        {children}
      </div>
    </section>
  );
}