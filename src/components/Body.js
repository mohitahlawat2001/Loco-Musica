import React, { useEffect } from "react";
import { swiggyApi } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurant } from "../utils/helper";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(swiggyApi);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  };
  const searchRestaurant = (search, allRestaurants) => {
    if (search === "") {
      setFilteredRestaurants(allRestaurants);
      setError("Please enter a valid search");
      return;
    }
    const filteredRestaurants = filterRestaurant(allRestaurants, search);
    setFilteredRestaurants(filteredRestaurants);
    if (filteredRestaurants.length === 0) {
      setError("No results found");
    }
  };

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }
  return allRestaurants?.length === 0 ? (<Shimmer /> ): (
    <>
      <div className="p-4  text-center rounded-xl mx-40 ">
        <input
                    data-testid="search-input"
          className="text-center px-40 py-1 border-2 border-gray-300 rounded-md :focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
                    data-testid="search-btn"
          className="px-2 py-1 bg-pink-300  text-white rounded-md ml-2 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={() => {
            searchRestaurant(search, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {error && <p className="text-center text-red-500 font-bold p-2"
      >{error}</p>}

      <div
        data-testid="res-list"
        className="flex flex-wrap justify-center flex-row mx-20"
      >
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
