export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  icon: string; // Lucide icon name (e.g. "Layout", "Sparkles", "Lightbulb")
  category: string; // e.g. "Corpóreos", "Cartelería", "Luminosos", "Neon", "Señalética"
  recommendedMaterials: string[];
  recommendedUseCases: string[];
  estimatedDeliveryTime: string; // Plazos estimados de entrega (e.g. "7-10 días hábiles")
  startingPrice?: number; // Precio orientativo base en USD
  priceRange?: 'Económico' | 'Medio' | 'Alto' | 'Premium'; // Rango de precio
  mainImage: string;
  galleryImages?: string[];
  benefits: string[];
  productionProcess: { title: string; description: string }[];
  relatedServices: string[]; // slugs de servicios relacionados
}
