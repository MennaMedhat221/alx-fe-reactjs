import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No recipes found.</p>;
  }

  return (
    <ul className="space-y-4">
      {filteredRecipes.map((recipe, index) => (
        <li key={index} className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>Preparation Time:</strong> {recipe.prepTime} mins</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;