import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import recipeSlice from "./recipeSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        cart: cartSlice,
        recipe: recipeSlice,
    },
});

export default store;