import Image from "next/image";
import { Testimonial } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border hover:border-primary/30 p-6 rounded-lg relative shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-4 text-muted/10 group-hover:text-primary/10 transition-colors duration-300">
        <Quote className="size-10 rotate-180" />
      </div>

      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex space-x-1" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${
                i < testimonial.rating
                  ? "fill-accent text-accent"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-sm text-foreground/90 leading-relaxed italic relative z-10">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-border/60">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.clientName}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover border border-border group-hover:border-primary/40 transition-colors duration-300"
          />
        ) : (
          <div className="size-11 rounded-full bg-secondary flex items-center justify-center font-bold text-primary border border-border">
            {testimonial.clientName.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-sm font-bold text-foreground leading-tight">
            {testimonial.clientName}
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            {testimonial.role} en <span className="text-foreground/80 font-medium">{testimonial.company}</span>
          </p>
          <span className="inline-block bg-primary/10 text-primary text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded mt-1.5 border border-primary/20">
            {testimonial.serviceName}
          </span>
        </div>
      </div>
    </div>
  );
}
