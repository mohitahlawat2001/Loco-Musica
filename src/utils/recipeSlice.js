import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipes: [],
    },
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload);
        },
        removeRecipe: (state, action) => {
            state.recipes.pop(action.payload);
        },
        clearRecipes: (state) => {
            state.recipes = [];
        },
    },
});

export const { addRecipe, removeRecipe, clearRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;