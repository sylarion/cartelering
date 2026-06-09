import {
  Factory,
  MapPinned,
  Cuboid,
  ClipboardCheck,
  Scissors,
  Paintbrush,
  Lightbulb,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: MapPinned,
      title: "Relevamiento de Campo",
      desc: "Visitamos tu local para relevar medidas exactas, tomas de corriente, ángulos de visión y tipo de mampostería soporte.",
    },
    {
      num: "02",
      icon: Cuboid,
      title: "Diseño & Fotomontaje 3D",
      desc: "Creamos un modelado digital a escala para que observes en un render fotorrealista cómo quedará tu fachada antes de producir.",
    },
    {
      num: "03",
      icon: ClipboardCheck,
      title: "Presupuesto & Ingeniería",
      desc: "Definimos planos de detalle de la estructura interna, espesores de chapa, módulos LED y cotización final transparente.",
    },
    {
      num: "04",
      icon: Scissors,
      title: "Corte Láser & CNC Router",
      desc: "Cortamos chapas, acrílicos y polifan con tecnología láser de fibra óptica y fresas CNC de precisión milimétrica.",
    },
    {
      num: "05",
      icon: Paintbrush,
      title: "Plegado, Soldadura & Pintura",
      desc: "Damos volumen a los cantos, soldamos las uniones con soldadura de microalambre y pintamos con lacas poliuretánicas anticorrosivas.",
    },
    {
      num: "06",
      icon: Lightbulb,
      title: "Iluminación & Cableado LED",
      desc: "Montamos módulos LED IP65/IP67 de alta eficiencia, calculando la disipación térmica y balanceando las cargas eléctricas.",
    },
    {
      num: "07",
      icon: ShieldCheck,
      title: "Control de Calidad (Test 24h)",
      desc: "Sometemos el cartel a una prueba de encendido continuo de 24 horas para certificar la estabilidad de transformadores y diodos.",
    },
    {
      num: "08",
      icon: Truck,
      title: "Logística & Montaje Habilitado",
      desc: "Transportamos el cartel en embalaje protegido e instalamos en altura mediante operarios certificados con seguros ART vigentes.",
    },
  ];

  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-t border-border bg-[#F6F2EC] py-16 sm:py-20 lg:py-24"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,90,61,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,90,61,0.07),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-1/2 top-24 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A85A3D]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
            <Factory className="size-3.5" />
            <span>Ingeniería de Producción</span>
          </div>

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.08]">
            Un proceso pensado para fabricar carteles que duren
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Desde el primer boceto hasta el ajuste final del último tornillo,
            controlamos cada etapa para lograr una terminación industrial,
            segura y visualmente premium.
          </p>
        </div>

        {/* Process rail */}
        <div className="mb-8 hidden items-center justify-center lg:flex">
          <div className="flex items-center gap-3 rounded-full border border-[#D9CFC3] bg-white/70 px-5 py-2.5 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur-sm">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">
              Relevamiento
            </span>
            <span className="h-px w-12 bg-[#D6CDC2]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6F6A64]">
              Diseño
            </span>
            <span className="h-px w-12 bg-[#D6CDC2]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6F6A64]">
              Fabricación
            </span>
            <span className="h-px w-12 bg-[#D6CDC2]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6F6A64]">
              Instalación
            </span>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.num}
                className="group relative overflow-hidden rounded-[24px] border border-[#DED4C9] bg-white/88 p-5 shadow-[0_18px_45px_rgba(17,17,17,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_50px_rgba(17,17,17,0.10)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute -right-10 -top-10 size-24 rounded-full bg-primary/8 blur-3xl opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
                      Paso {step.num}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-xl border border-[#E6DDD3] bg-[#FAF7F2] text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-[15px] font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#DED4C9] bg-white/78 p-5 text-center shadow-[0_14px_34px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cada etapa se documenta para asegurar medidas correctas, instalación
            segura y un resultado final consistente con la identidad visual de
            tu marca.
          </p>
        </div>
      </div>
    </section>
  );
}
