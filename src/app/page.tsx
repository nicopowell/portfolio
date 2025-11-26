import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <TechStack />
    </main>
  );
}