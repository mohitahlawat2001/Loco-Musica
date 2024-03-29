import { useParams } from "react-router-dom";
import { SwiggyMenuApi, IMG_URL } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestanurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      const response = await fetch(SwiggyMenuApi + id);
      const json = await response.json();
      // console.log(json);
      console.log(json.data?.cards[2].card.card.info.name);
      console.log(
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
        setRestaurant(json.data?.cards[2].card.card.info);
        
        if (json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) {
            setMenu(
              json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            );
        } else {
            setMenu(
              json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
            );
        }


    } catch (error) {
      console.log(error);
    }
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-details">
      <div className="restaurant-card">
        <h1>Restaurant id: {id}</h1>
        {restaurant?.name}
        <div className="restaurant-card__img">
          <img src={IMG_URL + restaurant?.cloudinaryImageId} alt="restaurant" />
        </div>
        <p>{restaurant?.cuisines.join(", ")}</p>
        <p>{restaurant?.city}</p>
        <p>{restaurant?.areaName}</p>
        <p>{restaurant?.costForTwoMessage}</p>
        <p> ⭐ {restaurant?.avgRating}</p>
    
      </div>

       

        {!menu ? (
          <Shimmer />
        ) : (
          <div className="menu-card">
                <h1>Menu</h1>
            <ul>
              {Object.values(menu).map((item) => (
                <li key={item?.card?.info?.id}>
                  <h3>{item?.card?.info?.name}</h3>
                      <p>{item?.card?.info?.description}</p>
                      {!item?.card?.info?.defaultPrice ?
                      <p>{item?.card?.info?.defaultPrice}</p>
                      :
                      <p>{item?.card?.info?.price}</p>
                      }
                </li>
              ))}
            </ul>
          </div>
                      )
        }
        
    </div>
  );
};

export default RestanurantMenu;
