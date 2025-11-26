import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, 
  SiGit, SiDocker, SiLinux,
  SiNodedotjs, SiSupabase
} from "react-icons/si";

export const STACK = {
  languages: [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  ],
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    // Si usas Framer Motion, agrégalo aquí
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
  ]
};