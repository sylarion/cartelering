"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { HelpCircle, ChevronDown } from "lucide-react";

type FAQCategory = "Todos" | "Proceso" | "Técnico" | "Precios y Pago" | "Instalación y Envíos";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("Todos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: FAQCategory[] = [
    "Todos",
    "Proceso",
    "Técnico",
    "Precios y Pago",
    "Instalación y Envíos",
  ];

  const filteredFaqs = faqs.filter((faq) => {
    return activeCategory === "Todos" || faq.category === activeCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="dark py-24 bg-background border-t border-border relative bg-dot-printy">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
            <HelpCircle className="size-3 text-primary" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-heading">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Respondemos de manera transparente a las consultas habituales sobre materiales, 
            plazos, envíos e instalación de carteles.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null); // Close any open accordion when category changes
              }}
              className={`px-4 py-2 rounded text-xs font-semibold border transition-all cursor-pointer font-heading ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-card border border-border hover:border-primary/20 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold pr-4 font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Answer with smooth height reveal */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-border/50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed bg-card/40">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between pt-3 border-t border-border/10">
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
