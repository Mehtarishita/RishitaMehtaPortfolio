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
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import {
  Database,
  Code,
  Cpu,
  Network,
  Boxes,
  Brain,
  Cloud,
  Layout,
  Workflow,
  Server,
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: IconType | React.ComponentType<{ size?: number; className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: Database },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "C++", icon: SiCplusplus },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Design", icon: Layout },
      { name: "Framer Motion", icon: SiFramer },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Server },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ]
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: Code },
      { name: "DBMS", icon: Database },
      { name: "Operating Systems", icon: Cpu },
      { name: "Computer Networks", icon: Network },
      { name: "OOP", icon: Boxes },
    ]
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "System Design", icon: Workflow },
      { name: "Generative AI", icon: Brain },
      { name: "Cloud Computing", icon: Cloud },
    ]
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ]
  }
];
