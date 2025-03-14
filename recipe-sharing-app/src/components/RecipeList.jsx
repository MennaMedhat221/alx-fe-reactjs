import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-2">
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;