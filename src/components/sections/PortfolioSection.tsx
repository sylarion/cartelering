"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import ProjectCard from "@/components/cards/ProjectCard";
import PortfolioFilters from "@/components/filters/PortfolioFilters";
import { Sparkles, Calendar, Layers, MapPin, X, Flame, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function PortfolioSection() {
  const [activeIndustry, setActiveIndustry] = useState("Todos");
  const [activeLocation, setActiveLocation] = useState("Todos");
  const [activeBudget, setActiveBudget] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique filters
  const industries = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.industry)));
  }, []);

  const locations = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.location)));
  }, []);

  const budgets = useMemo(() => {
    return ["Económico", "Medio", "Alto", "Premium"];
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchIndustry =
        activeIndustry === "Todos" || project.industry === activeIndustry;
      const matchLocation =
        activeLocation === "Todos" || project.location === activeLocation;
      const matchBudget =
        activeBudget === "Todos" || project.budgetLevel === activeBudget;

      return matchIndustry && matchLocation && matchBudget;
    });
  }, [activeIndustry, activeLocation, activeBudget]);

  const handleResetFilters = () => {
    setActiveIndustry("Todos");
    setActiveLocation("Todos");
    setActiveBudget("Todos");
  };

  return (
    <section id="portfolio" className="py-24 bg-background relative bg-dot-printy">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
              <Flame className="size-3 text-primary" />
              <span>Casos de Éxito</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-heading">
              Nuestros Proyectos Realizados
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explora nuestra galería de trabajos instalados. Filtra por rubro de negocio, 
              ubicación de la cartelería o el nivel de inversión para encontrar ideas para tu marca.
            </p>
          </div>
        </div>

        {/* Filters Panel */}
        <div className="mb-10">
          <PortfolioFilters
            activeIndustry={activeIndustry}
            setActiveIndustry={setActiveIndustry}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
            activeBudget={activeBudget}
            setActiveBudget={setActiveBudget}
            industries={industries}
            locations={locations}
            budgets={budgets}
          />
        </div>

        {/* Results Counter / Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-muted-foreground">
          <span>
            Mostrando <strong>{filteredProjects.length}</strong> de{" "}
            <strong>{projects.length}</strong> proyectos realizados
          </span>
          {(activeIndustry !== "Todos" || activeLocation !== "Todos" || activeBudget !== "Todos") && (
            <button
              onClick={handleResetFilters}
              className="text-primary hover:underline font-semibold cursor-pointer"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Projects Grid with Framer Motion Layout animations */}
        <motion.div layout className="min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={setSelectedProject}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-card border border-border rounded-lg p-12 text-center space-y-4 max-w-md mx-auto shadow-sm"
              >
                <div className="flex justify-center text-muted-foreground/50">
                  <SearchX className="size-12" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  No se encontraron proyectos que coincidan con la combinación de filtros seleccionados.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetFilters}
                  className="border-border hover:bg-muted text-xs font-semibold cursor-pointer rounded"
                >
                  Restablecer todos los filtros
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-card border border-border max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 my-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black border border-border flex items-center justify-center text-white hover:text-primary transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="size-4" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-video w-full">
              <Image
                src={selectedProject.mainImage}
                alt={selectedProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-primary/20">
                  {selectedProject.industry}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border border-border">
                  {selectedProject.productType}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {selectedProject.name}
                </h3>
                
                {/* Tech Specs */}
                <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-1 text-xs text-muted-foreground border-b border-border/60 pb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" />
                    <span>Ubicación: <strong className="text-foreground">{selectedProject.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="size-4 text-primary" />
                    <span>Sustrato: <strong className="text-foreground">{selectedProject.mainMaterial}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-primary" />
                    <span>Año: <strong className="text-foreground">{selectedProject.completedYear || "Reciente"}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="size-4 text-primary" />
                    <span>Inversión: <strong className="text-foreground">{selectedProject.budgetLevel}</strong></span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Detalle del Proyecto
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Call to Action in Modal */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-border/60">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  ¿Te interesa un trabajo similar? Revisa la ficha técnica completa.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link
                    href={`/trabajos/${selectedProject.slug}`}
                    className="inline-flex items-center justify-center bg-secondary hover:bg-[#EAE3DA] text-foreground border border-border hover:border-[#A8764F] px-5 py-2.5 rounded text-xs font-heading font-medium tracking-wide cursor-pointer transition-colors text-center"
                    onClick={() => setSelectedProject(null)}
                  >
                    Ver Ficha Técnica
                  </Link>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-[#743A28] text-white font-heading font-medium px-6 py-2.5 rounded text-xs uppercase tracking-wide cursor-pointer shadow-[0_10px_24px_rgba(116,58,40,0.20)] transition-all duration-300"
                    onClick={() => {
                      setSelectedProject(null);
                      window.location.hash = "#presupuesto";
                    }}
                  >
                    Consultar sobre este proyecto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
