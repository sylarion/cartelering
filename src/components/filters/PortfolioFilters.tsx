"use client";

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
    <div className="space-y-6 bg-card/50 border border-border p-6 rounded-xl backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Industry Filters */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase block">
            Rubro / Industria
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveIndustry("Todos")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                activeIndustry === "Todos"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              Todos
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  activeIndustry === industry
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Location & Budget Filter Columns */}
        <div className="flex flex-wrap gap-6">
          {/* Location Filters */}
          <div className="space-y-2.5 min-w-[150px]">
            <span className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase block">
              Ubicación
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveLocation("Todos")}
                className={`flex-1 px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer text-center ${
                  activeLocation === "Todos"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={`flex-1 px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer text-center ${
                    activeLocation === loc
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Filters */}
          <div className="space-y-2.5 min-w-[180px]">
            <span className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase block">
              Nivel de Inversión
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveBudget("Todos")}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer text-center ${
                  activeBudget === "Todos"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBudget(b)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer text-center ${
                    activeBudget === b
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-muted-foreground border-border hover:text-foreground"
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
