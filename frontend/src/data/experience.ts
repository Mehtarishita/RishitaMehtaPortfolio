export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  techStack: string[];
  certificateUrl?: string;
  lorUrl?: string;
  promotionUrl?: string;
  appreciationUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: "aiexecute",
    role: "Business Development / AI Executive",
    organization: "AIExecute Labs",
    duration: "Present",
    type: "Internship",
    location: "Remote",
    description: "", // [TO ADD LATER]
    techStack: [], // [TO ADD LATER]
    certificateUrl: "", // [TO ADD LATER]
    lorUrl: "" // [TO ADD LATER]
  },
  {
    id: "navrasa",
    role: "Graphic Design Intern",
    organization: "Navrasa Group",
    duration: "Dec 2024 – Mar 2025",
    type: "Internship",
    location: "Remote",
    description: "Social media marketing and graphic design for Event Management Company.",
    techStack: ["Graphic Design", "Social Media Marketing"],
  },
  {
    id: "tryst",
    role: "Campus Ambassador",
    organization: "TRYST, IIT Delhi",
    duration: "Mar 2024 – Apr 2024",
    type: "Part-time",
    location: "Remote",
    description: "Promoted the tech fest events on campus and managed student registrations.",
    techStack: ["Marketing", "Communication", "Leadership"]
  },
  {
    id: "blockchain-club",
    role: "Social Team Lead",
    organization: "Blockchain Club",
    duration: "", // [TO ADD LATER]
    type: "Leadership",
    location: "Campus",
    description: "", // [TO ADD LATER]
    techStack: ["Leadership", "Community Management"], // [TO ADD LATER]
    promotionUrl: "/blockchain-promotion.png", // Add your Letter of Promotion to frontend/public/blockchain-promotion.png
    appreciationUrl: "/blockchain-appreciation.png", // Add your Letter of Appreciation to frontend/public/blockchain-appreciation.png
    lorUrl: "", // [TO ADD LATER]
    certificateUrl: "" // [TO ADD LATER]
  },
  {
    id: "startup-club",
    role: "Core Member, Event Management",
    organization: "Startup Club",
    duration: "", // [TO ADD LATER]
    type: "Leadership",
    location: "Campus",
    description: "", // [TO ADD LATER]
    techStack: ["Event Management", "Teamwork"], // [TO ADD LATER]
    lorUrl: "/startup-club-lor.png", // Add your Letter of Recommendation PNG to frontend/public/startup-club-lor.png
    certificateUrl: "/startup-club-certificate.png" // Add your Certificate of Appreciation PNG to frontend/public/startup-club-certificate.png
  },
  {
    id: "gssoc",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code",
    duration: "Sep 2024 – Nov 2024",
    type: "Open Source",
    location: "Remote",
    description: "Contributed to various open source projects, resolving issues and adding new features.",
    techStack: ["Git", "GitHub", "Open Source"]
  },
  {
    id: "devplex",
    role: "SDE Intern",
    organization: "DevPlex",
    duration: "Nov 2025 – Feb 2026",
    type: "Internship",
    location: "Remote",
    description: "Built and optimized production-facing frontend features. Collaborated with stakeholders to deploy improvements and contributed to workflow enhancements within cross-functional strategic initiatives.",
    techStack: [], // [TO ADD LATER]
    certificateUrl: "/devplex-certificate.pdf" // Add your DevPlex certificate PDF to frontend/public/devplex-certificate.pdf
  }
];

export const leadershipAndSports = [
  {
    title: "2× State-Level Chess Player",
    certificateUrl: "" // [TO ADD LATER]
  },
  {
    title: "2× State-Level Hockey Player",
    certificateUrl: "" // [TO ADD LATER]
  }
];
