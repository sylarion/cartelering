"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Factory, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { useMounted } from "@/hooks/use-mounted";

export default function HeroSection() {
  const mounted = useMounted();

  const trustIndicators = [
    { 
      icon: Sparkles, 
      metric: "+120", 
      title: "Proyectos Instalados", 
      desc: "Casos de éxito y marquesinas de alta gama." 
    },
    { 
      icon: ShieldCheck, 
      metric: "12 Meses", 
      title: "Garantía Escrita", 
      desc: "Cobertura total en estructura e iluminación." 
    },
    { 
      icon: Factory, 
      metric: "100% Propia", 
      title: "Producción & Montaje", 
      desc: "Equipo técnico habilitado con seguro ART." 
    },
    { 
      icon: Layers, 
      metric: "Corporativo", 
      title: "Atención a Empresas", 
      desc: "Diseño aplicado a marca y planos técnicos." 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-28 pb-16 bg-background bg-grid-printy"
    >
      {/* Background Gradients and Light Effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle neutral glow — not primary-colored */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/[0.025] rounded-full blur-[160px] pointer-events-none" />
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-printy pointer-events-none" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        {mounted ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: "rgba(158, 79, 53, 0.055)",
                  border: "1px solid rgba(158, 79, 53, 0.18)",
                  color: "#9E4F35"
                }}
              >
                <Sparkles className="size-3" style={{ color: "#9E4F35" }} />
                <span>CARTELERÍA · BRANDING FÍSICO · PRODUCCIÓN VISUAL</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.08]"
              >
                Diseñamos presencia visual para marcas que necesitan{" "}
                <span className="text-primary">
                  destacar.
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Diseño, fabricación e instalación de carteles, letras corpóreas, marquesinas, vinilos y señalética para negocios, empresas y espacios comerciales.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href="/#presupuesto"
                 className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-primary hover:bg-[#713523] text-white font-heading font-medium h-12 px-8 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-[0_14px_30px_rgba(113,53,35,0.22)] border border-primary/80"
                  )}
                >
                  Solicitar Presupuesto
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/#portfolio"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "bg-transparent hover:bg-[#EAE3DA] border border-[#D6CDC2] hover:border-[#A8764F] text-[#2B2927] hover:text-[#713523] font-heading font-medium h-12 px-8 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  )}
                >
                  Explorar proyectos
                </Link>
              </motion.div>
            </div>
            {/* Hero Media Mockup */}
            <motion.div 
              variants={mediaVariants}
              className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="relative border border-[#D6CDC2] p-2 rounded-2xl bg-card shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
                {/* Blueprint Corners */}
                <div className="absolute inset-0 border border-border pointer-events-none rounded-2xl tech-corner-box" />
                
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[5/6] rounded-lg overflow-hidden border border-border">
                  {/* Subtle gradient overlay — no primary tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent z-10 pointer-events-none" />
 
                  <Image
                    src="/img-marquesina-led.png"
                    alt="Marquesina comercial con letras corpóreas LED — Vektor Visual"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover select-none transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating Tech Spec Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-primary backdrop-blur-md border border-primary/30 rounded-md px-2.5 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">
                    ESTRUCTURA ACM / CORTE CNC
                  </div>
 
                  {/* Inner Floating Status Info */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-card/95 backdrop-blur-md border border-border rounded-lg p-3.5 flex items-center justify-between shadow-md">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-primary font-bold uppercase tracking-wider block">
                        Último Caso de Éxito
                      </span>
                      <span className="text-xs font-bold text-foreground block">
                        Boutique Aura - Fachada ACM & Neón
                      </span>
                    </div>
                    <Link 
                      href="/#portfolio" 
                      className="p-2 rounded-md bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-colors"
                      aria-label="Ver proyecto Boutique Aura"
                    >
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Server Rendering Placeholder / Fallback to prevent Layout Shift */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="w-64 h-6 bg-secondary/80 rounded-full animate-pulse mx-auto lg:mx-0" />
              <div className="h-16 w-full bg-secondary/80 rounded animate-pulse" />
              <div className="h-12 w-3/4 bg-secondary/80 rounded animate-pulse mx-auto lg:mx-0" />
              <div className="flex justify-center lg:justify-start gap-4">
                <div className="w-40 h-12 bg-secondary/80 rounded animate-pulse" />
                <div className="w-40 h-12 bg-secondary/80 rounded animate-pulse" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[5/6] w-full bg-secondary/80 rounded-2xl animate-pulse" />
            </div>
          </div>
        )}

        {/* Confidence Band (Metrics) */}
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 border-t border-border pt-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group bg-card border border-border hover:border-primary/30 p-5 rounded-lg transition-all duration-300 tech-corner-box shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-black text-foreground tracking-tight block">
                          {item.metric}
                        </span>
                        <span className="text-[11px] text-muted-foreground font-bold block mt-0.5 tracking-wide uppercase">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
