import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;