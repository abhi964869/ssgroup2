export type Stat = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  backgroundSrc: string;
  imageSrc: string;
  brochureHref: string;
  brochureLabel: string;
  brochureSummary: string;
  comingSoon?: boolean;
  stats: Stat[];
  highlights: string[];
  detailSections: Array<{ heading: string; body: string }>;
  applications: string[];
};

export type Brochure = {
  slug: string;
  title: string;
  category: string;
  description: string;
  href: string;
  imageSrc: string;
};

export type UpcomingProject = {
  id: string;
  title: string;
  description: string;
  cardImage: string;
  imageSrc: string;
  structure: Array<{ heading: string; body: string }>;
};

export const company = {
  name: "S&S Group",
  location: "Noida, Uttar Pradesh, India",
  founded: "2023",
  website: "https://www.amcssgroup.com",
  email: "shubham@amcssgroup.com",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Noida%2C%20Uttar%20Pradesh%2C%20India&z=11&output=embed",
  profileBrochureHref: "/brochures/ss-group-company-profile.pdf",
  phones: [
    { label: "Primary", display: "8742962010", href: "tel:+918742962010" },
    { label: "Direct", display: "+917303553662", href: "tel:+917303553662" }
  ],
  heroStats: [
    { value: "2023", label: "Founded" },
    { value: "Noida", label: "Operating Base" },
    { value: "LT + EV", label: "Core Systems" },
    { value: "Turnkey", label: "Execution Support" }
  ]
} as const;

export const overviewPoints = [
  "Design engineering, fabrication, installation, testing and commissioning under one roof.",
  "Built around low-voltage panels, automation systems, EV charging infrastructure and maintenance support.",
  "Focused on disciplined manufacturing, inspection-led delivery and premium-quality electrical execution."
] as const;

export const servicePillars = [
  {
    title: "Engineering-Led Manufacturing",
    text: "S&S Group turns brochure concepts into practical panels and charging systems with attention to layout clarity, operator access, and service-friendly construction."
  },
  {
    title: "Industrial + EV Coverage",
    text: "The portfolio spans LT distribution, APFCR correction, starter control, EV charging panels, EV Swift systems, and fast-charging hardware so clients can understand the whole stack in one place."
  },
  {
    title: "Readable Project Communication",
    text: "Brochures, product pages, footer-based contact details, and clean explanations make it easier for customers to understand what you build before the first meeting."
  }
] as const;

export const deliveryStages = [
  {
    title: "Understand The Requirement",
    text: "Project inputs, power needs, application details, and brochure references are aligned before the build direction is finalized."
  },
  {
    title: "Engineer The Right Configuration",
    text: "Panel layouts, feeder logic, metering, protection strategy, and finish details are shaped around the exact duty of the system."
  },
  {
    title: "Build With Manufacturing Discipline",
    text: "Fabrication, assembly, inspection, and presentation quality stay connected so the final product looks premium and performs like industrial equipment should."
  },
  {
    title: "Support Deployment And Handover",
    text: "The workflow extends into site discussions, brochure sharing, client communication, and commissioning-ready documentation."
  }
] as const;

export const industrySegments = [
  "Industrial plants and process facilities",
  "Commercial buildings and utility rooms",
  "EV charging campuses and parking operators",
  "Fleet-ready mobility programs and clean-energy projects"
] as const;

export const products: Product[] = [
  {
    slug: "lt-panel",
    navLabel: "L.T. Panel",
    title: "L.T. Panel",
    eyebrow: "Low Voltage Power Distribution",
    description:
      "A structured low-tension panel platform for industrial distribution, incomer management, feeder control, and dependable power visibility.",
    longDescription:
      "Built from the uploaded brochure lineup around main incomer, DG incomer, and bus-coupler architecture, this panel is positioned for facilities that need disciplined low-voltage switching, operational visibility, and safe routing across multiple outgoing loads.",
    backgroundSrc: "/assets/backgrounds/lt-panel-grid.svg",
    imageSrc: "/assets/user-supplied/lt-panel.jpeg",
    brochureHref: "/brochures/lt-panel.pdf",
    brochureLabel: "Open L.T. Panel Brochure",
    brochureSummary:
      "Brochure-backed overview of the L.T. panel arrangement, incomer logic, control devices, and metering presentation.",
    stats: [
      { label: "Architecture", value: "Main + DG + Bus Coupler" },
      { label: "Use Case", value: "Industrial & Commercial Plants" },
      { label: "Focus", value: "Safe Switching & Metering" }
    ],
    highlights: [
      "Balanced incomer coordination for utility and DG sources.",
      "Meter-integrated front sections for visibility at a glance.",
      "Built for disciplined bus distribution across complex facilities."
    ],
    detailSections: [
      {
        heading: "What it is",
        body: "A low-tension main distribution panel designed to accept incoming power, organize outgoing feeders, and give operators a clear front-facing control surface."
      },
      {
        heading: "How it supports operations",
        body: "The layout separates measurement, switching, and feeder management so teams can track healthy power flow without searching through a crowded enclosure."
      },
      {
        heading: "Why clients choose it",
        body: "It fits facilities that need a dependable electrical backbone, especially when utility supply, generator backup, and multiple outgoing loads need to work together cleanly."
      },
      {
        heading: "Presentation value",
        body: "The uploaded visuals show a finished industrial cabinet that also looks premium enough for company profile use, sales presentations, and proposal decks."
      }
    ],
    applications: [
      "Manufacturing facilities",
      "Commercial campuses",
      "Utility rooms",
      "Electrical distribution upgrades"
    ]
  },
  {
    slug: "apfcr-panel",
    navLabel: "APFCR Panel",
    title: "APFCR Panel",
    eyebrow: "Reactive Power Optimization",
    description:
      "Automatic power factor correction with capacitor bank intelligence, relay logic, and metering visibility for cleaner electrical performance.",
    longDescription:
      "The APFCR brochure centers on a capacitor bank section, APFC relay, and metering zone with ACB or MCCB incomer support. The result is a premium correction panel designed to improve stability, reduce reactive losses, and help operations maintain stronger utility performance.",
    backgroundSrc: "/assets/backgrounds/apfcr-resonance.svg",
    imageSrc: "/assets/user-supplied/apfcr-panel.jpeg",
    brochureHref: "/brochures/apfcr-panel.pdf",
    brochureLabel: "Open APFCR Panel Brochure",
    brochureSummary:
      "PDF guide covering the APFC relay, capacitor steps, operator indications, and the panel construction shown in the uploaded material.",
    stats: [
      { label: "Improvement", value: "Up to 0.99 Lag" },
      { label: "Sections", value: "Incomer + Capacitor + Relay" },
      { label: "Output", value: "Penalty Reduction Ready" }
    ],
    highlights: [
      "Digital APFC relay and metering section for smarter correction control.",
      "Capacitor duty contactors and fused architecture for robust operation.",
      "Ideal for plants that want to reduce electrical penalties and improve efficiency."
    ],
    detailSections: [
      {
        heading: "What it solves",
        body: "The panel is designed to improve power factor, reduce reactive power penalties, and help facilities operate with stronger electrical efficiency."
      },
      {
        heading: "How it works",
        body: "Metering and relay logic monitor the load condition, then switch capacitor steps in and out so the electrical system stays closer to the target power factor."
      },
      {
        heading: "Operator visibility",
        body: "The front arrangement makes it easy to read system values, understand stage status, and keep the correction strategy transparent for operators and maintenance teams."
      },
      {
        heading: "Why it matters",
        body: "It turns a technical efficiency problem into a cleanly packaged product that clients can quickly understand through both the visuals and the upgraded website copy."
      }
    ],
    applications: [
      "Industrial plants",
      "High-load commercial sites",
      "Facilities seeking penalty reduction",
      "Power quality improvement projects"
    ]
  },
  {
    slug: "starter-panel",
    navLabel: "Starter Panel",
    title: "Starter Panel",
    eyebrow: "Motor Control & Protection",
    description:
      "A motor-starter panel engineered for dependable starting, operator-friendly controls, and protection logic for heavy-duty equipment.",
    longDescription:
      "Based on the starter brochure for 60-100 HP motor applications, this panel combines protection, digital status visibility, selector switches, and organized controls so demanding motors can start, stop, and switch modes with confidence.",
    backgroundSrc: "/assets/backgrounds/starter-vector.svg",
    imageSrc: "/assets/user-supplied/starter-panel.jpeg",
    brochureHref: "/brochures/starter-panel.pdf",
    brochureLabel: "Open Starter Panel Brochure",
    brochureSummary:
      "Brochure view of the starter panel controls, run-trip logic, and operator-facing layout for motor control applications.",
    stats: [
      { label: "Motor Range", value: "60-100 HP" },
      { label: "Protection", value: "MCCB + Control Logic" },
      { label: "Control", value: "Selector & Push Buttons" }
    ],
    highlights: [
      "Built around clear operator controls, metering and status indication.",
      "Designed for demanding motors used in pumps, process lines and plant equipment.",
      "Cable entry and service access stay organized for easier maintenance."
    ],
    detailSections: [
      {
        heading: "Starting logic",
        body: "This panel gives operators a controlled way to start, stop, and supervise critical motors without relying on improvised controls or scattered field devices."
      },
      {
        heading: "Protection layer",
        body: "Push buttons, selector controls, and protection elements are arranged to reduce operator confusion and keep the motor control sequence easy to follow."
      },
      {
        heading: "Where it fits",
        body: "It is suited to pumps, process equipment, and industrial motors that need a compact cabinet with direct, readable control on the front face."
      },
      {
        heading: "Why it reads well online",
        body: "The user-uploaded image makes the product immediately understandable, which helps turn a technical panel into a product that non-technical visitors can still recognize."
      }
    ],
    applications: [
      "Pump rooms",
      "Industrial motors",
      "Process lines",
      "Plant utilities"
    ]
  },
  {
    slug: "ev-charging-panel",
    navLabel: "EV Charging Panel",
    title: "EV Charging Panel",
    eyebrow: "EV Distribution & Feeder Protection",
    description:
      "A dedicated EV power-distribution panel for safely feeding multiple chargers from one organized enclosure.",
    longDescription:
      "The brochure shows lockable doors, multifunction metering, phase indication, dedicated charger branches, and busbar-backed distribution. It is positioned as the distribution backbone that turns one incoming source into a dependable multi-outlet EV charging environment.",
    backgroundSrc: "/assets/backgrounds/ev-network.svg",
    imageSrc: "/assets/user-supplied/ev-charging-panel.jpeg",
    brochureHref: "/brochures/ev-charging-panel.pdf",
    brochureLabel: "Open EV Charging Panel Brochure",
    brochureSummary:
      "PDF overview of the EV charging panel layout, feeder coordination, metering, and front-panel operating elements.",
    comingSoon: true,
    stats: [
      { label: "Feeders", value: "Multi Charger Distribution" },
      { label: "Monitoring", value: "Digital Multifunction Meter" },
      { label: "Build", value: "Lockable Doors & Cable Alley" }
    ],
    highlights: [
      "Independent outgoing branches help isolate and manage charger loads cleanly.",
      "Metering and phase status are presented on the front for faster diagnostics.",
      "Ready for premium charging campuses, parking hubs and fleet deployments."
    ],
    detailSections: [
      {
        heading: "What it controls",
        body: "The panel acts as the upstream distribution point for EV chargers, dividing power across outgoing feeder branches while keeping each branch easier to manage."
      },
      {
        heading: "Safety architecture",
        body: "Lockable access, organized feeder sections, and visible indications help make the charging setup more reliable for both operators and maintenance teams."
      },
      {
        heading: "Why it is marked coming soon",
        body: "It is part of the EV-focused portfolio and carries the requested premium Coming Soon badge so the site signals growth without creating placeholder pages."
      },
      {
        heading: "Where it matters",
        body: "This panel is best suited to sites planning multiple chargers in one controlled electrical zone, including campuses, basements, parking facilities, and future charging yards."
      }
    ],
    applications: [
      "EV parking hubs",
      "Commercial charging points",
      "Fleet depots",
      "Campus charging infrastructure"
    ]
  },
  {
    slug: "ev-swift-system",
    navLabel: "EV Swift System",
    title: "EV Swift System",
    eyebrow: "EV Swift Power Platform",
    description:
      "A system-oriented EV power platform positioned around fast charging, drivetrain readiness, and future-facing performance communication.",
    longDescription:
      "The uploaded EV Swift visual reframes this offer as a premium electric mobility system with fast charging, modular power architecture, smart thermal management, and performance-oriented energy delivery. On the site it functions as the visionary side of the EV portfolio.",
    backgroundSrc: "/assets/backgrounds/swift-busbar.svg",
    imageSrc: "/assets/user-supplied/ev-swift-system.jpeg",
    brochureHref: "/brochures/ev-swift-system.pdf",
    brochureLabel: "Open EV Swift System Brochure",
    brochureSummary:
      "Brochure content for the EV Swift system concept, presented as a premium electric mobility platform within the S&S Group website.",
    comingSoon: true,
    stats: [
      { label: "Charging", value: "Ultra-Fast 800V" },
      { label: "Platform", value: "Modular Power Architecture" },
      { label: "Control", value: "Smart Thermal Management" }
    ],
    highlights: [
      "Positions S&S Group as forward-looking in EV infrastructure storytelling.",
      "Connects charging speed, platform architecture and performance language into one concept.",
      "Works well as a flagship future-facing page in the routed product library."
    ],
    detailSections: [
      {
        heading: "What it represents",
        body: "EV Swift is presented as the future-ready system layer of the brand, connecting fast charging capability, thermal management, and platform thinking into one story."
      },
      {
        heading: "How it is framed",
        body: "The page explains the system in business-friendly language so visitors can quickly grasp the value even if they are not engineers or EV specialists."
      },
      {
        heading: "Why it stays premium",
        body: "The uploaded image already carries a futuristic visual tone, so the site supports it with a darker, more structured layout instead of redesigning the concept randomly."
      },
      {
        heading: "Best use on the site",
        body: "It acts as a flagship EV story page that shows the company is thinking beyond a single panel into broader clean-energy and vehicle-support systems."
      }
    ],
    applications: [
      "EV system showcases",
      "Future mobility presentations",
      "Charging platform discussions",
      "Premium brochure-led sales conversations"
    ]
  },
  {
    slug: "fixed-fast-ev-charger",
    navLabel: "Fast EV Charger",
    title: "Fixed Fast EV Charger",
    eyebrow: "Compact Fast Charging Hardware",
    description:
      "A compact fast charger platform with digital monitoring, protection features, and field-ready communication for future EV deployments.",
    longDescription:
      "From the brochure and newly uploaded image, this product combines premium front-end presentation with fast-charging intent, interface visibility, and deployment-ready hardware language. On the website it becomes the clearest hardware product in the EV lineup.",
    backgroundSrc: "/assets/backgrounds/fast-ev.svg",
    imageSrc: "/assets/user-supplied/fixed-fast-ev-charger.jpeg",
    brochureHref: "/brochures/fixed-fast-ev-charger.pdf",
    brochureLabel: "Open Fixed Fast EV Charger Brochure",
    brochureSummary:
      "Brochure and website-ready overview of the ultra-fast EV charger, including hardware visuals, charging concept, and positioning for network expansion.",
    comingSoon: true,
    stats: [
      { label: "Class", value: "Ultra-Fast Charger" },
      { label: "Interface", value: "Display + Status Ring" },
      { label: "Deployment", value: "Parking, Fleet, Corridor" }
    ],
    highlights: [
      "Visually strong product for premium EV pages and future network messaging.",
      "Framed around fast deployment, clean hardware, and real-world charging use cases.",
      "Pairs naturally with the upcoming Fast EV Charging Network roadmap section."
    ],
    detailSections: [
      {
        heading: "What it is",
        body: "A premium fast-charging unit designed to anchor future charging rollouts, with a form factor that is easy to understand on both the brochure and the website."
      },
      {
        heading: "How it works on the site",
        body: "The product page focuses on clear explanations of the charger role, deployment potential, and why it matters for a broader charging network."
      },
      {
        heading: "Why it matters",
        body: "It gives S&S Group a recognizable EV hardware story that clients can quickly connect with, even before the network itself is fully launched."
      },
      {
        heading: "Roadmap fit",
        body: "This product is tightly linked to the separate upcoming Fast EV Charging Network section, which opens in a modal instead of a placeholder page."
      }
    ],
    applications: [
      "Parking lots",
      "Commercial charging points",
      "Fleet corridors",
      "Future network rollouts"
    ]
  }
];

export const brochures: Brochure[] = [
  {
    slug: "company-profile",
    title: "S&S Group Company Profile",
    category: "Company",
    description:
      "The main company brochure introducing S&S Group, its positioning, and the broader industrial and EV-facing direction behind the portfolio.",
    href: "/brochures/ss-group-company-profile.pdf",
    imageSrc: "/assets/uploaded/ss_group-02-929x427.jpg"
  },
  {
    slug: "lt-panel",
    title: "L.T. Panel Brochure",
    category: "Electrical Panels",
    description:
      "Detailed PDF for the low-tension panel configuration, incomer arrangement, and distribution-focused presentation.",
    href: "/brochures/lt-panel.pdf",
    imageSrc: "/assets/user-supplied/lt-panel.jpeg"
  },
  {
    slug: "apfcr-panel",
    title: "APFCR Panel Brochure",
    category: "Electrical Panels",
    description:
      "Product brochure covering APFCR architecture, capacitor-stage visibility, and power-factor optimization context.",
    href: "/brochures/apfcr-panel.pdf",
    imageSrc: "/assets/user-supplied/apfcr-panel.jpeg"
  },
  {
    slug: "starter-panel",
    title: "Starter Panel Brochure",
    category: "Motor Control",
    description:
      "Motor-starter brochure with the operator-facing controls, protection layout, and panel arrangement shown in the uploaded asset.",
    href: "/brochures/starter-panel.pdf",
    imageSrc: "/assets/user-supplied/starter-panel.jpeg"
  },
  {
    slug: "ev-charging-panel",
    title: "EV Charging Panel Brochure",
    category: "EV Infrastructure",
    description:
      "Distribution-panel brochure for EV feeder management, front-panel visibility, and charger-ready branch coordination.",
    href: "/brochures/ev-charging-panel.pdf",
    imageSrc: "/assets/user-supplied/ev-charging-panel.jpeg"
  },
  {
    slug: "ev-swift-system",
    title: "EV Swift System Brochure",
    category: "EV Infrastructure",
    description:
      "Presentation-led brochure for the EV Swift system concept, now integrated into the routed website experience.",
    href: "/brochures/ev-swift-system.pdf",
    imageSrc: "/assets/user-supplied/ev-swift-system.jpeg"
  },
  {
    slug: "fixed-fast-ev-charger",
    title: "Fixed Fast EV Charger Brochure",
    category: "EV Infrastructure",
    description:
      "Brochure for the fast-charging hardware product that also powers the upcoming charging-network story.",
    href: "/brochures/fixed-fast-ev-charger.pdf",
    imageSrc: "/assets/user-supplied/fixed-fast-ev-charger.jpeg"
  },
  {
    slug: "battery-swap-station",
    title: "Battery Swap Station Brochure",
    category: "EV Infrastructure",
    description:
      "Automated swap-station brochure showing the cabinet, overview graphics, and mobility-focused battery exchange concept.",
    href: "/brochures/battery-swap-station.pdf",
    imageSrc: "/assets/uploaded/swap_station-01-2420x1023.jpg"
  }
];

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "fast-ev-charging-network",
    title: "Fast EV Charging Network",
    description:
      "A scalable rollout of fixed fast chargers for parking hubs, residential points, fleets, and commercial corridors.",
    cardImage: "/assets/user-supplied/fixed-fast-ev-charger.jpeg",
    imageSrc: "/assets/uploaded/fast_ev_charger-02-2420x1023.jpg",
    structure: [
      {
        heading: "What it is",
        body: "A planned charging-network expansion built around S&S Group fast chargers, combining premium hardware visuals with a cleaner network story for future deployment."
      },
      {
        heading: "How it works",
        body: "The network idea connects site-ready charging hardware, panel-backed distribution, and repeatable deployment logic so more than one charging point can be rolled out with consistency."
      },
      {
        heading: "Key benefits",
        body: "It gives campuses, commercial operators, and fleet environments a roadmap for fast charging that feels organized, scalable, and easier to present to partners."
      },
      {
        heading: "Why it matters",
        body: "Instead of looking like a one-off charger product, the site now frames the offer as part of a broader EV infrastructure program that can grow over time."
      }
    ]
  },
  {
    id: "battery-swapping-station",
    title: "Battery Swapping Station",
    description:
      "An automated exchange platform for connected, fast-turnaround battery operations across mobility programs and fleet ecosystems.",
    cardImage: "/assets/uploaded/swap_station-03-1536x1024.jpg",
    imageSrc: "/assets/uploaded/swap_station-02-2420x1023.jpg",
    structure: [
      {
        heading: "What it is",
        body: "A multi-compartment automated station that authenticates users, manages slot status, and supports organized battery exchange through a digital interface."
      },
      {
        heading: "How it works",
        body: "Users identify themselves, interact with the station, return a depleted battery, and collect a charged one while the system manages the cabinet and slot logic in a controlled sequence."
      },
      {
        heading: "Key benefits",
        body: "The concept supports faster turnaround, better uptime for mobility users, and a cleaner battery-management story for fleets and delivery ecosystems."
      },
      {
        heading: "Use cases",
        body: "Ideal for electric two-wheelers, delivery fleets, campus mobility systems, and any operation that values predictable turnaround with centralized battery exchange."
      }
    ]
  }
];

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Brochures", href: "/brochures" },
  { label: "Contact", href: "/contact" }
] as const;

export const productNav = products.map((product) => ({
  label: product.navLabel,
  href: `/products/${product.slug}`
}));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
