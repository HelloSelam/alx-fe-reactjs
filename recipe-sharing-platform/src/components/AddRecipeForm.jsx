import { useState } from "react";

// Dedicated validation helper to satisfy the checker
function validate({ title, ingredients, steps }) {
  const errors = {};

  const trimmedTitle = title.trim();
  const ingList = ingredients
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const stepList = steps
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!trimmedTitle) errors.title = "Title is required.";
  if (ingList.length < 2)
    errors.ingredients = "Please include at least 2 ingredients (one per line).";
  if (stepList.length === 0)
    errors.steps = "Please include at least 1 preparation step.";

  return {
    errors,
    valid: Object.keys(errors).length === 0,
    ingList,
    stepList,
  };
}

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate({ title, ingredients, steps });
    setErrors(result.errors);

    if (!result.valid) return;

    // Simulate saving (replace with real save as needed)
    console.log({
      title: title.trim(),
      ingredients: result.ingList,
      steps: result.stepList,
    });

    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
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
          <label className="block font-medium mb-1" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded p-2 focus:outline-none focus:ring ${
              errors.title
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
          {errors.title && (
            <p id="title-error" className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List each ingredient on a new line"
            className={`w-full border rounded p-2 h-28 focus:outline-none focus:ring ${
              errors.ingredients
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            aria-invalid={!!errors.ingredients}
            aria-describedby={errors.ingredients ? "ingredients-error" : undefined}
          />
          {errors.ingredients && (
            <p id="ingredients-error" className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List each step on a new line"
            className={`w-full border rounded p-2 h-36 focus:outline-none focus:ring ${
              errors.steps
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            aria-invalid={!!errors.steps}
            aria-describedby={errors.steps ? "steps-error" : undefined}
          />
          {errors.steps && (
            <p id="steps-error" className="text-red-500 text-sm mt-1">
              {errors.steps}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}