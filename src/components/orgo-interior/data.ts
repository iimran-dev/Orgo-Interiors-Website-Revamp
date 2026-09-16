export interface ProjectItem {
  id: string;
  title: string;
  location?: string;
  category: "Residential" | "Commercial" | "Kitchens" | "Living" | "Bedrooms";
  image: string;
  scope?: string;
  area?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar: string;
  interiorImage: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  {
    value: "60+",
    label: "Projects Completed",
    icon: "building",
  },
  {
    value: "100%",
    label: "Bespoke Architectural Plans",
    icon: "compass",
  },
  {
    value: "Turnkey",
    label: "Execution & Oversight",
    icon: "refresh",
  },
  {
    value: "Chennai Studio",
    label: "Serving Across South India",
    icon: "mapPin",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "home-interiors",
    title: "Residential Architecture",
    description: "Tailored residential environments defined by light, proportion, and bespoke craftsmanship.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "modular-kitchens",
    title: "Architectural Kitchens",
    description: "Precision joinery, monolithic natural stone islands, and ergonomic culinary layouts.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "wardrobes",
    title: "Bespoke Wardrobes",
    description: "Integrated dressing suites with fluted glass, architectural timber, and concealed hardware.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "false-ceilings",
    title: "Ceilings & Illumination",
    description: "Sculptural architectural profiles, concealed cove details, and ambient lighting design.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "poes-garden-villa",
    title: "The Pavilion Residence",
    location: "Poes Garden, Chennai",
    category: "Residential",
    scope: "Complete Turnkey Architectural Interior",
    area: "5,400 sq.ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "boat-club-manor",
    title: "Minimalist Monolith Villa",
    location: "Boat Club Road, Chennai",
    category: "Residential",
    scope: "Architectural Living & Dining Pavilion",
    area: "6,200 sq.ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "coastal-penthouse",
    title: "East Coast Penthouse",
    location: "ECR, Chennai",
    category: "Living",
    scope: "Ribbed Oak Living & Ocean Lounge",
    area: "3,800 sq.ft",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "harrington-lounge",
    title: "Courtyard Residence Lounge",
    location: "Chetpet, Chennai",
    category: "Living",
    scope: "Fluted Wood Wall & Formal Seating",
    area: "2,900 sq.ft",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "monolithic-kitchen",
    title: "Travertine Culinary Studio",
    location: "Boat Club Road, Chennai",
    category: "Kitchens",
    scope: "Monolithic Quartz Island & Oak Millwork",
    area: "850 sq.ft",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "nordic-culinary",
    title: "Marble & Bronze Kitchen",
    location: "Nungambakkam, Chennai",
    category: "Kitchens",
    scope: "Cove Illumination & Custom Cabinetry",
    area: "720 sq.ft",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sanctuary-suite",
    title: "Minimalist Master Suite",
    location: "Adyar, Chennai",
    category: "Bedrooms",
    scope: "Timber Slat Headboard & Dressing Suite",
    area: "1,200 sq.ft",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bespoke-bedroom",
    title: "Serene Linen Guest Chamber",
    location: "Alwarpet, Chennai",
    category: "Bedrooms",
    scope: "Full-Height Glazing & Oak Detailing",
    area: "950 sq.ft",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "headquarters-studio",
    title: "Executive Design Atelier",
    location: "OMR, Chennai",
    category: "Commercial",
    scope: "Architectural Studio & Materials Library",
    area: "4,500 sq.ft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "private-equity-office",
    title: "Boardroom & Partner Suite",
    location: "Guindy, Chennai",
    category: "Commercial",
    scope: "Acoustic Millwork & Executive Lounge",
    area: "3,200 sq.ft",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Client vision, spatial audit & architectural brief.",
  },
  {
    step: "02",
    title: "DEFINE",
    description: "Space planning, zoning & schematic layouts.",
  },
  {
    step: "03",
    title: "DESIGN",
    description: "Photorealistic 3D visualization & material selection.",
  },
  {
    step: "04",
    title: "DEVELOP",
    description: "Precision fabrication, engineering & scheduling.",
  },
  {
    step: "05",
    title: "DELIVER",
    description: "Turnkey installation, final styling & flawless handover.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "priya-karthik",
    quote:
      "ORGO Interiors transformed our residence into a timeless sanctuary. Their architectural clarity, restrained material palette, and uncompromising execution set them in a league of their own.",
    name: "Priya & Karthik",
    location: "Poes Garden, Chennai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    interiorImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "ramesh-anitha",
    quote:
      "From bespoke millwork to ambient lighting details, the ORGO team delivered with exacting precision. The experience was seamless and the finished residence is exceptional.",
    name: "Ramesh & Anitha",
    location: "Coimbatore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    interiorImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "vikram-divya",
    quote:
      "The balance of natural travertine, concealed lighting, and tailored cabinetry brought an extraordinary calm to our home. ORGO Interiors understands architectural subtlety.",
    name: "Vikram & Divya",
    location: "Boat Club Road, Chennai",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    interiorImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
];
