import beezHero from "@/assets/beez-haircare-hero.jpg";
import annaiMiraHero from "@/assets/annai-mira-hero.jpg";
import jayanthiBakeryHero from "@/assets/jayanthi-bakery-hero.jpg";
import mapisClinicHero from "@/assets/mapis-clinic-hero.jpg";
import leeDigitalArtsHero from "@/assets/lee-digital-arts-hero.jpg";
import karTowersHero from "@/assets/kar-towers-hero.jpg";
import ottHero from "@/assets/ott-hero.jpg";
import bakeryHero from "@/assets/bakery-hero.jpg";
import uxLearnHero from "@/assets/uxlearn-hero.jpg";
import primePublicSchoolHero from "@/assets/prime-public-school-hero.jpg";
import trainingProjectCover from "@/assets/training-project-cover.jpg";
import trainingWorkshopFocus from "@/assets/training-workshop-focus.jpeg.asset.json";
import trainingWorkshopWide from "@/assets/training-workshop-wide.jpeg.asset.json";
import trainingWorkshopStudio from "@/assets/training-workshop-studio.jpeg.asset.json";
import trainingLiveSession from "@/assets/training-live-session.jpeg.asset.json";
import trainingOneToOne from "@/assets/training-one-to-one.jpeg.asset.json";
import trainingPracticalSession from "@/assets/training-practical-session.jpeg.asset.json";
import trainingMentoring from "@/assets/training-mentoring.jpeg.asset.json";
import trainingStudentPractice from "@/assets/training-student-practice.jpeg.asset.json";
import trainingFullWorkshop from "@/assets/training-full-workshop.jpeg.asset.json";
import trainingGuidedWorkshop from "@/assets/training-guided-workshop.jpeg.asset.json";
import trainingWorkshopTable from "@/assets/training-workshop-table.jpeg.asset.json";
import trainingWorkshopRoomVertical from "@/assets/training-workshop-room-vertical.jpeg.asset.json";
import trainingWorkshopRoomWide from "@/assets/training-workshop-room-wide.jpeg.asset.json";
import trainingWorkshopFullClass from "@/assets/training-workshop-full-class.jpeg.asset.json";
import trainingCertificatePresentation from "@/assets/training-certificate-presentation.jpeg.asset.json";
import trainingWorkshopVideo from "@/assets/training-workshop-session.mp4.asset.json";

export const CATEGORIES = ["All", "Graphic Design", "UI/UX", "Training", "Branding", "Packaging", "Social Media", "Marketing", "Posters"] as const;
export type Category = Exclude<(typeof CATEGORIES)[number], "All">;
export type GalleryImage = { src: string; alt: string; caption?: string; mediaType?: "image" | "video" };
export type Project = {
  id: string; clientName: string; clientType?: string; title: string; category: Category[]; description: string;
  overview: string; role: string; services: string[]; heroImage: string;
  galleryImages: GalleryImage[]; featured: boolean; year: string; externalUrl?: string; instagramUrl?: string; itemLabel?: string;
};

const allProjects: Project[] = [
  {
    id: "beez-haircare", clientType: "Skin & Hair Care Brand", clientName: "Beez", title: "Hair oil & serum packaging design",
    category: ["Graphic Design", "Branding", "Packaging", "Marketing"],
    description: "A premium packaging system for Beez hair oil and serum, balancing botanical care with a modern shelf presence.",
    overview: "Beez is a hair-care brand, not a honey brand. The identity uses botanical cues, premium dark packaging and a flexible visual language across oil, serum and campaign touchpoints.",
    role: "Brand & Packaging Designer", services: ["Packaging design", "Visual identity", "Product presentation", "Campaign assets"],
    heroImage: beezHero, galleryImages: [], featured: true, year: "2026", instagramUrl: "https://www.instagram.com/beez_premium_blends",
  },
  {
    id: "jayanthi-bakery", clientType: "Bakery", clientName: "Jayanthi Bakery", title: "Bakery packaging & identity system",
    category: ["Graphic Design", "Branding", "Packaging", "Social Media"],
    description: "A warm, locally rooted bakery identity across pastry boxes, bread wraps, carry bags and campaign pieces.",
    overview: "A full visual refresh created to make Jayanthi Bakery feel established, distinctive and consistent across product packaging, retail and digital communication.",
    role: "Brand & Visual Designer", services: ["Brand redesign", "Package design", "Retail collateral", "Social media"],
    heroImage: jayanthiBakeryHero, galleryImages: [], featured: true, year: "2026", instagramUrl: "https://www.instagram.com/jayanthibakery_vellore",
  },
  {
    id: "lee-digital-arts", clientType: "Digital Printing Studio", clientName: "Lee Digital Arts", title: "Creative studio visual identity",
    category: ["Graphic Design", "Branding", "Social Media"],
    description: "A bold visual identity and communication system for a contemporary digital arts studio.",
    overview: "A high-energy identity designed to move confidently across posters, digital experiences, stationery and social communication.",
    role: "Visual & Brand Designer", services: ["Visual identity", "Poster system", "Digital collateral", "Social templates"],
    heroImage: leeDigitalArtsHero, galleryImages: [], featured: true, year: "2026", instagramUrl: "https://www.instagram.com/leedigitalarts",
  },
  {
    id: "kar-towers", clientType: "Accommodation & Event Spaces", clientName: "KAR Towers", title: "Property brand & campaign system",
    category: ["Graphic Design", "Branding", "Marketing"],
    description: "A premium property identity connecting architecture, print collateral, signage and campaign communication.",
    overview: "KAR Towers required an identity with architectural confidence and clarity across residential marketing, wayfinding and print applications.",
    role: "Brand & Graphic Designer", services: ["Brand identity", "Property brochure", "Campaign design", "Wayfinding"],
    heroImage: karTowersHero, galleryImages: [], featured: true, year: "2026", instagramUrl: "https://www.instagram.com/kar_towers_arni",
  },
  {
    id: "annai-mira-world-school", clientType: "Educational Institution", clientName: "Annai Mira World School", title: "Admission campaigns & school communications",
    category: ["Graphic Design", "Social Media", "Marketing", "Posters"],
    description: "A bright communication system for admissions, educational announcements and the school’s social presence.",
    overview: "A cohesive campaign language designed to connect with parents and students across admissions and everyday school communication.",
    role: "Visual Designer", services: ["Admission campaigns", "Educational posters", "Social media design"], heroImage: annaiMiraHero,
    galleryImages: [], featured: true, year: "2026", instagramUrl: "https://www.instagram.com/annai_mira_world_school",
  },
  {
    id: "prime-public-school", clientType: "CBSE PUBLIC SCHOOL", clientName: "Prime Public School", title: "School campaigns & social communication",
    category: ["Graphic Design", "Social Media", "Marketing", "Posters"], description: "A vibrant campaign system for admissions, parent communication and educational storytelling.",
    overview: "A recognisable visual language for Prime Public School that turns learning values, admissions messages and school strengths into clear, engaging social campaigns.", role: "Graphic Designer",
    services: ["Admission campaigns", "Educational posters", "Social media design", "School communication"], heroImage: primePublicSchoolHero,
    galleryImages: [], featured: false, year: "2026", instagramUrl: "https://www.instagram.com/primepublicschool_vellore",
  },
  {
    id: "mapis-clinic", clientType: "Beauty & Wellness Clinic", clientName: "MAPIS Hair, Skin & Beauty Clinic", title: "Clinic identity & beauty campaigns",
    category: ["Graphic Design", "Branding", "Social Media", "Marketing"], description: "A polished campaign system balancing clinical trust with a contemporary beauty aesthetic.",
    overview: "A confident visual presence spanning treatment communication, clinic materials and social campaigns.", role: "Brand & Visual Designer",
    services: ["Brand identity", "Campaign design", "Clinic collateral", "Social media"], heroImage: mapisClinicHero,
    galleryImages: [], featured: false, year: "2026", instagramUrl: "https://www.instagram.com/mapisbeautyhair_skinclinic",
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
    galleryImages: [{ src: ottHero, alt: "OTT streaming platform interface", caption: "Browse and detail screens" }], featured: true, year: "2026",
    externalUrl: "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2137-1764&t=JmPVHss2e2Xd5stF-1",
  },
  {
    id: "bakery-app", clientName: "Bakery App", title: "End-to-end ordering experience",
    category: ["UI/UX"], description: "An ordering experience developed from early wireframes through a polished high-fidelity prototype.", overview: "A focused mobile journey covering product discovery, ordering, cart management and order tracking for a neighbourhood bakery.",
    role: "UI/UX Designer", services: ["User flows", "Wireframing", "UI design", "Prototyping"], heroImage: bakeryHero,
    galleryImages: [{ src: bakeryHero, alt: "Bakery ordering app screens", caption: "Ordering flow" }], featured: true, year: "2026",
    externalUrl: "https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2082-2&t=JmPVHss2e2Xd5stF-1",
  },
  {
    id: "design-training", clientName: "Design Training", title: "Practical creative learning & mentorship",
    category: ["Training"],
    description: "Hands-on UI/UX and graphic design workshops shaped around live demonstrations, practical briefs and individual guidance.",
    overview: "A training practice built to make design tools and thinking approachable. Sessions combine clear explanations, live demonstrations, guided exercises and useful feedback for emerging creatives.",
    role: "UI/UX & Graphic Design Trainer",
    services: ["Workshop facilitation", "Curriculum development", "Practical demonstrations", "Student mentorship"],
    heroImage: trainingProjectCover,
    galleryImages: [
      { src: trainingWorkshopWide.url, alt: "Students participating in a practical design workshop", caption: "Collaborative Design Practice" },
      { src: trainingWorkshopFocus.url, alt: "Students working closely on design exercises using laptops", caption: "Focused Tool Practice" },
      { src: trainingWorkshopStudio.url, alt: "A full classroom of students working on design projects", caption: "Independent Project Time" },
      { src: trainingLiveSession.url, alt: "Trainer presenting a live design lesson to students", caption: "Live Demonstrations" },
      { src: trainingOneToOne.url, alt: "Trainer giving one-to-one guidance during a workshop", caption: "Personal Mentoring" },
      { src: trainingPracticalSession.url, alt: "Students completing practical design activities", caption: "Learning by Making" },
      { src: trainingMentoring.url, alt: "Trainer discussing a student's design work", caption: "Clear, Practical Feedback" },
      { src: trainingStudentPractice.url, alt: "Students practising digital design skills on laptops", caption: "Hands-on Learning" },
      { src: trainingFullWorkshop.url, alt: "A busy design workshop with students working across the studio", caption: "Creative Workshop Energy" },
      { src: trainingGuidedWorkshop.url, alt: "Trainer leading students through a classroom design session", caption: "Guided Classroom Session" },
      { src: trainingWorkshopTable.url, alt: "Design trainees working together around a shared table", caption: "Collaborative Table Session" },
      { src: trainingWorkshopRoomVertical.url, alt: "Students working on laptops throughout the training room", caption: "Studio Practice" },
      { src: trainingWorkshopRoomWide.url, alt: "Trainer guiding a full classroom during a practical session", caption: "In-class Guidance" },
      { src: trainingWorkshopFullClass.url, alt: "A full class completing practical design work on laptops", caption: "Workshop in Progress" },
      { src: trainingCertificatePresentation.url, alt: "Certificate presentation at the conclusion of a design training programme", caption: "Certificate Presentation" },
      { src: trainingWorkshopVideo.url, alt: "Short video from a live design workshop", caption: "Live Workshop Moment", mediaType: "video" },
    ],
    featured: false,
    year: "2026",
    itemLabel: "workshop moment",
  },
];

// Display order used everywhere (home, work page, filters).
const projectOrder = [
  "annai-mira-world-school",
  "prime-public-school",
  "kar-towers",
  "lee-digital-arts",
  "mapis-clinic",
  "jayanthi-bakery",
  "beez-haircare",
  "ux-learning-platform",
  "ott-streaming-platform",
  "bakery-app",
  "design-training",
] as const;

export const projects: Project[] = projectOrder
  .map((id) => allProjects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const getProject = (id: string) => projects.find((project) => project.id === id);
export const featuredProjects = () => projects.slice(0, 6);
export const filterProjects = (category: string) => category === "All" ? projects : projects.filter((project) => project.category.includes(category as Category));
export const uiUxProjects = () => projects.filter((project) => project.category.includes("UI/UX"));
export const graphicDesignProjects = () => projects.filter((project) => project.category.includes("Graphic Design"));
