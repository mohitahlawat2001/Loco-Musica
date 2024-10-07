import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart, removeItemFromCart } from "../utils/cartSlice";
import { useContext } from "react";
import UserContext from "../utils/useContext";
import { toast } from "react-toastify";  // Import toast from react-toastify\
import "react-toastify/dist/ReactToastify.css";  // Import the required CSS



const Cart = () => {
  const cart = useSelector((state) => state.cart.items);  // Get cart items from Redux store
  const dispatch = useDispatch();
  const { name,email,login } = useContext(UserContext);  // Get user data from context

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Function to calculate total price of items in the cart
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = item?.card?.info?.price || item?.card?.info?.defaultPrice;
      total += itemPrice * item?.quantity;
    });
    return total;
  };

  // Function to handle the "Continue" button click and send order data to the backend
  const handleContinue = async () => {
    if (cart.length > 0) {
      try {
        // Prepare the order data from cart items
        const orderItems = cart.map((item) => ({
          name: item.card.info.name,
          quantity: item.quantity,
          price: item.card.info.price || item.card.info.defaultPrice,
        }));

        // Send a POST request to the backend with the order data
        const response = await fetch("http://localhost:5000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,  // User's name from context
           email,  // User's email from context
            OrderedItem: orderItems,  // The cart items
            total: totalPrice(),  // Total price of the order
          }),
        });

        if (response.ok) {
          toast.success("Order placed successfully!");  // Show success toast
          console.log("Order placed successfully!");
          dispatch(clearCart());
        }
      } catch (error) {
        console.error("Error placing order:", error);
      }
    }
  };

  // If the cart is empty, show a message
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
      
      {/* Display user information if logged in */}
      {login ? (
        <h2 className="text-xl mb-4">Hello, {name}!</h2>
      ) : (
        <h2 className="text-xl mb-4">Guest User</h2>
      )}

      <button
        className={`bg-red-500 text-white px-4 py-2 rounded-md mb-4 ${
          cart.length === 0 && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleClearCart}
        disabled={cart.length === 0}
      >
        Clear Cart
      </button>

      {/* Display cart items */}
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
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
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

      {/* Button to continue to the next step (placing order) */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Cart;