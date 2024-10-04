import { render, screen, fireEvent } from "@testing-library/react";
import RecipeStore from "../components/RecipeStore";
import { Provider } from "react-redux";
import store from "../utils/store"; // import your store configuration
import { addRecipe, clearRecipes } from "../utils/recipeSlice";

// Mock the recipe data
const mockRecipe = {
  id: "1",
  name: "Test Recipe",
  aiResponse: "This is a detailed test recipe with multiple steps."
};

describe("RecipeStore Component", () => {
  
  // Helper to render RecipeStore with Redux store
  const renderWithProviders = (ui) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  beforeEach(() => {
    store.dispatch(clearRecipes()); // Clear recipes before each test
  });

  it("renders the RecipeStore component without recipes", () => {
    renderWithProviders(<RecipeStore />);
    const heading = screen.getByText(/Recipe Store/i);
    expect(heading).toBeInTheDocument();

    const noRecipesText = screen.queryByText(/No recipe available/i);
    expect(noRecipesText).not.toBeInTheDocument();
  });

  it("renders recipes from the Redux store", () => {
    // Add a recipe to the Redux store
    store.dispatch(addRecipe(mockRecipe));

    renderWithProviders(<RecipeStore />);

    const recipeName = screen.getByText(/Test Recipe/i);
    expect(recipeName).toBeInTheDocument();

    const showMoreButton = screen.getByText(/Show More/i);
    expect(showMoreButton).toBeInTheDocument();
  });

  it("expands and collapses the recipe details when 'Show More' and 'Show Less' are clicked", () => {
    // Add a recipe
    store.dispatch(addRecipe(mockRecipe));

    renderWithProviders(<RecipeStore />);

    // Ensure "Show More" is visible initially
    const showMoreButton = screen.getByText(/Show More/i);
    expect(showMoreButton).toBeInTheDocument();

    // Click on "Show More"
    fireEvent.click(showMoreButton);

    // Check if the "Show Less" button is now visible
    const showLessButton = screen.getByText(/Show Less/i);
    expect(showLessButton).toBeInTheDocument();

    // Click on "Show Less"
    fireEvent.click(showLessButton);

    // Check if the "Show More" button is back
    expect(screen.getByText(/Show More/i)).toBeInTheDocument();
  });

  it("removes a recipe when the ⭐ button is clicked", () => {
    store.dispatch(addRecipe(mockRecipe));

    renderWithProviders(<RecipeStore />);

    const removeButton = screen.getByText(/⭐/i);
    fireEvent.click(removeButton);

    const recipeName = screen.queryByText(/Test Recipe/i);
    expect(recipeName).not.toBeInTheDocument();
  });

  it("clears all recipes when 'Clear Recipes' is clicked", () => {
    store.dispatch(addRecipe(mockRecipe));

    renderWithProviders(<RecipeStore />);

    const clearButton = screen.getByText(/Clear Recipes/i);
    fireEvent.click(clearButton);

    const recipeName = screen.queryByText(/Test Recipe/i);
    expect(recipeName).not.toBeInTheDocument();
  });
});
