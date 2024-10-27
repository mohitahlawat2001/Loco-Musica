import { Link, useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import { MenuShimmer, RestaurantShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, ToCart } from "../utils/cartSlice";
import { useState } from "react";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";

const RestanurantMenu = () => {
  const [displayCount, setDisplayCount] = useState(10);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Get the cart state
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find(
      (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
    );

    if (!existingItem) {
      // If the item doesn't exist, add it to the cart
      dispatch(addToCart(item));
    } else {
      // Optionally, you can show a message if the item is already in the cart
      alert(
        "Item already in the cart. You can increase the quantity in the cart!"
      );
    }
  };

  const { restaurant, menu } = useRestaurant(id);

  return (
    <div className="grid grid-cols-4">
      {!restaurant ? (
        <RestaurantShimmer />
      ) : (
        <div
          className="mx-2 bg-pink-300 text-white p-6 rounded-lg mt-1 shadow-lg h-fit sticky top-3"
          key={restaurant.id}
        >
          <h2 className="text-3xl font-bold mb-3">{restaurant?.name}</h2>
          <div className="h-72 rounded-md overflow-hidden mb-3">
            <img
              src={IMG_URL + restaurant?.cloudinaryImageId}
              alt="restaurant"
              className="w-full h-full object-cover bg-center rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              {restaurant?.cuisines.join(", ")}
            </p>
            <p className="text-md">{restaurant?.areaName}, {restaurant?.city}</p>
            <p className="text-md">{restaurant?.costForTwoMessage}</p>
            <p className="text-lg flex items-center">
              <span className="text-yellow-400 mr-1">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </span>{" "}
              {restaurant?.avgRating}, {restaurant?.totalRatingsString}
            </p>
            <p className="text-md">
              Close Time: {restaurant?.availability?.nextCloseTime}
            </p>
            <p className="text-md">
              Open Time: {restaurant?.availability?.nextOpenTime}
            </p>
          </div>
        </div>
      )}

      {!menu ? (
        <MenuShimmer />
      ) : (
        <div className="mx-3 bg-gray-800 text-white p-4 rounded-lg mt-1 w-auto col-start-2 col-end-5">
          <h1 className="text-3xl font-bold mb-4">Menu</h1>
          <ul data-testid="menu">
            {Object.values(menu)
              .slice(0, displayCount)
              .map((item) => (
                <li key={item?.card?.info?.id} className="mb-4">
                  <h3 className="text-2xl mb-2">{item?.card?.info?.name}</h3>
                  <p className="text-lg mb-2">
                    {item?.card?.info?.description}
                  </p>
                  {!item?.card?.info?.defaultPrice ? (
                    <p className="text-lg mb-2">
                      {item?.card?.info?.defaultPrice}
                    </p>
                  ) : (
                    <p className="text-lg mb-2">{item?.card?.info?.price}</p>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={"/recipe/" + item?.card?.info?.name}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      <button className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                        View Recipe
                      </button>
                    </Link>

                    {cart.find(
                      (e) => e?.card?.info?.id == item?.card?.info?.id
                    ) ? (
                      <div className="flex items-center mb-4">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-md"
                          onClick={ () => dispatch(removeFromCart(item))}
                        >
                          -
                        </button>
                        <span className="mx-4 text-lg">
                          {cart?.find((e) => e?.card?.info?.id === item?.card?.info?.id)?.quantity}
                        </span>
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-md"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                        
                      </div>
                    ) : (
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                        onClick={() => dispatch(addToCart(item))}
                        data-testid="addBtn"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </li>
              ))}
          </ul>
          {Object.values(menu).length > displayCount && (
            <button
              type="button"
              className="bg-indigo-500 animate-bounce w-6 h-6 rounded-full"
              onClick={() => setDisplayCount(displayCount + 10)}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(RestanurantMenu);