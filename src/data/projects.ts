import beezHero from "@/assets/beez-haircare-hero.jpg";
import annaiMiraHero from "@/assets/annai-mira-hero.jpg";
import primePublicSchoolHero from "@/assets/prime-public-school-hero.jpg";
import jayanthiBakeryHero from "@/assets/jayanthi-bakery-hero.jpg";
import mapisClinicHero from "@/assets/mapis-clinic-hero.jpg";
import leeDigitalArtsHero from "@/assets/lee-digital-arts-hero.jpg";
import karTowersHero from "@/assets/kar-towers-hero.jpg";
import ottHero from "@/assets/ott-hero.jpg";
import bakeryHero from "@/assets/bakery-hero.jpg";
import uxLearnHero from "@/assets/uxlearn-hero.jpg";

export const CATEGORIES = ["All", "Graphic Design", "UI/UX", "Branding", "Packaging", "Social Media", "Marketing", "Posters"] as const;
export type Category = Exclude<(typeof CATEGORIES)[number], "All">;
export type GalleryImage = { src: string; alt: string; caption?: string };
export type Project = {
  id: string; clientName: string; title: string; category: Category[]; description: string;
  overview: string; role: string; services: string[]; heroImage: string;
  galleryImages: GalleryImage[]; featured: boolean; year: string; externalUrl?: string;
};

export const projects: Project[] = [
  {
    id: "beez-haircare", clientName: "Beez", title: "Hair oil & serum packaging design",
    category: ["Graphic Design", "Branding", "Packaging", "Marketing"],
    description: "A premium packaging system for Beez hair oil and serum, balancing botanical care with a modern shelf presence.",
    overview: "Beez is a hair-care brand, not a honey brand. The identity uses botanical cues, premium dark packaging and a flexible visual language across oil, serum and campaign touchpoints.",
    role: "Brand & Packaging Designer", services: ["Packaging design", "Visual identity", "Product presentation", "Campaign assets"],
    heroImage: beezHero, galleryImages: [{ src: beezHero, alt: "Beez hair oil and serum packaging", caption: "Hair oil & serum packaging system" }], featured: true, year: "2026",
  },
  {
    id: "jayanthi-bakery", clientName: "Jayanthi Bakery", title: "Bakery packaging & identity system",
    category: ["Graphic Design", "Branding", "Packaging", "Social Media"],
    description: "A warm, locally rooted bakery identity across pastry boxes, bread wraps, carry bags and campaign pieces.",
    overview: "A full visual refresh created to make Jayanthi Bakery feel established, distinctive and consistent across product packaging, retail and digital communication.",
    role: "Brand & Visual Designer", services: ["Brand redesign", "Package design", "Retail collateral", "Social media"],
    heroImage: jayanthiBakeryHero, galleryImages: [{ src: jayanthiBakeryHero, alt: "Jayanthi Bakery packaging collection", caption: "Packaging and visual identity" }], featured: true, year: "2026",
  },
  {
    id: "lee-digital-arts", clientName: "Lee Digital Arts", title: "Creative studio visual identity",
    category: ["Graphic Design", "Branding", "Social Media"],
    description: "A bold visual identity and communication system for a contemporary digital arts studio.",
    overview: "A high-energy identity designed to move confidently across posters, digital experiences, stationery and social communication.",
    role: "Visual & Brand Designer", services: ["Visual identity", "Poster system", "Digital collateral", "Social templates"],
    heroImage: leeDigitalArtsHero, galleryImages: [{ src: leeDigitalArtsHero, alt: "Lee Digital Arts identity presentation", caption: "Creative studio identity" }], featured: true, year: "2026",
  },
  {
    id: "kar-towers", clientName: "KAR Towers", title: "Property brand & campaign system",
    category: ["Graphic Design", "Branding", "Marketing"],
    description: "A premium property identity connecting architecture, print collateral, signage and campaign communication.",
    overview: "KAR Towers required an identity with architectural confidence and clarity across residential marketing, wayfinding and print applications.",
    role: "Brand & Graphic Designer", services: ["Brand identity", "Property brochure", "Campaign design", "Wayfinding"],
    heroImage: karTowersHero, galleryImages: [{ src: karTowersHero, alt: "KAR Towers property branding", caption: "Property branding system" }], featured: true, year: "2026",
  },
  {
    id: "annai-mira-world-school", clientName: "Annai Mira World School", title: "Admission campaigns & school communications",
    category: ["Graphic Design", "Social Media", "Marketing", "Posters"],
    description: "A bright communication system for admissions, educational announcements and the school’s social presence.",
    overview: "A cohesive campaign language designed to connect with parents and students across admissions and everyday school communication.",
    role: "Visual Designer", services: ["Admission campaigns", "Educational posters", "Social media design"], heroImage: annaiMiraHero,
    galleryImages: [{ src: annaiMiraHero, alt: "Annai Mira World School admission campaign", caption: "Admission campaign" }], featured: true, year: "2025",
  },
  {
    id: "prime-public-school", clientName: "Prime Public School", title: "CBSE circular & communication system",
    category: ["Graphic Design", "Marketing"], description: "A clear and credible CBSE circular system for notices, parent updates and academic communication.",
    overview: "A consistent layout language that makes official circulars easy to recognise and read across print and digital formats.", role: "Graphic Designer",
    services: ["CBSE circular design", "School communication", "Layout system"], heroImage: primePublicSchoolHero,
    galleryImages: [{ src: primePublicSchoolHero, alt: "Prime Public School CBSE circular designs", caption: "CBSE circular system" }], featured: false, year: "2025",
  },
  {
    id: "mapis-clinic", clientName: "MAPIS Hair, Skin & Beauty Clinic", title: "Clinic identity & beauty campaigns",
    category: ["Graphic Design", "Branding", "Social Media", "Marketing"], description: "A polished campaign system balancing clinical trust with a contemporary beauty aesthetic.",
    overview: "A confident visual presence spanning treatment communication, clinic materials and social campaigns.", role: "Brand & Visual Designer",
    services: ["Brand identity", "Campaign design", "Clinic collateral", "Social media"], heroImage: mapisClinicHero,
    galleryImages: [{ src: mapisClinicHero, alt: "MAPIS clinic campaign identity", caption: "Clinic campaign system" }], featured: false, year: "2025",
  },
  {
    id: "ux-learning-platform", clientName: "UX Learning Platform", title: "AI-assisted UX awareness & learning platform",
    category: ["UI/UX"], description: "User flows and interface screens for an AI-assisted platform promoting UX literacy and design education.",
    overview: "Designed the end-to-end learning experience to make UX principles approachable through structured lessons, practical guidance and AI-assisted support.", role: "UI/UX Designer",
    services: ["UX research", "User flows", "UI design", "Design system"], heroImage: uxLearnHero,
    galleryImages: [{ src: uxLearnHero, alt: "AI-assisted UX learning platform", caption: "Learner dashboard" }], featured: true, year: "2026",
    externalUrl: "https://www.figma.com/design/APDIuatQIVCAaGPYEnv1qg/clg-final-yr-project?node-id=7613-723&t=x6XlsE63zjcLyG9g-1",
  },
  {
    id: "ott-streaming-platform", clientName: "OTT Streaming Platform", title: "Content discovery for a streaming app",
    category: ["UI/UX"], description: "Wireframes and high-fidelity prototypes focused on intuitive content discovery and navigation.", overview: "An end-to-end interface exploration for browsing, evaluating and returning to streaming content across a modern entertainment platform.",
    role: "UI/UX Designer", services: ["User flows", "Wireframing", "UI design", "Prototyping"], heroImage: ottHero,
    galleryImages: [{ src: ottHero, alt: "OTT streaming platform interface", caption: "Browse and detail screens" }], featured: true, year: "2025",
    externalUrl: "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2137-1764&t=JmPVHss2e2Xd5stF-1",
  },
  {
    id: "bakery-app", clientName: "Bakery App", title: "End-to-end ordering experience",
    category: ["UI/UX"], description: "An ordering experience developed from early wireframes through a polished high-fidelity prototype.", overview: "A focused mobile journey covering product discovery, ordering, cart management and order tracking for a neighbourhood bakery.",
    role: "UI/UX Designer", services: ["User flows", "Wireframing", "UI design", "Prototyping"], heroImage: bakeryHero,
    galleryImages: [{ src: bakeryHero, alt: "Bakery ordering app screens", caption: "Ordering flow" }], featured: true, year: "2025",
    externalUrl: "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2082-2&t=JmPVHss2e2Xd5stF-1",
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
export const featuredProjects = () => projects.filter((project) => project.featured).slice(0, 8);
export const filterProjects = (category: string) => category === "All" ? projects : projects.filter((project) => project.category.includes(category as Category));
export const uiUxProjects = () => projects.filter((project) => project.category.includes("UI/UX"));
