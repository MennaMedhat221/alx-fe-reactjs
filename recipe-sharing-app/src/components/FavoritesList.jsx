import React from 'react';
import { useRecipeStore } from '../recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean); // in case a recipe was deleted

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-3">My Favorite Recipes ❤️</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="space-y-4">
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button
                className="text-red-500 mt-2"
                onClick={() => removeFavorite(recipe.id)}
              >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;