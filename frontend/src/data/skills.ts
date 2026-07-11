import type { IconType } from 'react-icons';
import {
  SiJavascript,
  SiPython,
  SiHtml5,

  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaAws } from 'react-icons/fa';
import {
  Database,
  Code,
  Cpu,
  Network,
  Boxes,
  Brain,
  Layout,
  Workflow,
  Server,
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: IconType | React.ComponentType<{ size?: number; className?: string; color?: string }>;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: Database, color: "#336791" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Responsive Design", icon: Layout, color: "#E2E8F0" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: Server, color: "#E2E8F0" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: Code, color: "#22D3EE" },
      { name: "DBMS", icon: Database, color: "#818CF8" },
      { name: "Operating Systems", icon: Cpu, color: "#34D399" },
      { name: "Computer Networks", icon: Network, color: "#F472B6" },
      { name: "OOP", icon: Boxes, color: "#A78BFA" },
    ]
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "System Design", icon: Workflow, color: "#38BDF8" },
      { name: "Generative AI", icon: Brain, color: "#C084FC" },
      { name: "AWS (EC2, S3, IAM)", icon: FaAws, color: "#FF9900" },
    ]
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    ]
  }
];
