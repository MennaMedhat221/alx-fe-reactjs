import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
          <AddRecipeForm/>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  
  );
};

export default App
