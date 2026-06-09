import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vektor Visual | Cartelería Profesional Premium",
  description: "Diseño, fabricación e instalación de carteles luminosos, letras corpóreas, marquesinas y señalética industrial de alto impacto.",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-white font-sans">
        <Header />
        <main className="flex-grow pt-[73px] md:pt-[81px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
