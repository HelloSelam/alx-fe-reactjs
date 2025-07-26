import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // reapply filter
  },
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // reapply filter
  },
  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // reapply filter
  },
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // run filtering when search term updates
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // initial filtering if needed
  },
}));