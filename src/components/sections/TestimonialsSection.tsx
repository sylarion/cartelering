import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-background border-t border-border relative bg-dot-printy">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
            <MessageSquare className="size-3 text-primary" />
            <span>Opiniones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-heading">
            Qué Dicen Nuestros Clientes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            La satisfacción de las marcas que confían en nosotros es nuestro mejor aval. 
            Conoce las opiniones de locales y corporaciones tras instalar sus carteles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
