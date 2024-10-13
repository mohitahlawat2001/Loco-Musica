import UserContext from "../utils/useContext";
import { useContext } from "react";
import { useState,useEffect } from "react";

const Profile = () => {
    const { login , email,name } = useContext(UserContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(savedDarkMode); 
    });
    return (
      <div className={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}>

    
        <div className="h-64 flex items-center justify-center rounded-3xl p-2 m-2">
            <div className=" shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold  mb-4 text-center">Profile</h1>
                <div className="flex flex-col items-center space-y-4">
                {login ? (
  <div className="text-center">
    <p className="text-lg font-medium ">
      Name: <span className="font-semibold">{name}</span>
    </p>
    <p className="text-lg font-medium ">
      Email: <span className="font-semibold">{email}</span>
    </p>
  </div>
) : (
  <p className="text-lg font-medium ">
    Please log in to view your profile.
  </p>
)}

                </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;
