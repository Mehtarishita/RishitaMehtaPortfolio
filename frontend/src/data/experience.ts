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
    duration: "Jan 2026 – May 2026",
    type: "Internship",
    location: "Remote",
    description: "Contributed significantly to business development, strategic planning, and growth initiatives. Applied theoretical knowledge to real-world business challenges and collaborated with the founding team.",
    techStack: ["Business Development", "Strategic Planning", "Leadership"],
    certificateUrl: "/aiexecute-certificate.pdf", // Add your AIExecute certificate to frontend/public/aiexecute-certificate.pdf
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
    techStack: ["Marketing", "Communication", "Leadership"],
    certificateUrl: "/tryst-completion-letter.png" // Add your TRYST completion letter to frontend/public/tryst-completion-letter.png
  },
  {
    id: "blockchain-club",
    role: "Social Media Lead (Prev: Core Member)",
    organization: "Blockchain Club VITB",
    duration: "Jul 2024 – Present",
    type: "Leadership",
    location: "Campus",
    description: "Social Media Lead (Oct 2025 - Present) • Core Member (Jul 2024 - Oct 2025)\nResponsible for leading social and outreach initiatives, managing the creative team, and building engaging content.",
    techStack: ["Leadership", "Social Media Marketing", "Community Management"],
    promotionUrl: "/blockchain-promotion.pdf",
    appreciationUrl: "/blockchain-appreciation.pdf",
    lorUrl: "",
    certificateUrl: ""
  },
  {
    id: "startup-club",
    role: "Core Member, Event Management",
    organization: "Startup Club - VIT Bhopal University",
    duration: "Aug 2024 – Jun 2025",
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
    organization: "GirlScript Summer of Code (GSSoC)",
    duration: "Oct 2024 – Nov 2024",
    type: "Open Source",
    location: "Remote",
    description: "• Contributed to multiple frontend and full-stack open-source repositories using React.js, resolving issues and improving code quality and technical documentation\n• Collaborated with global open-source contributors through Git workflows, participating in code reviews and maintaining high-quality project standards.",
    techStack: ["React.js", "Git", "GitHub", "Open Source"]
  },
  {
    id: "devplex",
    role: "SDE Intern",
    organization: "Devplex AI",
    duration: "Nov 2025 – Feb 2026",
    type: "Internship",
    location: "Remote",
    description: "• Built and optimized production-facing frontend features, working directly with product & marketing stakeholders to turn requirements into deployed improvements.\n• Contributed to workflow & platform improvements as part of cross-functional strategic initiatives, adapting quickly to changing priorities.",
    techStack: ["React.js", "Frontend Development"],
    certificateUrl: "/devplex-certificate.pdf" // Add your DevPlex certificate PDF to frontend/public/devplex-certificate.pdf
  }
];

export const leadershipAndSports = [
  {
    title: "2× State-Level Hockey Player"
  },
  {
    title: "2× State-Level Chess Player"
  },
  {
    title: "Combined Sports Certificates",
    tags: ["Teamwork", "Discipline"],
    certificateUrl: "/sports-certificates.pdf", // Add your combined sports certificates PDF to frontend/public/sports-certificates.pdf
    highlight: true
  }
];
