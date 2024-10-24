import { useState } from "react";
import Mascot from "../assets/mascot.png";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";



const RegisterRestaurant = () => {
    const storedUser = JSON.parse(sessionStorage.getItem("User"));
    // console.log("stored user is: " , storedUser);
    const [restaurantData , setRestaurantData] = useState({
        user:storedUser ? storedUser._id : null,
        name:"",
        address:"",
        location:"",
        coverImg:null
    })
    const formData = new FormData();
    Object.keys(restaurantData).forEach((key) => {
        if (key === 'coverImg') {
          if (restaurantData.coverImg) {
            formData.append(key, restaurantData.coverImg); 
          }
        } else {
          formData.append(key, restaurantData[key]);
        }
    });
    // console.log("the restaurant data from localstate: " , restaurantData);
    const {registerRestaurant} = useAuth();
    const handleRestaurant = async (e)=>{
        e.preventDefault();
        try {
            registerRestaurant(formData);
            console.log("response from restaurant page: " , response);
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
                <h1 className="text-3xl font-bold text-center">Register Restanurant</h1>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input 
                            value={restaurantData.name} 
                            onChange={(e) => setRestaurantData({...restaurantData , name:e.target.value})} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="address" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            placeholder="Enter Address" 
                            value={restaurantData.address} 
                            onChange={(e) => setRestaurantData({...restaurantData , address:e.target.value})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="location" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Location</label>
                        <input 
                            type="text" 
                            name="location" 
                            id="location" 
                            placeholder="Enter location" 
                            value={restaurantData.location} 
                            onChange={(e) => setRestaurantData({...restaurantData , location:e.target.value})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                        
                    </div>
                    <div className="mb-6">
                        <label htmlFor="coverImg" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Cover Image of Restaurant</label>
                        <input 
                            type="file" 
                            name="coverImg" 
                            id="coverImg" 
                            placeholder="coverImg" 
                            onChange={(e) => setRestaurantData({...restaurantData , coverImg:e.target.files[0]})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded 
                    text-white hover:bg-yellow-400">create new restaurant</button>
                    <Link to={"/foodmenu"}><span>want to FoodItem</span></Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterRestaurant;
