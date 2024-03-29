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
    <div className="restaurant-card">
      <div className="restaurant-card__img">
          <img src={IMG_URL + cloudinaryImageId} alt="restaurant" />
      </div>
      <div className="restaurant-card__info">
        <Link to={`/restaurant/${id}`} key={id}>
        <h1>{name}</h1>
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
