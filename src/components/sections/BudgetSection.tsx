"use client";

import BudgetForm from "@/components/forms/BudgetForm";
import {
  Calculator,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export default function BudgetSection() {
  const mounted = useMounted();

  return (
    <section
      id="presupuesto"
      className="py-24 bg-background bg-dot-printy border-t border-border relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground text-[11px] font-bold tracking-widest uppercase">
            <Calculator className="size-3 text-primary" />
            <span>Cotizador Digital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Presupuesto & Asesoramiento Técnico
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Completá el formulario a continuación para describir tu idea. Si lo
            requerís, coordinamos un relevamiento de campo sin costo para
            definir factibilidad y medidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact & Plant info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-md border border-[rgba(214,205,194,0.85)] rounded-[28px] p-7 sm:p-8 shadow-[0_18px_55px_rgba(17,17,17,0.06)]">
              <div className="space-y-3 mb-7">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
                  Atención comercial
                </span>

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-foreground tracking-tight">
                    Contacto directo
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Hablemos de tu cartel, fachada o proyecto comercial.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border/80 mb-6" />

              <div className="space-y-4">
                {mounted ? (
                  <a
                    href="https://wa.me/5491123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                    aria-label="Contactar por WhatsApp al +54 9 11 2345-6789"
                    className="flex items-start gap-4 rounded-2xl border border-[rgba(214,205,194,0.75)] bg-secondary/45 p-4 transition-all duration-200 hover:border-primary/35 hover:bg-secondary/70 hover:shadow-[0_12px_30px_rgba(17,17,17,0.05)] group"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Phone className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                        Llámanos o WhatsApp
                      </span>

                      <span
                        suppressHydrationWarning
                        className="mt-1 inline-flex items-center text-sm font-extrabold text-foreground"
                      >
                        <span>+54</span>
                        <span className="mx-1">9</span>
                        <span>11</span>
                        <span className="mx-1">2345</span>
                        <span>-</span>
                        <span>6789</span>
                      </span>

                      <span className="mt-1 block text-xs text-muted-foreground">
                        Lunes a viernes de 08:00 a 17:00 hs
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="h-[92px] w-full bg-muted/10 animate-pulse rounded-2xl" />
                )}

                <a
                  href="mailto:contacto@vektorvisual.com"
                  className="flex items-start gap-4 rounded-2xl border border-[rgba(214,205,194,0.75)] bg-secondary/45 p-4 transition-all duration-200 hover:border-primary/35 hover:bg-secondary/70 hover:shadow-[0_12px_30px_rgba(17,17,17,0.05)] group"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Mail className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                      Email comercial
                    </span>

                    <span className="mt-1 block break-all text-sm font-extrabold text-foreground">
                      contacto@vektorvisual.com
                    </span>

                    <span className="mt-1 block text-xs text-muted-foreground">
                      Respondemos en menos de 12 hs
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-[rgba(214,205,194,0.75)] bg-secondary/45 p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                      Planta industrial
                    </span>

                    <span className="mt-1 block text-sm font-extrabold text-foreground">
                      Av. del Parque 4050, Polo Industrial
                    </span>

                    <span className="mt-1 block text-xs text-muted-foreground">
                      Coordiná una visita previamente
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Relevamiento Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/10 via-white/70 to-secondary/50 p-7 sm:p-8 shadow-[0_18px_55px_rgba(17,17,17,0.05)]">
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
                    Sin compromiso de compra
                  </span>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <ClipboardCheck className="size-5" />
                  </div>
                </div>

                <h4 className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                  Relevamiento técnico sin costo
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Para marquesinas de gran porte o locales completos, nuestro
                  equipo evalúa medidas, estructura, accesos y factibilidad
                  antes de fabricar.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Evaluación de estructura existente",
                    "Revisión de accesos y puntos eléctricos",
                    "Fotometría y asesoramiento de materiales",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
              <BudgetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
