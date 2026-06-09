import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, MapPin, Layers, Calendar, Sparkles, DollarSign, 
  TrendingUp, Award, MessageSquare, ArrowRight, Star, ChevronLeft, ChevronRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Navigation: Previous & Next Project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Find corresponding service if exists
  const associatedServiceSlug = project.servicesUsed[0];
  const associatedService = services.find((s) => s.slug === associatedServiceSlug || s.name === associatedServiceSlug);

  const getBudgetBadgeColor = (level: string) => {
    switch (level) {
      case "Premium": return "text-amber-500 bg-amber-500/10 border-amber-500/20";
      case "Alto": return "text-primary bg-primary/10 border-primary/20";
      case "Medio": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      default: return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    }
  };

  const getImpactBadgeColor = (level: string) => {
    switch (level) {
      case "Premium": return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Alto": return "text-red-500 bg-red-500/10 border-red-500/20";
      case "Medio": return "text-purple-500 bg-purple-500/10 border-purple-500/20";
      default: return "text-zinc-500 bg-zinc-500/10 border-zinc-500/20";
    }
  };

  const whatsAppMessage = `Hola Vektor Visual, estuve viendo el caso de éxito de *${project.name}* en su web y me interesaría cotizar una solución similar para mi negocio.`;
  const whatsAppLink = `https://wa.me/5491136458921?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="bg-background min-h-screen text-foreground pb-20">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Volver al Portfolio
        </Link>
      </div>

      {/* Main Grid: Header & Hero Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 space-y-8">
        
        {/* Project Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {project.industry}
            </span>
            <span className="bg-secondary border border-border text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {project.productType}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {project.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Image / Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border shadow-xl">
            <Image
              src={project.mainImage}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Spec Card Sidebar */}
            <div className="bg-card border border-border p-6 rounded-2xl space-y-5 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-3">
                Ficha Técnica del Proyecto
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-primary" />
                    Ubicación
                  </span>
                  <strong className="text-foreground text-sm block">{project.location}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Layers className="size-3.5 text-primary" />
                    Sustrato Principal
                  </span>
                  <strong className="text-foreground text-sm block line-clamp-1">{project.mainMaterial}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-primary" />
                    Año
                  </span>
                  <strong className="text-foreground text-sm block">{project.completedYear || "Reciente"}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-primary" />
                    Impacto Visual
                  </span>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mt-0.5 ${getImpactBadgeColor(project.impactLevel)}`}>
                    {project.impactLevel}
                  </span>
                </div>

                <div className="space-y-1 col-span-2 pt-2 border-t border-border/60">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <DollarSign className="size-3.5 text-primary" />
                    Presupuesto Referencial
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <strong className="text-foreground text-base">{project.estimatedBudget}</strong>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getBudgetBadgeColor(project.budgetLevel)}`}>
                      Rango {project.budgetLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="space-y-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded text-xs uppercase tracking-wider cursor-pointer transition-colors text-center"
              >
                <MessageSquare className="size-4" />
                Cotizar Proyecto Similar
              </a>
              {associatedService && (
                <Link
                  href={`/servicios/${associatedService.slug}#cotizar`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#713523] text-white font-heading font-medium py-3.5 px-4 rounded text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center shadow-[0_14px_30px_rgba(113,53,35,0.22)]"
                >
                  Solicitar Presupuesto Online
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Grid if secondary images exist */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {project.galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group">
                <Image
                  src={img}
                  alt={`${project.name} galería ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Case Details, Materials & Business Results */}
      <section className="bg-secondary/20 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Detailed description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Award className="size-5 text-primary" />
              Detalle del Trabajo Realizado
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.detailedDescription}
            </p>

            {/* Detailed Materials List */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Materiales e Insumos Utilizados
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((m, idx) => (
                  <span 
                    key={idx} 
                    className="bg-card text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-lg"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Testimonials column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Commercial Impact Box */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <TrendingUp className="size-4" />
                Impacto Comercial Obtenido
              </h3>
              <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                &ldquo;{project.results}&rdquo;
              </p>
            </div>

            {/* Testimonial Box if exists */}
            {project.testimonial && (
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 relative">
                <div className="flex items-center gap-1">
                  {[...Array(project.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{project.testimonial.comment}&rdquo;
                </p>

                <div className="pt-2 border-t border-border/60">
                  <strong className="text-xs text-foreground block">
                    {project.testimonial.clientName}
                  </strong>
                  <span className="text-[11px] text-muted-foreground">
                    {project.testimonial.company}
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Similar service connection CTA */}
      {associatedService && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-card border border-border p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex p-3 bg-primary/10 text-primary border border-primary/20 rounded-2xl">
              <Sparkles className="size-6" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                ¿Buscás una solución similar para tu local?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Podemos replicar este formato de {associatedService.name.toLowerCase()} adaptándolo a las medidas, 
                colores y necesidades estructurales de tu marca.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/servicios/${associatedService.slug}`}
                className="inline-flex items-center justify-center bg-transparent hover:bg-[#EAE3DA] border border-[#D6CDC2] hover:border-[#A8764F] text-[#2B2927] hover:text-[#713523] font-heading font-medium px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
              >
                Ver Servicio Técnico
              </Link>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#713523] text-white font-heading font-medium px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center shadow-[0_14px_30px_rgba(113,53,35,0.22)]"
              >
                <MessageSquare className="size-4" />
                Hablar con un Especialista
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Footer (Prev / Next Projects) */}
      <footer className="border-t border-border pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
        {prevProject ? (
          <Link 
            href={`/trabajos/${prevProject.slug}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-muted-foreground block">Anterior</span>
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">{prevProject.name}</span>
            </div>
            <span className="font-bold sm:hidden">Anterior</span>
          </Link>
        ) : (
          <div className="opacity-0 pointer-events-none" />
        )}

        {nextProject ? (
          <Link 
            href={`/trabajos/${nextProject.slug}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-muted-foreground block">Siguiente</span>
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">{nextProject.name}</span>
            </div>
            <span className="font-bold sm:hidden">Siguiente</span>
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="opacity-0 pointer-events-none" />
        )}
      </footer>

    </div>
  );
}
