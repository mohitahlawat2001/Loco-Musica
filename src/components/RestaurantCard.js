import { Link } from "react-router-dom";
import { IMG_URL } from "../Constants";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  city,
  cloudinaryImageId,
  area,
  avgRating,
}) => {
  return (
    <div className="flex flex-col shadow-lg rounded-tl-xl rounded-br-xl bg-pink-100 m-2 p-2 w-64 hover:bg-pink-200 hover:p-1">
      <div className="h-40 shadow-lg">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurant" className="w-full h-full rounded-tl-xl rounded-br-xl  object-cover" />
      </div>
      <div className="p-4 m-4 rounded-lg ease-in-out h-52 flex flex-col justify-between">
        <Link to={`/restaurant/${id}`} key={id}>
          <h1 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors">{name}</h1>
        </Link>
        <div className="flex-1">
          <p className="text-gray-600 mb-1 line-clamp-3">{cuisines.join(", ")}</p>
          <p className="text-gray-600 mb-1 truncate">{city}</p>
          <p className="text-gray-600 mb-1 truncate">{area}</p>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.39 2.83 1.03-5.95L1 7.5l5.97-.87L10 2l2.03 4.63L18 7.5l-4.64 4.38 1.03 5.95z"></path>
          </svg>
          <p className="text-gray-600 ml-1">{avgRating}</p>
        </div>
      </div>
    </div>

  );
};

export default RestaurantCard;
