import { LocationType, BudgetLevel } from './project';

export interface BudgetRequest {
  id?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName?: string;
  serviceSlug?: string; // Servicio por el que consulta
  projectDescription: string;
  location?: LocationType;
  dimensions?: {
    width?: number; // en cm
    height?: number; // en cm
    depth?: number; // en cm (para corpóreos)
  };
  installationRequired: boolean;
  estimatedBudgetLevel?: BudgetLevel;
  preferredMaterials?: string[];
  referenceImages?: string[]; // URLs o paths de imágenes subidas de referencia
  status: 'pending' | 'processing' | 'quoted' | 'rejected';
  createdAt: string;
}
