"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Proyectos", href: "/#portfolio" },
    { name: "Proceso", href: "/#proceso" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "FAQ", href: "/#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        isScrolled
          ? "bg-background/92 backdrop-blur-[14px] border-b border-[rgba(214,205,194,0.75)] h-[72px] shadow-[0_2px_20px_rgba(17,17,17,0.06)]"
          : "bg-transparent h-[84px] border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-[54px]">
          {/* Logo */}
          <Link
            href="/#inicio"
            className="flex items-center space-x-2.5 group shrink-0"
          >
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 text-primary fill-none stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 15 L50 85 L85 15" />
                <path
                  d="M35 15 L50 62 L65 15"
                  className="text-accent stroke-accent"
                  strokeWidth="7"
                />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent rounded-full border border-background" />
            </div>
            <span className="font-heading font-black tracking-widest text-base text-foreground flex items-center">
              VEKTOR<span className="text-primary font-normal">VISUAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Teléfono — link limpio, sin caja ni placeholder, seguro contra hydration mismatch */}
            {isMounted ? (
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp al +54 9 11 2345-6789"
                className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.04em] text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle
                  className="size-3.5 shrink-0 opacity-70 text-primary"
                  aria-hidden="true"
                />
                <span className="header-phone">
                  +54 9 11 2345-6789
                </span>
              </a>
            ) : (
              <div className="w-[160px]" />
            )}

            <Link
              href="/#presupuesto"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-primary hover:bg-[#743A28] text-white font-heading font-bold text-[11px] uppercase tracking-[0.06em] px-6 py-3 rounded-[6px] transition-all duration-250 shadow-[0_12px_26px_rgba(116,58,40,0.20)] hover:shadow-[0_14px_32px_rgba(116,58,40,0.24)] hover:scale-[1.02] active:scale-95 cursor-pointer border-0",
              )}
            >
              Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/97 backdrop-blur-lg border-b border-border shadow-[0_8px_30px_rgba(17,17,17,0.08)] py-4 px-6 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border/60 mt-3 pt-4 flex flex-col space-y-3">
            {isMounted ? (
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-2 px-3"
              >
                <MessageCircle className="size-4 opacity-60 text-primary" />
                +54 9 11 2345-6789
              </a>
            ) : (
              <div className="h-9" />
            )}
            <Link
              href="/#presupuesto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full bg-primary hover:bg-[#743A28] text-white font-bold py-3.5 rounded-lg text-center flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-[0_14px_30px_rgba(116,58,40,0.22)] border-0",
              )}
            >
              Solicitar Presupuesto
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
