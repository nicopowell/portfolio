import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex justify-center">
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col items-start gap-6">
        
        <Badge>Disponible para trabajar</Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-slate-100">
          Nicolas Powell
          <span className="text-indigo-400 block mt-2">
            Estudiante de Ingeniería <br className="hidden md:block" /> en Informática
          </span>
        </h1>

        <p className="font-mono text-lg text-slate-400 max-w-2xl text-balance leading-relaxed">
          Estudiante apasionado por la tecnología. Integrando conocimientos de bajo nivel (C++,
          Sistemas) con desarrollo web moderno (Next.js) para construir software eficiente y
          escalable.
        </p>

        <div className="flex gap-4 pt-4">
          <Button href="#proyectos">Ver Proyectos</Button>
          <Button variant="outline" href="mailto:nicopowell30@gmail.com" ><Mail className="size-5 mr-4"/>Contactar</Button>
        </div>
      </div>
    </section>
  );
};