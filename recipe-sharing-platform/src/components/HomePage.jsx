import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating fetching data from JSON
    setRecipes(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <>
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
          <Link to={`/recipe/${recipe.id}`} className="block">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-2 text-xl font-bold">{recipe.name}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
          <Link to="/add-recipe" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Add New Recipe
          </Link>
        </>
      ))}
      </div>
    </div>
  );
}