import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // List of project slugs
  addFavorite: (slug: string) => void;
  removeFavorite: (slug: string) => void;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (slug) =>
        set((state) => {
          if (state.favorites.includes(slug)) return state;
          return { favorites: [...state.favorites, slug] };
        }),
      removeFavorite: (slug) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f !== slug),
        })),
      toggleFavorite: (slug) => {
        const { favorites, addFavorite, removeFavorite } = get();
        if (favorites.includes(slug)) {
          removeFavorite(slug);
        } else {
          addFavorite(slug);
        }
      },
      isFavorite: (slug) => {
        return get().favorites.includes(slug);
      },
    }),
    {
      name: 'vektor-visual-favorites',
    }
  )
);
