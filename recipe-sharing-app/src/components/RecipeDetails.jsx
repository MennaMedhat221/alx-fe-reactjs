import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;