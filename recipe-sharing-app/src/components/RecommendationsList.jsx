import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // generate when component loads
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-3">Recommended for You 💡</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul className="space-y-4">
          {recommendations.map((recipe) => (
            <li key={recipe.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;