import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("adding");

      const ele = state.items.find(
        (e) => e?.card?.info?.id == action.payload?.card?.info?.id
      );

      //   this means that card is not present in the cart
      if (ele == undefined) {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
      //   The card ( food item is present in the cart)
      else {
        ele.quantity += 1;
      }
    },
    // It decrease and removes if quantity is 1
    removeFromCart: (state, action) => {
      console.log("removing");

      const ele = state.items.find(
        (e) => e?.card?.info?.id == action.payload?.card?.info?.id
      );

      // If the quantity if > 1 then it will decrease the quantity and if the quantity is 1 then it will remove the items from the cart
      if (ele.quantity > 1) {
        ele.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (e) => e?.card?.info?.id != action.payload?.card?.info?.id
        );
      }
    },

    // it will remove the item from cart no matter what is the quantity
    removeItemFromCart: (state, action) => {
      console.log("removingItem");

      const ele = state.items.find(
        (e) => e?.card?.info?.id == action.payload?.card?.info?.id
      );
      state.items = state.items.filter(
        (e) => e?.card?.info?.id != action.payload?.card?.info?.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
