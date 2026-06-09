import { Factory } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Relevamiento de Campo",
      desc: "Visitamos tu local para relevar medidas exactas, tomas de corriente, ángulos de visión y tipo de mampostería soporte.",
    },
    {
      num: "02",
      title: "Diseño & Fotomontaje 3D",
      desc: "Creamos un modelado digital a escala para que observes en un render fotorrealista cómo quedará tu fachada antes de producir.",
    },
    {
      num: "03",
      title: "Presupuesto & Ingeniería",
      desc: "Definimos planos de detalle de la estructura interna, espesores de chapa, módulos LED y cotización final transparente.",
    },
    {
      num: "04",
      title: "Corte Láser & CNC Router",
      desc: "Cortamos chapas, acrílicos y polifan con tecnología láser de fibra óptica y fresas CNC de precisión milimétrica.",
    },
    {
      num: "05",
      title: "Plegado, Soldadura & Pintura",
      desc: "Damos volumen a los cantos, soldamos las uniones con soldadura de microalambre y pintamos con lacas poliuretánicas anticorrosivas.",
    },
    {
      num: "06",
      title: "Iluminación & Cableado LED",
      desc: "Montamos módulos LED IP65/IP67 de alta eficiencia, calculando la disipación térmica y balanceando las cargas eléctricas.",
    },
    {
      num: "07",
      title: "Control de Calidad (Test 24h)",
      desc: "Sometemos el cartel a una prueba de encendido continuo de 24 horas para certificar la estabilidad de transformadores y diodos.",
    },
    {
      num: "08",
      title: "Logística & Montaje Habilitado",
      desc: "Transportamos el cartel en embalaje protegido e instalamos en altura mediante operarios certificados con seguros ART vigentes.",
    },
  ];

  return (
    <section id="proceso" className="dark py-24 bg-background border-t border-border relative bg-dot-printy">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
            <Factory className="size-3 text-primary" />
            <span>Ingeniería de Producción</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-heading">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Desde el primer boceto hasta el ajuste final del último tornillo a 10 metros de altura, 
            controlamos cada etapa para garantizar un acabado industrial premium y seguro.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-card border border-border hover:border-primary/30 p-6 rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-lg tech-corner-box"
            >
              {/* Number overlay */}
              <span className="text-7xl font-heading font-black text-primary/5 group-hover:text-primary/15 absolute -top-4 -right-2 transition-colors duration-300 pointer-events-none select-none">
                {step.num}
              </span>

              <div className="space-y-3 relative z-10 pt-4">
                <span className="text-accent font-bold text-[10px] tracking-widest uppercase block">
                  Paso {step.num}
                </span>
                <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
