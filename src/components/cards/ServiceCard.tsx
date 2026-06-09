"use client";

import { Service } from "@/types/service";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent =
    (
      Icons as unknown as Record<
        string,
        React.ComponentType<{ className?: string }>
      >
    )[service.icon] || Icons.HelpCircle;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-4 border border-[#DED4C9] hover:border-primary/50 shadow-[0_12px_28px_rgba(17,17,17,0.04)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(17,17,17,0.09)]">
      {/* Contenedor de Imagen de portada del servicio */}
      <div className="relative h-40 w-full overflow-hidden rounded-[14px] mb-3 bg-muted border border-border/40">
        <Image
          src={service.mainImage}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Degradado para mejorar lectura de badges flotantes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

        {/* Icono flotante */}
        <div className="absolute top-2.5 left-2.5 z-10 flex size-8 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white backdrop-blur-md">
          <IconComponent className="size-4" />
        </div>

        {/* Categoría flotante */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <Badge
            variant="secondary"
            className="rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.10em] text-white backdrop-blur-md"
          >
            {service.category}
          </Badge>
        </div>
      </div>

      {/* Glow suave */}
      <div className="pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-primary/10 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col flex-grow">
        {/* Title */}
        <div className="mb-2">
          <span className="mb-0.5 block text-[8px] font-extrabold uppercase tracking-[0.12em] text-primary">
            Servicio técnico
          </span>

          <h3 className="font-heading text-[15px] font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {service.name}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-3 line-clamp-3 text-[12px] leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>

        {/* Materials */}
        <div className="mt-auto mb-3 rounded-xl border border-border bg-[#FAF8F5] p-2.5">
          <span className="mb-1.5 block text-[8.5px] font-extrabold uppercase tracking-[0.10em] text-foreground/75">
            Materiales
          </span>

          <div className="flex flex-wrap gap-1">
            {service.recommendedMaterials.slice(0, 3).map((material, idx) => (
              <span
                key={idx}
                className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-white px-2 py-0.5 text-[9px] font-bold text-muted-foreground"
              >
                <Check className="size-2.5 shrink-0 text-primary" />
                <span className="truncate max-w-[110px]">{material}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/70 pt-3">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-border bg-white px-2.5 py-1.5">
              <span className="block text-[8px] font-extrabold uppercase tracking-[0.10em] text-muted-foreground">
                Desde
              </span>

              <span className="mt-0.5 block text-[13px] font-extrabold text-foreground">
                {service.startingPrice
                  ? `USD ${service.startingPrice}`
                  : "Consultar"}
              </span>
            </div>

            <div className="rounded-xl border border-border bg-white px-2.5 py-1.5 text-right">
              <span className="block text-[8px] font-extrabold uppercase tracking-[0.10em] text-muted-foreground">
                Entrega
              </span>

              <span className="mt-0.5 block text-[11px] font-extrabold text-foreground">
                {service.estimatedDeliveryTime}
              </span>
            </div>
          </div>

          <Link
            href={`/#presupuesto?servicio=${service.slug}`}
            className="relative inline-flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-primary px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.10em] text-white shadow-[0_8px_20px_rgba(116,58,40,0.16)] transition-all duration-300 hover:bg-[#743A28] hover:shadow-[0_10px_24px_rgba(116,58,40,0.22)] active:scale-[0.98] before:absolute before:inset-y-0 before:left-[-40%] before:w-[35%] before:skew-x-[-18deg] before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[120%] hover:before:opacity-100"
          >
            <span className="relative z-10">Cotizar ahora</span>
            <ArrowRight className="relative z-10 size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
