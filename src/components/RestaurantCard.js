import { Link } from "react-router-dom";
import { IMG_URL } from "../Constants";
import { baseUrl, getAndDeleteReq } from "../service/apiCalls";
import { useEffect, useState } from "react";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  city,
  cloudinaryImageId,
  area,
  avgRating,
}) => {
  const [restaurants , setRestaurants] = useState([]);
  const getRestaurants = async ()=>{
    
    try {
      const response = await getAndDeleteReq(`${baseUrl}/restaurant/getrestaurant`);
      setRestaurants(response.data);
      return response.data;
      
    } catch (error) {
      console.log("error from get restauarnt call : " , error);
    }
  }
  useEffect(()=>{
    getRestaurants();
  } , [])
  return (
    <div className="flex flex-wrap"> 
      {restaurants.map((restaurant) => (
        <div
          className="flex flex-col shadow-lg rounded-tl-xl rounded-br-xl bg-pink-100 m-2 p-2 w-64 hover:animate-pulse"
          key={restaurant._id} 
        >
          <div className="h-40 shadow-lg transform hover:rotate-0 transition duration-500 m-2">
            <img
              src={restaurant.coverImg} 
              alt="restaurant"
              className="w-full h-full rounded-tl-xl rounded-br-xl object-cover transform hover:rotate-6"
            />
          </div>
          <Link to={`/restaurant/${restaurant._id}`}> 
            <div className="p-4 m-4 bg-pink-100 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-52 flex flex-col justify-between">
              <h1 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-200 ease-in-out truncate">
                {restaurant.name}
              </h1>
              <div className="flex-1">
                <p className="text-gray-600 mb-1 line-clamp-3">
                </p>
                <p className="text-gray-600 mb-1 truncate">{restaurant.address}</p>
                <p className="text-gray-600 mb-1 truncate">{restaurant.location}</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.39 2.83 1.03-5.95L1 7.5l5.97-.87L10 2l2.03 4.63L18 7.5l-4.64 4.38 1.03 5.95z"></path>
                </svg>
                <p className="text-gray-600 ml-1">{restaurant.review}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
  
};

export default RestaurantCard;
