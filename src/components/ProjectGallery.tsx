import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/data/projects";

type Props = {
  images: GalleryImage[];
};

export function ProjectGallery({ images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  if (images.length === 0) {
    return (
      <p className="text-sm text-ink/50">Images for this project are being added.</p>
    );
  }

  return (
    <>
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
        {images.map((image, i) => (
          <button
            key={`${image.src}-${i}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-[12px] outline outline-1 -outline-offset-1 outline-ink/5 bg-ink/[0.03] cursor-zoom-in"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-100 flex flex-col bg-ink/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          <div className="flex items-center justify-between px-6 h-16 text-surface/70 text-xs font-medium uppercase tracking-widest">
            <span>
              {openIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="px-3 py-1 rounded-full ring-1 ring-surface/20 hover:bg-surface/10 transition-colors"
            >
              Close
            </button>
          </div>

          <div
            className="flex-1 min-h-0 flex items-center justify-center px-4 pb-6 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div
            className="flex items-center justify-between gap-4 px-6 pb-8 text-surface/70"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="px-4 py-2 text-sm rounded-full ring-1 ring-surface/20 hover:bg-surface/10 transition-colors"
            >
              Previous
            </button>
            <span className="truncate text-xs uppercase tracking-widest">
              {images[openIndex].caption ?? images[openIndex].alt}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="px-4 py-2 text-sm rounded-full ring-1 ring-surface/20 hover:bg-surface/10 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
