import untik from "@/assets/untik-internship-certificate.png.asset.json";
import myme from "@/assets/myme-techies-internship-certificate.png.asset.json";
import mymeExp from "@/assets/myme-techies-experience-certificate.png.asset.json";
import leastAction from "@/assets/least-action-internship-certificate.png.asset.json";
import gdTrainer from "@/assets/graphic-design-trainer-certificate.png.asset.json";
import uiuxTrainer from "@/assets/uiux-trainer-certificate.png.asset.json";
import uiuxGraphic from "@/assets/uiux-graphic-trainer-certificate.png.asset.json";

export type Certificate = {
  slug: string;
  title: string;
  subtitle?: string;
  issuer: string;
  period: string;
  type: string;
  description: string;
  url: string;
  alt: string;
  website?: string;
};

export const certificates: Certificate[] = [
  { slug: "untik-uiux-internship", title: "UI/UX Design Internship", issuer: "Untik", period: "10 Jul — 11 Aug 2025", type: "Internship", description: "Practised user flows, wireframing and interface design through a focused product-design internship.", url: untik.url, alt: "Untik Certificate of Internship — UI/UX Design, Desigan M" },
  { slug: "myme-techies-graphic-design-internship", title: "Graphic Designing Internship", issuer: "Myme Techies", period: "Sep — Nov 2025", type: "Internship", description: "Created visual communication and campaign work for real client requirements.", url: myme.url, alt: "Myme Techies Certificate of Internship — Graphic Design, Desigan M", website: "https://www.mymetechies.in/" },
  { slug: "least-action-uiux-internship", title: "UI/UX Design Internship", issuer: "Least Action", period: "10 Dec 2025 — Mar 2026", type: "Internship", description: "Developed user-centred screens and prototypes while strengthening UX process and presentation.", url: leastAction.url, alt: "Least Action Company Certificate of Internship — UI/UX Development, Desigan M", website: "https://www.leastactioncompany.com/" },
  { slug: "myme-techies-experience", title: "Experience Certificate", subtitle: "Graphic Designer · UI/UX Designer · Trainer", issuer: "Myme Techies", period: "Feb — Sep 2026", type: "Professional experience", description: "Eight months of professional experience across graphic design, UI/UX design and training, including client projects and mentoring 35+ students.", url: mymeExp.url, alt: "Myme Techies Certificate of Experience — Graphic Designer and Trainer, Desigan M", website: "https://www.mymetechies.in/" },
  { slug: "graphic-design-trainer", title: "Graphic Designing Trainer Certificate", issuer: "Myme Techies", period: "Jun 2026", type: "Trainer certification", description: "Recognition of practical graphic-design teaching and workshop facilitation.", url: gdTrainer.url, alt: "Myme Techies Certificate of Training Excellence — Graphic Design Trainer, Desigan M", website: "https://www.mymetechies.in/" },
  { slug: "uiux-design-trainer", title: "UI/UX Designing Trainer Certificate", issuer: "Myme Techies", period: "Jun 2026", type: "Trainer certification", description: "Recognition of UI/UX curriculum delivery, mentorship and practical project guidance.", url: uiuxTrainer.url, alt: "Myme Techies Certificate of Training Excellence — UI/UX Design Trainer, Desigan M", website: "https://www.mymetechies.in/" },
  { slug: "online-uiux-graphic-trainer", title: "UI/UX & Graphic Design Trainer", subtitle: "Online training", issuer: "Myme Techies", period: "Jul 2026", type: "Trainer certification · Online", description: "Trained students online in UI/UX design and graphic design, covering design fundamentals, tools and hands-on project guidance.", url: uiuxGraphic.url, alt: "Myme Techies Certificate of Training Excellence — UI/UX & Graphic Design Trainer, Desigan M", website: "https://www.mymetechies.in/" },
];

export const certSlugByUrl = (url: string) => certificates.find((c) => c.url === url)?.slug;
export const getCertificate = (slug: string) => certificates.find((c) => c.slug === slug);
