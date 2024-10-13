import React, { useEffect, useState, useMemo } from "react"; // Import useMemo
// import { swiggyApi } from "../Constants";
import { defaultLat, defaultLon } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurant } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({
    lat: defaultLat,
    lon: defaultLon,
  });

  // Fetch restaurants based on user location or default
  useEffect(() => {
    getGeolocation();
  }, []);

  // Function to get user's geolocation
  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          getRestaurants(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(
            "Error fetching location, using default location.",
            error
          );
          getRestaurants(defaultLat, defaultLon); // Fetch with default location
        }
      );
    } else {
      console.error("Geolocation not supported, using default location.");
      getRestaurants(defaultLat, defaultLon); // Fetch with default location
    }
  };

  // Fetch restaurants from API
  const getRestaurants = async (lat, lon) => {
    try {
      const apiUrl = `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lon}&page_type=DESKTOP_WEB_LISTING`;
      //const apiUrl = `${swiggyApi}?lat=${lat}&lng=${lon}&page_type=DESKTOP_WEB_LISTING`;

      const response = await fetch(apiUrl);
      const json = await response.json();

      // Function to find the restaurant data in the API response
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllRestaurants(resData || []); // Fallback to empty array if no data
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setError("Unable to fetch restaurant data.");
    }
  };

  // Memoize the filtered restaurants based on search input
  const filteredRestaurants = useMemo(() => {
    if (search === "") {
      return allRestaurants;
    }
    const filtered = filterRestaurant(allRestaurants, search);
    if (filtered.length === 0) {
      setError("No results found");
    } else {
      setError(null); // Clear error if results are found
    }
    return filtered;
  }, [allRestaurants, search]); // Dependencies

  return (
    <>
      <div className="p-4 mx-10 text-center rounded-xl justify-items-center ">
        {/* <input
  data-testid="search-input"
  className="w-64 mb-6 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  type="text"
  placeholder="Search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/> */}
        <div className="container mb-4 text-center rounded-xl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex">
              <input
                data-testid="search-input"
                className="w-full lg:w-[60%] p-4 text-sm text-gray-900 border-2 border-gray-300 rounded-md md:ps-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Search your food"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                data-testid="search-btn"
                className="bg-pink-300 end-2.5 bottom-2.5 lg:right-90 font-medium rounded-lg text-sm px-9 py-4 ml-5"
                onClick={() => {
                  // Trigger search on button click (optional; can also rely on input change)
                  setSearch(search);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {error && (
          <p className="p-2 font-bold text-center text-red-500">{error}</p>
        )}
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div
            data-testid="res-list"
            className="flex flex-row flex-wrap justify-center mx-20"
          >
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
