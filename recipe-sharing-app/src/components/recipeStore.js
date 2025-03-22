// src/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Favorites Feature
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // avoid duplicates
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations Feature
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock logic: recommend random recipes not already favorited
      const recommended = state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      return { recommendations: recommended };
    }),
}));
