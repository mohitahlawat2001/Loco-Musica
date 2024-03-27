import React, { useEffect } from "react";
import { restaurantApi } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

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
      const response = await fetch(restaurantApi);
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
    const filteredRestaurants = allRestaurants.filter((restaurant) => {
      setError(null);
      return restaurant?.info?.name
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
    if (filteredRestaurants.length === 0) {
      setError("No results found");
    }
  };

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-bar__button"
          onClick={() => {
            searchRestaurant(search, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {error && <p>{error}</p>}

      <div className="body">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
