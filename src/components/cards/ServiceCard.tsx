"use client";

import { Service } from "@/types/service";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically resolve Lucide Icon
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.HelpCircle;

  return (
    <div className="group relative bg-card hover:bg-card/95 border border-border hover:border-primary/40 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md tech-corner-box">
      {/* Decorative gradient corner on hover */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-tr-lg" />
      
      <div>
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-muted rounded-lg text-primary border border-border group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
            <IconComponent className="size-5 transition-transform group-hover:scale-110" />
          </div>
          <Badge variant="secondary" className="bg-muted text-primary uppercase text-[9px] tracking-wider font-bold border border-border">
            {service.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-heading">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Recommended Materials Quick List */}
        <div className="space-y-2 mb-6">
          <span className="text-[10px] font-bold text-foreground/80 tracking-widest uppercase block">
            Materiales Recomendados:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.recommendedMaterials.slice(0, 3).map((material, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground bg-muted/40 px-2.5 py-0.5 rounded border border-border"
              >
                <Check className="size-2.5 text-primary shrink-0" />
                <span className="truncate max-w-[150px]">{material}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info & Button */}
      <div className="border-t border-border pt-4 mt-auto">
        <div className="flex justify-between items-center mb-4 text-xs">
          <div>
            <span className="text-muted-foreground block text-[9px] uppercase tracking-wider">Desde</span>
            <span className="font-bold text-foreground text-sm">
              {service.startingPrice ? `USD ${service.startingPrice}` : "Consultar"}
            </span>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground block text-[9px] uppercase tracking-wider">Entrega</span>
            <span className="font-medium text-foreground">{service.estimatedDeliveryTime}</span>
          </div>
        </div>

        <Link
          href={`#presupuesto?servicio=${service.slug}`}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-secondary hover:bg-primary text-foreground hover:text-white border border-border hover:border-primary py-2 px-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-[0_8px_18px_rgba(17,17,17,0.12)]"
        >
          <span>Cotizar Ahora</span>
          <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
