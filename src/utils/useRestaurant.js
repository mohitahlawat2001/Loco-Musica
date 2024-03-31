const { useState, useEffect } = require("react");
const { SwiggyMenuApi } = require("../Constants");

const useRestaurant = (id ) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);
    
    useEffect(() => {
        getMenu();
    }, []);
    
    const getMenu = async () => {
        try {
        const response = await fetch(SwiggyMenuApi + id);
        const json = await response.json();
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
    
    return { restaurant, menu };

}

export default useRestaurant;