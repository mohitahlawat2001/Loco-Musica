import { Link, useParams } from "react-router-dom";
import {  IMG_URL } from "../Constants";
import Shimmer, { MenuShimmer, RestaurantShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { useState } from "react";

const RestanurantMenu = () => {
  const [displayCount, setDisplayCount] = useState(10);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const { restaurant, menu } = useRestaurant(id);

  return (
    <div className=" flex justify-around ">
      {!restaurant ? <RestaurantShimmer/> :(

        <div className="mx-2 bg-pink-300 text-white p-4 rounded-lg mt-1" key={restaurant.id}>
        <h1 className="text-3xl font-bold mb-4">Restaurant id: {id}</h1>
        <h2 className="text-2xl mb-2">{restaurant?.name}</h2>
        <div className="w-72 h-72 rounded-md overflow-hidden ">
          <img src={IMG_URL + restaurant?.cloudinaryImageId} alt="restaurant" className="w-full h-auto rounded-lg" />
        </div>
        <p className="text-lg mb-2">{restaurant?.cuisines.join(", ")}</p>
        <p className="text-lg mb-2">{restaurant?.city}</p>
        <p className="text-lg mb-2">{restaurant?.areaName}</p>
        <p className="text-lg mb-2">{restaurant?.costForTwoMessage}</p>
          <p className="text-lg mb-2">⭐ {restaurant?.avgRating}</p>
          <p className="text-lg mb-2">{restaurant?.totalRatingsString}</p>
          <p className="text-lg mb-2">Close Time {restaurant?.availability?.nextCloseTime}</p>
          <p className="text-lg mb-2">Open Time {restaurant?.availability?.nextOpenTime}</p>
          {/* <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleAddToCart(restaurant)}>
            Add to Cart
          </button> */}
        </div>
      )}

      {!menu ? <MenuShimmer/>:(

        <div className="mx-3 bg-gray-800 text-white p-4 rounded-lg mt-1 w-full">
          <h1 className="text-3xl font-bold mb-4">Menu</h1>
          <ul data-testid="menu" >
            {Object.values(menu).slice(0, displayCount).map((item) => (
              <li key={item?.card?.info?.id} className="mb-4 ">
                <h3 className="text-2xl mb-2">{item?.card?.info?.name}</h3>
                <p className="text-lg mb-2">{item?.card?.info?.description}</p>
                {!item?.card?.info?.defaultPrice ? (
                  <p className="text-lg mb-2">{item?.card?.info?.defaultPrice}</p>
                ) : (
                  <p className="text-lg mb-2">{item?.card?.info?.price}</p>
                )}

                <div className="flex justify-between ">
                  <Link to={'/recipe/' + item?.card?.info?.name} className="text-blue-500">
                    View Recipe
                  </Link>
                </div>

                <button className="bg-blue-500 text-white p-2 rounded-lg"
                  onClick={() => handleAddToCart(item)}
                  data-testid="addBtn"
                  >
                  Add to Cart
                </button>
              </li>
            ))}

          </ul>
{Object.values(menu).length > displayCount && (
  <button  type="button" className="bg-indigo-500 animate-bounce w-6 h-6 rounded-full" onClick={() => setDisplayCount(displayCount + 10)}>
    🍕
  </button>
)}
        </div>
          )}
    </div>
  );

};

export default RestanurantMenu;
