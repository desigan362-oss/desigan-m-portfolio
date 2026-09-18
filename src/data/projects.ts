import beezHero from "@/assets/beez-hero.jpg";
import annaiMiraHero from "@/assets/annai-mira-hero.jpg";
import primePublicSchoolHero from "@/assets/prime-public-school-hero.jpg";
import jayanthiBakeryHero from "@/assets/jayanthi-bakery-hero.jpg";
import mapisClinicHero from "@/assets/mapis-clinic-hero.jpg";
import alMubeenHero from "@/assets/almubeen-hero.jpg";
import bestSchoolHero from "@/assets/best-school-hero.jpg";
import ottHero from "@/assets/ott-hero.jpg";
import bakeryHero from "@/assets/bakery-hero.jpg";
import uxLearnHero from "@/assets/uxlearn-hero.jpg";

/**
 * HOW TO ADD A NEW CLIENT OR NEW IMAGES
 * -------------------------------------
 * 1. Drop image files into src/assets/ and import them at the top of this file
 *    (or paste a full https:// image URL straight into galleryImages).
 * 2. Add a new object to the `projects` array below, or append to an existing
 *    project's `galleryImages`.
 * Everything else — the work page, filters, counts, project page and gallery —
 * updates automatically. No layout changes needed.
 */

export const CATEGORIES = [
  "All",
  "UI/UX",
  "Branding",
  "Graphic Design",
  "Social Media",
  "Marketing",
  "Posters",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

export type GalleryImage = {
  src: string;
  alt: string;
  /** Optional caption shown in the lightbox */
  caption?: string;
};

export type Project = {
  id: string;
  clientName: string;
  title: string;
  category: Category[];
  description: string;
  overview: string;
  role: string;
  services: string[];
  heroImage: string;
  galleryImages: GalleryImage[];
  featured: boolean;
  year: string;
  /** Optional external link, e.g. a Figma prototype */
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    id: "beez",
    clientName: "Beez",
    title: "Brand identity and product design system",
    category: ["Branding", "Graphic Design", "Social Media", "Marketing"],
    description:
      "A complete visual identity — packaging, product design, social and campaign work for a growing consumer brand.",
    overview:
      "Beez needed an identity that felt premium but approachable, and a design system flexible enough to run across packaging, retail and everyday social content.",
    role: "Lead Visual & Brand Designer",
    services: ["Brand identity", "Product design", "Social media", "Marketing campaigns"],
    heroImage: beezHero,
    galleryImages: [
      { src: beezHero, alt: "Beez packaging and identity system", caption: "Packaging & identity" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "annai-mira-world-school",
    clientName: "Annai Mira World School",
    title: "Admission campaigns and school communications",
    category: ["Graphic Design", "Social Media", "Marketing", "Posters"],
    description:
      "A bright, welcoming visual system for admissions, educational communication and the school's social presence.",
    overview:
      "A cohesive campaign system designed to connect with parents and students across admission posters, digital announcements and everyday school communication.",
    role: "Visual Designer",
    services: ["Admission campaigns", "Educational posters", "Social media design"],
    heroImage: annaiMiraHero,
    galleryImages: [
      { src: annaiMiraHero, alt: "Annai Mira World School admission campaign", caption: "Admission campaign" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "prime-public-school",
    clientName: "Prime Public School",
    title: "CBSE circular and communication system",
    category: ["Graphic Design", "Marketing"],
    description:
      "A clear, credible CBSE circular system for school notices, parent updates and academic communication.",
    overview:
      "Prime Public School needed a consistent communication language that made official circulars easy to recognise and read across print and digital formats.",
    role: "Graphic Designer",
    services: ["CBSE circular design", "School communications", "Layout system"],
    heroImage: primePublicSchoolHero,
    galleryImages: [
      { src: primePublicSchoolHero, alt: "Prime Public School CBSE circular designs", caption: "CBSE circular system" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "jayanthi-bakery",
    clientName: "Jayanthi Bakery",
    title: "Bakery identity and campaign design",
    category: ["Branding", "Graphic Design", "Social Media", "Marketing"],
    description:
      "A warm bakery identity carried across packaging, menus, in-store touchpoints and social campaigns.",
    overview:
      "A distinctive visual system that brings Jayanthi Bakery's craft and local character together across packaging, retail and digital communication.",
    role: "Brand & Visual Designer",
    services: ["Brand identity", "Packaging", "Menu design", "Social media design"],
    heroImage: jayanthiBakeryHero,
    galleryImages: [
      { src: jayanthiBakeryHero, alt: "Jayanthi Bakery brand and packaging designs", caption: "Brand and packaging system" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "mapis-clinic",
    clientName: "MAPIS Hair, Skin and Beauty Clinic",
    title: "Clinic identity and beauty campaigns",
    category: ["Branding", "Graphic Design", "Social Media", "Marketing"],
    description:
      "A polished identity and campaign system balancing clinical trust with a contemporary beauty aesthetic.",
    overview:
      "MAPIS needed a confident, refined visual presence spanning clinic materials, treatment communication and social media campaigns.",
    role: "Brand & Visual Designer",
    services: ["Brand identity", "Campaign design", "Clinic collateral", "Social media design"],
    heroImage: mapisClinicHero,
    galleryImages: [
      { src: mapisClinicHero, alt: "MAPIS Hair, Skin and Beauty Clinic identity", caption: "Clinic identity and campaign system" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "al-mubeen-school",
    clientName: "AL Mubeen School",
    title: "Admission and festival campaign design",
    category: ["Graphic Design", "Social Media", "Posters", "Marketing"],
    description:
      "Admission creatives, festival campaigns and social media designs built on a calm, traditional visual language.",
    overview:
      "A campaign system that carries the school's cultural identity across admission drives, festival greetings and day-to-day social posts.",
    role: "Visual Designer",
    services: ["Admission campaigns", "Festival campaigns", "Social media design"],
    heroImage: alMubeenHero,
    galleryImages: [
      { src: alMubeenHero, alt: "AL Mubeen School campaign creatives", caption: "Festival & admission creatives" },
    ],
    featured: true,
    year: "2023",
  },
  {
    id: "best-school",
    clientName: "Best School",
    title: "Admission drive and marketing creatives",
    category: ["Graphic Design", "Marketing", "Social Media", "Posters"],
    description:
      "Marketing creatives across print and digital for a school admission drive, held together by one clean layout system.",
    overview:
      "One flexible layout kit adapted across banners, social posts, print and outdoor, so every touchpoint of the admission drive looked like the same school.",
    role: "Visual Designer",
    services: ["Admission campaigns", "Marketing creatives", "Print & outdoor"],
    heroImage: bestSchoolHero,
    galleryImages: [
      { src: bestSchoolHero, alt: "Best School admission marketing creatives", caption: "Campaign kit" },
    ],
    featured: true,
    year: "2023",
  },
  {
    id: "ott-streaming-platform",
    clientName: "OTT Streaming Platform",
    title: "Content discovery for a video streaming app",
    category: ["UI/UX"],
    description:
      "Wireframes and high-fidelity prototypes for a streaming application, focused on content discovery and navigation.",
    overview:
      "Designed wireframes and high-fidelity prototypes for a video streaming application, focused on content discovery and navigation.",
    role: "UI/UX Designer",
    services: ["User flows", "Wireframing", "UI design", "Prototyping"],
    heroImage: ottHero,
    galleryImages: [{ src: ottHero, alt: "OTT streaming platform interface", caption: "Browse & detail screens" }],
    featured: true,
    year: "2024",
    externalUrl:
      "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2137-1764&t=JmPVHss2e2Xd5stF-1",
  },
  {
    id: "bakery-app",
    clientName: "Bakery App",
    title: "End-to-end ordering experience",
    category: ["UI/UX"],
    description:
      "An end-to-end ordering app experience, from wireframes through to a high-fidelity prototype.",
    overview:
      "Designed an end-to-end ordering app experience, from wireframes through high-fidelity prototype.",
    role: "UI/UX Designer",
    services: ["User flows", "Wireframing", "UI design", "Prototyping"],
    heroImage: bakeryHero,
    galleryImages: [{ src: bakeryHero, alt: "Bakery ordering app screens", caption: "Ordering flow" }],
    featured: true,
    year: "2024",
    externalUrl:
      "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2082-2&t=JmPVHss2e2Xd5stF-1",
  },
  {
    id: "ux-learning-platform",
    clientName: "UX Learning Platform",
    title: "User experience awareness and learning platform",
    category: ["UI/UX"],
    description:
      "User flows and interface screens for a platform promoting UX literacy and design education.",
    overview:
      "Designed user flows and interface screens for a platform promoting UX literacy and design education.",
    role: "UI/UX Designer",
    services: ["Research", "User flows", "UI design", "Design system"],
    heroImage: uxLearnHero,
    galleryImages: [{ src: uxLearnHero, alt: "UX learning platform dashboard", caption: "Learner dashboard" }],
    featured: true,
    year: "2024",
    externalUrl:
      "https://www.figma.com/design/APDIuatQIVCAaGPYEnv1qg/clg-final-yr-project?node-id=7613-723&t=x6XlsE63zjcLyG9g-1",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);

export const featuredProjects = () => projects.filter((p) => p.featured).slice(0, 9);

export const filterProjects = (category: string) =>
  category === "All" ? projects : projects.filter((p) => p.category.includes(category as Category));
