import { jetbrainsMono } from "@/config/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Portfolio en desarrollo 🚀
      </h1>
      <div className={`${jetbrainsMono.className} bg-slate-900 p-4 rounded-lg border border-slate-800`}>
        <p className="text-sm text-cyan-400">
          console.log("Hola Mundo, soy JetBrains Mono");
        </p>
      </div>
    </main>
  );
}