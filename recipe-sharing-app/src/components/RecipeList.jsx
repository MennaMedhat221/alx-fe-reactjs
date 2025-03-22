import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = (id) => favorites.includes(id);

  return (
    <ul className="space-y-4">
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id} className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>Preparation Time:</strong> {recipe.prepTime} mins</p>
          <button
            className={`mt-2 text-sm ${
              isFavorited(recipe.id) ? 'text-red-500' : 'text-blue-500'
            }`}
            onClick={() =>
              isFavorited(recipe.id)
                ? removeFavorite(recipe.id)
                : addFavorite(recipe.id)
            }
          >
            {isFavorited(recipe.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;