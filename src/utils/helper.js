export const filterRestaurant = (allRestaurants, search) => (
    allRestaurants.filter((restaurant) => {
        return restaurant?.info?.name
          .toLowerCase()
          .includes(search.toLowerCase());
    })
    );
    

    