"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Hammer } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export default function Footer() {
  const mounted = useMounted();
  const currentYear = mounted ? new Date().getFullYear() : 2026;

  return (
    <footer className="dark bg-background border-t border-border text-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/#inicio" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-lg text-white">
                V
              </div>

              <span className="font-heading font-black tracking-widest text-xl">
                VEKTOR
                <span className="text-primary font-normal">VISUAL</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Cartelería profesional e industrial de alto impacto para marcas
              líderes. Diseñamos, fabricamos e instalamos con los más altos
              estándares de calidad.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-4">
              Navegación
            </h3>

            <ul className="space-y-2.5">
              {[
                { name: "Inicio", href: "/#inicio" },
                { name: "Nuestros Servicios", href: "/#servicios" },
                { name: "Proyectos Realizados", href: "/#portfolio" },
                { name: "Proceso de Trabajo", href: "/#proceso" },
                { name: "Preguntas Frecuentes", href: "/#faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary flex items-center group transition-colors"
                  >
                    <ArrowRight className="size-3 mr-1.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-4">
              Contacto y Horarios
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-foreground font-medium">
                  Planta & Showroom:
                </span>
                Av. del Parque 4050, Polo Industrial
              </li>

              <li>
                <span className="block text-foreground font-medium">
                  Email Comercial:
                </span>
                <a
                  href="mailto:contacto@vektorvisual.com"
                  className="hover:text-primary transition-colors"
                >
                  contacto@vektorvisual.com
                </a>
              </li>

              <li suppressHydrationWarning>
                <span className="block text-foreground font-medium">
                  Teléfono / WhatsApp:
                </span>

                {mounted ? (
                  <a
                    href="https://wa.me/5491123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                    aria-label="Contactar por WhatsApp al +54 9 11 2345-6789"
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span
                      suppressHydrationWarning
                      className="inline-flex items-center"
                    >
                      <span>+54</span>
                      <span className="mx-1">9</span>
                      <span>11</span>
                      <span className="mx-1">2345</span>
                      <span>-</span>
                      <span>6789</span>
                    </span>
                  </a>
                ) : (
                  <div className="w-28 h-4 bg-muted/20 animate-pulse rounded mt-1" />
                )}
              </li>

              <li>
                <span className="block text-foreground font-medium">
                  Horario de Atención:
                </span>
                Lunes a Viernes: 08:00 a 17:00 hs
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-4">
              Garantía de Calidad
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <ShieldCheck className="size-4" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Garantía Escrita
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    12 meses de cobertura estructural y eléctrica en todos
                    nuestros carteles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <Hammer className="size-4" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Instalación Profesional
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Equipo técnico propio con seguros ART vigentes y
                    habilitaciones de altura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <Truck className="size-4" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Envíos Protegidos
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Embalaje reforzado en cajón de madera a medida para
                    transporte nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-border/50 my-8" />

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Vektor Visual. Todos los derechos reservados.
            <span className="block sm:inline sm:ml-2">
              Diseñado por{" "}
              <a
                href="https://primordial.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                Primordial Web Studio
              </a>
            </span>
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link
              href="/#inicio"
              className="hover:text-primary transition-colors"
            >
              Términos de Servicio
            </Link>

            <Link
              href="/#inicio"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>

            <Link
              href="/#inicio"
              className="hover:text-primary transition-colors"
            >
              Mapa del Sitio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
