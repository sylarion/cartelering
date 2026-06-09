"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import {
  Heart,
  Maximize2,
  MapPin,
  Sparkles,
  ArrowRight,
  Layers3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFavoritesStore } from "@/store/favorites-store";
import { useMounted } from "@/hooks/use-mounted";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  const mounted = useMounted();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFav = mounted ? favorites.includes(project.slug) : false;

  const getBudgetBadgeVariant = (level: string) => {
    switch (level) {
      case "Premium":
        return "bg-[#A8764F]/15 text-[#A8764F] border border-[#A8764F]/25";
      case "Alto":
        return "bg-primary/15 text-primary border border-primary/25";
      case "Medio":
        return "bg-[#6F6A64]/12 text-[#6F6A64] border border-[#6F6A64]/18";
      default:
        return "bg-emerald-600/10 text-emerald-700 border border-emerald-600/18";
    }
  };

  return (
    <article className="group relative aspect-[4/3] overflow-hidden rounded-[26px] border border-[#DED4C9] bg-white shadow-[0_18px_45px_rgba(17,17,17,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_60px_rgba(17,17,17,0.13)]">
      {/* Image */}
      <Image
        src={project.mainImage}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.065]"
        loading="lazy"
      />

      {/* Premium image treatment */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/36 to-black/8 transition-all duration-500 group-hover:from-black/92 group-hover:via-black/42" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_34%)] opacity-60" />

      {/* Top shine */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

      {/* Floating badges */}
      <div className="absolute left-4 top-4 z-10 flex max-w-[72%] flex-wrap gap-2">
        <Badge
          variant="secondary"
          className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/88 backdrop-blur-md"
        >
          {project.industry}
        </Badge>

        {project.impactLevel === "Premium" && (
          <Badge
            variant="default"
            className="rounded-full border border-primary/25 bg-primary px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            <Sparkles className="mr-1 size-2.5" />
            Premium
          </Badge>
        )}
      </div>

      {/* Favorite */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(project.slug);
        }}
        className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-all duration-200 hover:border-white/25 hover:bg-white/12 hover:text-red-400 active:scale-90"
        aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <Heart
          className={`size-4 transition-all duration-200 ${
            isFav ? "scale-110 fill-red-500 text-red-500" : "text-white"
          }`}
        />
      </button>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <div className="space-y-3">
          {/* Product type */}
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">
              <Layers3 className="size-3" />
              {project.productType}
            </span>

            <span
              className={`hidden rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.10em] sm:inline-flex ${getBudgetBadgeVariant(
                project.budgetLevel,
              )}`}
            >
              {project.budgetLevel}
            </span>
          </div>

          {/* Title */}
          <Link href={`/trabajos/${project.slug}`} className="block">
            <h3 className="font-heading text-lg font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-[#F6D1BF]">
              {project.name}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/68">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary" />
              <span>{project.location}</span>
            </div>

            <span className="text-white/25">•</span>

            <span>{project.completedYear || "Reciente"}</span>
          </div>

          {/* Hover panel */}
          <div className="grid max-h-0 gap-3 overflow-hidden border-t border-white/10 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:pt-3 group-hover:opacity-100">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.075] px-3 py-2 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/52">
                Material
              </span>

              <span className="text-[11px] font-extrabold text-white">
                {project.mainMaterial}
              </span>
            </div>

            <div className="flex gap-2">
              {onViewDetails && (
                <button
                  onClick={() => onViewDetails(project)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/10 px-3 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.10em] text-white backdrop-blur-md transition-all duration-200 hover:border-white/25 hover:bg-white/16"
                >
                  <span>Vista rápida</span>
                  <Maximize2 className="size-3" />
                </button>
              )}

              <Link
                href={`/trabajos/${project.slug}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.10em] text-white shadow-[0_10px_24px_rgba(17,17,17,0.22)] transition-all duration-200 hover:bg-[#743A28]"
              >
                <span>Ficha técnica</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/10" />
    </article>
  );
}
