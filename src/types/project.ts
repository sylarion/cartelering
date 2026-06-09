export type ImpactLevel = 'Bajo' | 'Medio' | 'Alto' | 'Premium';
export type BudgetLevel = 'Económico' | 'Medio' | 'Alto' | 'Premium';
export type LocationType = 'Interior' | 'Exterior';

export interface ProjectTestimonial {
  clientName: string;
  company: string;
  comment: string;
  rating: number;
}

export interface Project {
  slug: string;
  name: string;
  industry: string; // rubro (e.g. "Gastronomía", "Retail", "Oficinas", "Salud")
  productType: string; // tipo de producto (e.g. "Letras Corpóreas", "Tótem Exterior", "Neon Led")
  mainMaterial: string; // material principal (e.g. "Chapa galvanizada", "Acrílico", "Madera de Kiri", "Neon Led")
  location: LocationType; // ubicación: interior/exterior
  impactLevel: ImpactLevel; // nivel de impacto: Bajo, Medio, Alto, Premium
  budgetLevel: BudgetLevel; // presupuesto estimado: Económico, Medio, Alto, Premium
  mainImage: string; // imagen principal (URL o path)
  shortDescription: string;
  detailedDescription: string;
  galleryImages?: string[]; // imágenes adicionales de la galería
  completedYear?: number; // año de realización
  estimatedBudget: string; // e.g. "$1,200 - $1,800 USD"
  materials: string[]; // materiales detallados utilizados
  servicesUsed: string[]; // servicios asociados (nombres o slugs)
  results: string; // impacto comercial obtenido
  testimonial?: ProjectTestimonial; // testimonio específico del proyecto
}
