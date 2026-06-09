"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { Heart, Maximize2, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFavoritesStore } from "@/store/favorites-store";
import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const mounted = useMounted();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFav = mounted ? favorites.includes(project.slug) : false;

  // Helper for budget colors
  const getBudgetBadgeVariant = (level: string) => {
    switch (level) {
      case "Premium":
        return "bg-accent/15 text-accent border border-accent/25";
      case "Alto":
        return "bg-primary/15 text-primary border border-primary/25";
      case "Medio":
        return "bg-blue-500/15 text-blue-600 border border-blue-500/25";
      default:
        return "bg-emerald-500/15 text-emerald-600 border border-emerald-500/25";
    }
  };

  return (
    <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-md hover:border-primary/30 hover:-translate-y-1">
      {/* Background Image */}
      <Image
        src={project.mainImage}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
        loading="lazy"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/45" />

      {/* Floating Badges (Top Left) */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-[9px] font-bold tracking-wider uppercase border border-white/10 px-2 py-0.5">
          {project.industry}
        </Badge>
        {project.impactLevel === "Premium" && (
          <Badge variant="default" className="bg-primary text-white text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 px-2 py-0.5 border border-primary/20">
            <Sparkles className="size-2.5" />
            Premium
          </Badge>
        )}
      </div>

      {/* Favorite Heart Button (Top Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(project.slug);
        }}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:text-red-500 active:scale-90 transition-all cursor-pointer"
        aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <Heart
          className={`size-4 transition-transform duration-200 ${
            isFav ? "fill-red-500 text-red-500 scale-110" : "text-white"
          }`}
        />
      </button>

      {/* Content Overlay (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end z-10">
        {/* Subtitle / Product Type */}
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">
          {project.productType}
        </span>

        {/* Project Name */}
        <Link href={`/trabajos/${project.slug}`} className="block">
          <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors cursor-pointer font-heading">
            {project.name}
          </h3>
        </Link>

        {/* Location & Year info */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-medium">
          <div className="flex items-center gap-1">
            <MapPin className="size-3 text-muted-foreground/60" />
            <span>{project.location}</span>
          </div>
          <span>•</span>
          <span>{project.completedYear || "Reciente"}</span>
        </div>

        {/* Expand / Details and Specs - revealed on hover/focus */}
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden space-y-3 pt-2 border-t border-white/10">
          {/* Material & Budget */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-bold text-[#A7A29A]">
              Sustrato: <strong className="text-white">{project.mainMaterial}</strong>
            </span>
            <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${getBudgetBadgeVariant(project.budgetLevel)}`}>
              Inversión {project.budgetLevel}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {onViewDetails && (
              <button
                onClick={() => onViewDetails(project)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-secondary/90 hover:bg-secondary text-foreground py-2 px-3 rounded text-[10px] font-bold uppercase tracking-wider border border-border hover:border-border transition-all duration-200 cursor-pointer"
              >
                <span>Vista Rápida</span>
                <Maximize2 className="size-3" />
              </button>
            )}
            <Link
              href={`/trabajos/${project.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-[#713523] text-white py-2 px-3 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-[0_6px_16px_rgba(17,17,17,0.15)]"
            >
              <span>Ficha Técnica</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
