"use client";

import { Building2, MapPin, BadgeDollarSign } from "lucide-react";

interface PortfolioFiltersProps {
  activeIndustry: string;
  setActiveIndustry: (industry: string) => void;
  activeLocation: string;
  setActiveLocation: (location: string) => void;
  activeBudget: string;
  setActiveBudget: (budget: string) => void;
  industries: string[];
  locations: string[];
  budgets: string[];
}

export default function PortfolioFilters({
  activeIndustry,
  setActiveIndustry,
  activeLocation,
  setActiveLocation,
  activeBudget,
  setActiveBudget,
  industries,
  locations,
  budgets,
}: PortfolioFiltersProps) {
  return (
    <div className="bg-white border border-[#DED4C9] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(17,17,17,0.03)] backdrop-blur-md">
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Rubro / Industria */}
        <div className="lg:col-span-5 space-y-3 lg:border-r lg:border-[#EAE3DA]/80 lg:pr-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary text-center">
            <Building2 className="size-4 shrink-0" />
            <span>Rubro / Industria</span>
          </div>
          <div className="flex justify-center w-full">
            <div 
              className="bg-[#FAF8F5] border border-border/60 p-1 rounded-xl flex items-center gap-1 overflow-x-auto scrollbar-none max-w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => setActiveIndustry("Todos")}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                  activeIndustry === "Todos"
                    ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                }`}
              >
                Todos
              </button>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                    activeIndustry === industry
                      ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div className="lg:col-span-3 space-y-3 lg:border-r lg:border-[#EAE3DA]/80 lg:px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary text-center">
            <MapPin className="size-4 shrink-0" />
            <span>Ubicación</span>
          </div>
          <div className="flex justify-center w-full">
            <div className="bg-[#FAF8F5] border border-border/60 p-1 rounded-xl flex items-center gap-1 w-full max-w-[280px]">
              <button
                onClick={() => setActiveLocation("Todos")}
                className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                  activeLocation === "Todos"
                    ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                }`}
              >
                Todos
              </button>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                    activeLocation === loc
                      ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nivel de Inversión */}
        <div className="lg:col-span-4 space-y-3 lg:pl-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary text-center">
            <BadgeDollarSign className="size-4 shrink-0" />
            <span>Inversión</span>
          </div>
          <div className="flex justify-center w-full">
            <div 
              className="bg-[#FAF8F5] border border-border/60 p-1 rounded-xl flex items-center gap-1 overflow-x-auto scrollbar-none max-w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button
                onClick={() => setActiveBudget("Todos")}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                  activeBudget === "Todos"
                    ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                }`}
              >
                Todos
              </button>
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBudget(b)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center border whitespace-nowrap ${
                    activeBudget === b
                      ? "bg-white text-primary shadow-[0_4px_12px_rgba(17,17,17,0.03)] border-[#DED4C9]"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/40"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
