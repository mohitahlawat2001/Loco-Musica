import { Link } from "react-router-dom";
import { IMG_URL } from "../Constants";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  city,
  cloudinaryImageId,
  locality,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="flex flex-col shadow-lg rounded-tl-xl rounded-br-xl bg-white m-2 p-2 w-64 hover:scale-105 ">
      <Link to={`/restaurant/${id}`} key={id}>
        <div className="h-40 shadow-lg transform transition duration-500 m-2">
          <img
            src={IMG_URL + cloudinaryImageId}
            alt="restaurant"
            className="w-full h-full rounded-tl-xl rounded-br-xl  object-cover transform "
          />
        </div>

        <div className="p-4 m-4   rounded-lg  transition-shadow duration-300 ease-in-out h-44 flex flex-col justify-between">
          <h1 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-200 ease-in-out truncate">
            {name}
          </h1>
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-gray-600 mb-1 line-clamp-3">
              {cuisines.join(", ")}
            </p>
            <p className="text-gray-600 mb-1 truncate">{city}</p>

            <div className="flex justify-center items-center gap-1">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
              </svg>

              <span className="text-gray-600 mb-1 truncate font-semibold">
                {locality}
              </span>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ms-2 text-sm font-bold text-gray-900 ">{avgRating}</p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
            <a
              href="#"
              class="text-sm font-medium text-gray-900 underline hover:no-underline "
            >
              ({totalRatingsString})
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
