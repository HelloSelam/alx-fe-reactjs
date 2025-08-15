import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      formErrors.ingredients = "Please include at least 2 ingredients.";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Simulate saving
      console.log({
        title,
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),
      });
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List each ingredient on a new line"
            className="w-full border border-gray-300 rounded p-2 h-24 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List each step on a new line"
            className="w-full border border-gray-300 rounded p-2 h-32 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}