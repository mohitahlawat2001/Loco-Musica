import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart, removeItemFromCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice =
        item?.card?.info?.price || item?.card?.info?.defaultPrice;
      total += itemPrice * item?.quantity;
    });
    return total;
  };

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="mx-2 px-2">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <button
        className={`bg-red-500 text-white px-4 py-2 rounded-md mb-4 ${
          cart.length === 0 && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleClearCart}
        disabled={cart.length === 0}
      >
        Clear Cart
      </button>

      <div className="grid grid-cols-3 gap-4">
        {cart.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="bg-white shadow-md p-4 rounded-md"
          >
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                item?.card?.info?.imageId
              }
              alt={item?.card?.info?.name}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-bold mb-2">{item?.card?.info?.name}</h3>
            <p className="text-lg mb-2">{item?.card?.info?.description}</p>
            <p className="text-lg mb-2">
              Price: ₹
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </p>

            <div className="flex items-center mb-4">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md"
                onClick={() => dispatch(removeFromCart(item))}
              >
                -
              </button>
              <span className="mx-4 text-lg">
                {
                  cart?.find((e) => e?.card?.info?.id === item?.card?.info?.id)
                    ?.quantity
                }
              </span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => dispatch(removeItemFromCart(item))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice() / 100}</h2>
      </div>
    </div>
  );
};

export default Cart;
