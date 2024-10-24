import { useState } from "react";
import Mascot from "../assets/mascot.png";
import { useAuth } from "../context/authContext";



const AddFoodMenu = () => {
    const storedRestaurant = JSON.parse(sessionStorage.getItem("Restaurant"));
    // console.log("stored restaurant is: " , storedRestaurant);
    const [foodMenuData , setFoodMenuData] = useState({
        restaurant:storedRestaurant ? storedRestaurant._id : null,
        name:"",
        price:0,
        img:null
    })
    const formData = new FormData();
    Object.keys(foodMenuData).forEach((key) => {
        if (key === 'img') {
          if (foodMenuData.coverImg) {
            formData.append(key, foodMenuData.img); 
          }
        } else {
          formData.append(key, foodMenuData[key]);
        }
    });
    // console.log("the foodmenu data from localstate: " , foodMenuData);
    const {registerFoodMenu} = useAuth();
    const handleRestaurant = async (e)=>{
        e.preventDefault();
        try {
            registerFoodMenu(formData);
            // console.log("response from restaurant page: " , response);
        } catch (error) {
            console.log("error from register page: " , error);
        }
    }
    return (
        <div className="flex flex-row items-center justify-around h-screen bg-gray-100" onSubmit={handleRestaurant}>
            <div>
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Add FoodMenu</h1>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input 
                            value={foodMenuData.name} 
                            onChange={(e) => setFoodMenuData({...foodMenuData , name:e.target.value})} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Price</label>
                        <input 
                            value={foodMenuData.price} 
                            onChange={(e) => setFoodMenuData({...foodMenuData , price:e.target.value})} 
                            type="number" 
                            name="price" 
                            id="price" 
                            min={0}
                            placeholder="Enter price" 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="coverImg" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Add food Image</label>
                        <input 
                            type="file" 
                            name="img" 
                            id="img" 
                            placeholder="img" 
                            onChange={(e) => setFoodMenuData({...foodMenuData , img:e.target.files[0]})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded 
                    text-white hover:bg-yellow-400">create new foodItem</button>
                </form>
            </div>
        </div>
    );
};

export default AddFoodMenu;
