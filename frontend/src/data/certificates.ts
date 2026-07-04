export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string; 
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "ethnus-mern",
    title: "Ethnus MERN Full Stack",
    issuer: "Ethnus",
    date: "July 2025",
    imageUrl: "", // [TO ADD LATER]
    credentialUrl: "" // [TO ADD LATER]
  },
  {
    id: "azure-dp900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "June 2025",
    imageUrl: "", // [TO ADD LATER]
    credentialUrl: "" // [TO ADD LATER]
  },
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "April 2025",
    imageUrl: "", // [TO ADD LATER]
    credentialUrl: "" // [TO ADD LATER]
  }
];
