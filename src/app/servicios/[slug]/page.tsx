import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Compass, Sparkles, Check, ChevronRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import BudgetForm from "@/components/forms/BudgetForm";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Helper to get Lucide Icons dynamically
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    if (IconComponent) {
      return <IconComponent className="size-6 text-primary" />;
    }
    return <Sparkles className="size-6 text-primary" />;
  };

  // Get related service objects
  const relatedServicesData = services.filter((s) => 
    service.relatedServices.includes(s.slug)
  );

  const directWhatsAppLink = `https://wa.me/5491136458921?text=${encodeURIComponent(
    `Hola Vektor Visual, estoy interesado en cotizar el servicio de *${service.name}* y me gustaría hacer algunas consultas.`
  )}`;

  return (
    <div className="bg-background min-h-screen text-foreground pb-20">
      
      {/* Back Button and Path (Breadcrumb) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/#servicios" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Volver a Servicios
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-widest uppercase">
            {renderIcon(service.icon)}
            <span>{service.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {service.name}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {service.detailedDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#cotizar"
              className="inline-flex items-center justify-center bg-primary hover:bg-[#713523] text-white font-heading font-medium px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center shadow-[0_14px_30px_rgba(113,53,35,0.22)]"
            >
              Solicitar Cotización Técnica
            </a>
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#EAE3DA] border border-[#D6CDC2] hover:border-[#A8764F] text-[#2B2927] hover:text-[#713523] font-heading font-medium px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
            >
              <MessageSquare className="size-4" />
              Contacto WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
          <Image
            src={service.mainImage}
            alt={service.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      </section>

      {/* Tech Grid (Specs, Materials, Uses) */}
      <section className="bg-secondary/30 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Specs */}
          <div className="bg-card border border-border/80 p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              Especificaciones
            </h3>
            <ul className="space-y-3.5 text-xs text-muted-foreground pt-1">
              <li className="flex justify-between border-b border-border/40 pb-2">
                <span>Tiempo de entrega:</span>
                <strong className="text-foreground">{service.estimatedDeliveryTime}</strong>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-2">
                <span>Rango de inversión:</span>
                <strong className="text-foreground">{service.priceRange || "Medio"}</strong>
              </li>
              {service.startingPrice && (
                <li className="flex justify-between pb-1">
                  <span>Precio base sugerido:</span>
                  <strong className="text-primary font-bold">Desde ${service.startingPrice} USD</strong>
                </li>
              )}
            </ul>
          </div>

          {/* Box 2: Recommended Materials */}
          <div className="bg-card border border-border/80 p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Tag className="size-4 text-primary" />
              Materiales Sugeridos
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground pt-1">
              {service.recommendedMaterials.map((mat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Common Use Cases */}
          <div className="bg-card border border-border/80 p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Compass className="size-4 text-primary" />
              Casos de Uso
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground pt-1">
              {service.recommendedUseCases.map((use, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Benefits and Value Prop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Beneficios Clave del Servicio
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Por qué elegir nuestra ingeniería de diseño para la identidad física de tu local o edificio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4 p-5 rounded-xl bg-card border border-border/60">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                <Check className="size-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">
                  Garantía de Calidad Vektor
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Process Timeline */}
      <section className="dark bg-background border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Nuestro Proceso de Producción
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Desde el boceto digital inicial hasta la colocación e instalación final en altura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {service.productionProcess.map((step, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-xl space-y-4 relative">
                <div className="absolute top-4 right-4 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  Paso 0{idx + 1}
                </div>
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {idx + 1}
                </div>
                <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Budget Form Section */}
      <section id="cotizar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Solicita Presupuesto para {service.name}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Completa la información técnica de tu cartel para que diseñemos una cotización y render adaptados.
          </p>
        </div>
        
        <BudgetForm initialServiceSlug={service.slug} />
      </section>

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <section className="bg-card/30 border-t border-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-foreground mb-8 text-center sm:text-left">
              Servicios Relacionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedServicesData.map((rel) => (
                <Link 
                  href={`/servicios/${rel.slug}`} 
                  key={rel.slug}
                  className="group block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="p-2.5 bg-secondary rounded-lg border border-border group-hover:border-primary/20 transition-colors">
                      {renderIcon(rel.icon)}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                      {rel.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-primary font-bold uppercase tracking-wider mt-4">
                    Ver servicio
                    <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
