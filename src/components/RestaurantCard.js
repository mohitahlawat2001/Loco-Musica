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
    <div className="flex flex-col shadow-lg rounded-tl-xl rounded-br-xl bg-pink-100 m-2 p-2 w-64 hover:animate-pulse ">
      <div className="h-40 shadow-lg transform hover:rotate-0 transition duration-500 m-2">
          <img src={IMG_URL + cloudinaryImageId} alt="restaurant" className="w-full h-full rounded-tl-xl rounded-br-xl  object-cover transform hover:rotate-6" />
      </div>
      <div className="p-2 m-2">
        <Link to={`/restaurant/${id}`} key={id}>
          <h1 className="text-lg font-bold text-wrap">{name}</h1>
        </Link>
        <p>{cuisines.join(", ")}</p>
        <p>{city}</p>
        <p>{area}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
