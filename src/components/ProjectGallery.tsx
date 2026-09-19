import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/data/projects";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const viewableImages = images.filter((image) => image.mediaType !== "video");
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => setOpenIndex((index) => index === null ? index : (index + 1) % viewableImages.length), [viewableImages.length]);
  const prev = useCallback(() => setOpenIndex((index) => index === null ? index : (index - 1 + viewableImages.length) % viewableImages.length), [viewableImages.length]);
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); if (event.key === "ArrowRight") next(); if (event.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [openIndex, close, next, prev]);
  if (images.length === 0) return <p className="text-sm text-ink/50">Images for this project are being added.</p>;
  return <>
    <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
      {images.map((image, index) => image.mediaType === "video" ? (
        <figure key={`${image.src}-${index}`} className="break-inside-avoid overflow-hidden rounded-md bg-panel-soft outline outline-1 -outline-offset-1 outline-ink/10">
          <video src={image.src} controls preload="metadata" playsInline aria-label={image.alt} className="h-auto w-full" />
          <figcaption className="p-4 text-sm font-bold text-ink">{image.caption ?? image.alt}</figcaption>
        </figure>
      ) : (
        <button key={`${image.src}-${index}`} type="button" aria-label={`Open ${image.alt}`} onClick={() => setOpenIndex(viewableImages.findIndex((item) => item.src === image.src))} className="group block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-md bg-panel-soft outline outline-1 -outline-offset-1 outline-ink/10"><img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]" /></button>
      ))}
    </div>
    {openIndex !== null && <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-100 flex flex-col bg-ink/95 text-surface backdrop-blur-sm" onClick={close}>
      <div className="flex h-16 items-center justify-between px-6 text-xs font-bold uppercase text-surface/70"><span>{openIndex + 1} / {viewableImages.length}</span><button type="button" onClick={close} aria-label="Close viewer" className="grid size-10 place-items-center rounded-md border border-surface/20"><X className="size-5" /></button></div>
      <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-5 md:px-20" onClick={(event) => event.stopPropagation()}><img src={viewableImages[openIndex]?.src} alt={viewableImages[openIndex]?.alt ?? ""} className="max-h-full max-w-full object-contain" /></div>
      <div className="flex items-center justify-between gap-4 px-6 pb-8" onClick={(event) => event.stopPropagation()}><button type="button" onClick={prev} aria-label="Previous image" className="grid size-11 place-items-center rounded-md border border-surface/20"><ChevronLeft /></button><span className="truncate text-xs text-surface/60">{viewableImages[openIndex]?.caption ?? viewableImages[openIndex]?.alt}</span><button type="button" onClick={next} aria-label="Next image" className="grid size-11 place-items-center rounded-md border border-surface/20"><ChevronRight /></button></div>
    </div>}
  </>;
}
