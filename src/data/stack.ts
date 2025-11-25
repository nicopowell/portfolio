// src/data/stack.ts
import { 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGit, 
  SiDocker, 
  SiLinux
} from "react-icons/si";

export const TECH_STACK = [
  // Lenguajes Core
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" }, // Blanco para Dark Mode
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  
  // Backend & Tools
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];