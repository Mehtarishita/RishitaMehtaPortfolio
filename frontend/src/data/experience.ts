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
    lorUrl: "/startup-club-lor.pdf", // Add your Letter of Recommendation PDF to frontend/public/startup-club-lor.pdf
    certificateUrl: "/startup-club-certificate.pdf" // Add your Certificate of Appreciation PDF to frontend/public/startup-club-certificate.pdf
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
    duration: "", // [TO ADD LATER]
    type: "Internship",
    location: "", // [TO ADD LATER]
    description: "", // [TO ADD LATER]
    techStack: [] // [TO ADD LATER]
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
