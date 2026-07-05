export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  coverImage: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  challenges: string;
  learnings: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "vasudha",
    title: "VASUDHA",
    category: "Blockchain + AI",
    shortDescription: "Smart India Hackathon 2025 project. Blockchain + AI solution for a Government problem statement. National Runner-Up.",
    coverImage: "/vasudha-preview.png", // Add your Vasudha preview image (like the one you uploaded) to frontend/public/vasudha-preview.png
    techStack: ["React", "Node.js", "Blockchain", "AI"],
    githubUrl: "https://github.com/Mehtarishita/Vasudha",
    liveUrl: "https://www.vasudha-dahd.app/",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  },
  {
    id: "samvidhan-path",
    title: "Samvidhan Path",
    category: "Full-stack web platform",
    shortDescription: "Interactive web platform for learning and exploring the constitution.",
    coverImage: "/samvidhan-path-preview.png", // Add your Samvidhan Path preview image to frontend/public/samvidhan-path-preview.png
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Mehtarishita/Samvidhan-Path",
    liveUrl: "https://samvidhan-path.vercel.app/",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  },
  {
    id: "smart-traffic",
    title: "Smart Traffic Lane Prioritization",
    category: "Computer Vision",
    shortDescription: "AI-driven, real-time computer vision system for dynamic lane prioritization at traffic intersections (Published Patent).",
    coverImage: "/smart-traffic-preview.png", // Add your Smart Traffic preview image to frontend/public/smart-traffic-preview.png
    techStack: ["TensorFlow", "OpenCV", "Flask", "React", "Computer Vision"],
    githubUrl: "https://github.com/Mehtarishita/SmartFlow-Traffic-System",
    liveUrl: "",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  },
  {
    id: "waste-sort-ai",
    title: "WasteSort AI",
    category: "AI/ML",
    shortDescription: "Computer Vision waste classification using YOLO.",
    coverImage: "/waste-sort-ai-preview.png", // Add your WasteSort AI preview image to frontend/public/waste-sort-ai-preview.png
    techStack: ["YOLO", "Flask", "Streamlit", "Computer Vision"],
    githubUrl: "https://github.com/Mehtarishita/WasteSort-AI-model",
    liveUrl: "",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  },
  {
    id: "station-guide",
    title: "Station Guide",
    category: "Web Application",
    shortDescription: "Railway navigation assistant using Google Maps API.",
    coverImage: "/station-guide-preview.png", // Add your Station Guide preview image to frontend/public/station-guide-preview.png
    techStack: ["Google Maps API", "React", "Node.js"],
    githubUrl: "https://github.com/Mehtarishita/StationGuide",
    liveUrl: "https://stationguide.onrender.com/",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  },
  {
    id: "stylemeup",
    title: "StyleMeUp (ongoing)",
    category: "Web Application",
    shortDescription: "AI-powered fashion styling platform delivering personalized outfit recommendations based on user preferences and fashion trends.",
    coverImage: "/stylemeup-preview.png", // Add your StyleMeUp preview image to frontend/public/stylemeup-preview.png
    techStack: ["HTML5", "CSS3", "JavaScript", "AI"],
    githubUrl: "https://github.com/Mehtarishita/StyleMeUp",
    liveUrl: "https://style-me-up.vercel.app/",
    overview: "", // [TO ADD LATER]
    problemStatement: "", // [TO ADD LATER]
    solution: "", // [TO ADD LATER]
    keyFeatures: [], // [TO ADD LATER]
    challenges: "", // [TO ADD LATER]
    learnings: "", // [TO ADD LATER]
    screenshots: [] // [TO ADD LATER]
  }
];
