export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string; 
  credentialUrl: string;
  certificateUrl?: string;
  credentialId?: string;
}

export const certificates: Certificate[] = [
  {
    id: "ethnus-mern",
    title: "Ethnus MERN Full Stack",
    issuer: "Ethnus",
    date: "July 2025",
    imageUrl: "/ethnus-logo.jpg", // Add the Ethnus logo image to frontend/public/ethnus-logo.jpg
    credentialUrl: "https://ethnus.com/certverify",
    certificateUrl: "/ethnus-certificate.pdf", // Add your Ethnus certificate PDF to frontend/public/ethnus-certificate.pdf
    credentialId: "W5C73WG7"
  },
  {
    id: "azure-dp900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "June 2025",
    imageUrl: "/azure-logo.jpg", // The Azure logo image is now here
    credentialUrl: "" // [TO ADD LATER]
  },
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "April 2025",
    imageUrl: "/nptel-logo.jpg", // Add the NPTEL logo image to frontend/public/nptel-logo.jpg
    credentialUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc25-cs46",
    certificateUrl: "/nptel-certificate.pdf" // Assuming the file will be named nptel-certificate.pdf and placed in the public folder
  }
];
