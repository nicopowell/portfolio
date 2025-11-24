import type { Metadata } from "next";
import { geistMono, geistSans } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Powell | Estudiante de Ingeniería en Informática",
  description: "Portfolio de Estudiante de Ingeniería en Informática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}