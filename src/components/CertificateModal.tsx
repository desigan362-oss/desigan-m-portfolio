import { useEffect } from "react";

export function CertificateModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm md:p-10"
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-md bg-surface object-contain shadow-2xl"
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close certificate"
        className="absolute right-4 top-4 rounded-md bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink shadow-md transition hover:bg-accent-soft"
      >
        Close
      </button>
    </div>
  );
}
