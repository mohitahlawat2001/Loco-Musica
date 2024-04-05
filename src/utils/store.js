import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        cart: cartSlice,
    },
});

export default store;