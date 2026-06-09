export interface Material {
  name: string;
  description: string;
  recommendedUses: string[];
  durability: string; // e.g. "Alta (5-10 años)", "Media", etc.
  finish: string; // e.g. "Brillante", "Mate", "Satinado", "Esmerilado"
  indoorOutdoor: 'Interior' | 'Exterior' | 'Ambos';
}
