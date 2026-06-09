import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";
import { Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-background border-t border-border relative bg-dot-printy">
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="size-3 text-primary" />
            <span>Nuestras Capacidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-heading">
            Servicios de Cartelería & Branding Físico
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Ofrecemos un catálogo completo de soluciones de señalética y comunicación exterior. 
            Trabajamos con ingeniería estructural y la última tecnología en corte y ensamble de materiales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
