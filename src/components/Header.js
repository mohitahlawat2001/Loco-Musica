import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Loco from "../assets/loco.png";

import RecipeStore from "../assets/recipeStore.png";
import UserContext from "../utils/useContext";
import { faCircleUser, faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { login, setLogin, user, setUser } = useContext(UserContext);
  const storedUser = JSON.parse(sessionStorage.getItem("User"));
  const {logoutUser} = useAuth();

  const isOnline = useOnline();
  const cart = useSelector((state) => state.cart.items);
  const recipes = useSelector((state) => state.recipe.recipes);


const [isMenuOpen , setMenuOpen] = useState(false);
  const handleLogout = () => {
   setLogin(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="max-w-screen-lg mx-auto flex justify-between items-center border border-gray-300 rounded-lg shadow-md mt-4 py-1 px-4 sticky top-0 z-10 bg-white mix-blend-normal">
  <div className="my-2  hidden md:block">
    <Link to="/">
      <img
        src={Loco}
        alt="logo"
        data-testid="logo"
        className="h-10 w-10 shadow-sm border rounded-tr-lg rounded-bl-lg"
      />
    </Link>
  </div>

  <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
    <FontAwesomeIcon icon={faBars} size="2xl" />
  </div>

  <div className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:block`}>
    <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5 p-2 m-2">
      <li>
        <Link className="relative inline-block hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" to="/">
          Home
          <span className="absolute left-0 bottom-0 h-1 bg-pink-300 transform scale-x-0 transition-transform duration-300 origin-right hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
        <Link className="relative inline-block hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" to="/about">
          About
          <span className="absolute left-0 bottom-0 h-1 bg-pink-300 transform scale-x-0 transition-transform duration-300 origin-right hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
        <Link className="relative inline-block hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" to="/contact">
          Contact
          <span className="absolute left-0 bottom-0 h-1 bg-pink-300 transform scale-x-0 transition-transform duration-300 origin-right hover:scale-x-100"></span>
        </Link>
      </li>
      <li>
        <Link className="flex items-center hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" to="/recipeStore">
          <img src={RecipeStore} alt="recipeStore" className="h-5 w-5 mx-2 transition-transform duration-300 transform hover:scale-105" />
          <span className="mx-2">{recipes.length}</span>
        </Link>
      </li>
      <li>
        <Link className="flex items-center hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" data-testid="cart" to="/cart">
          <img src={Cart} alt="cart" className="h-5 w-5 mx-2 transition-transform duration-300 transform hover:scale-105" />
          <span className="mx-2">{cart.length}</span>
        </Link>
      </li>
    </ul>
  </div>

  <div>
    {
      storedUser && storedUser.role === "owner" ? (
        <>
          <li style={{ listStyleType: "none" }}>
            <Link className="relative inline-block hover:text-pink-300 font-bold transition-transform duration-300 transform hover:scale-105" to="/registerrestaurant">
            registerRestaurant
            <span className="absolute left-0 bottom-0 h-1 bg-pink-300 transform scale-x-0 transition-transform duration-300 origin-right hover:scale-x-100"></span>
            </Link>
          </li>
      </>
      ) : ""
    }
  </div>

  <div className="p-2 m-2">
    {storedUser ? (
      <div onClick={logoutUser} className="cursor-pointer">
        <FontAwesomeIcon icon={faRightFromBracket} size="2xl" />
      </div>
    ) : (
      <Link to="/login">
        <FontAwesomeIcon icon={faCircleUser} size="2xl" />
      </Link>
    )}
  </div>
</div>

<h1 data-testid="online-status">
  <div className={`border mx-auto rounded-md h-2 w-1/2 md:w-1/3 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
</h1>

    </>
  );
};

export default Header;
