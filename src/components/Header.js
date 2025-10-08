import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Loco from "../assets/loco.png";

import RecipeStore from "../assets/recipeStore.png";
import UserContext from "../utils/useContext";
import { faCircleUser, faRightFromBracket, faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { login, setLogin } = useContext(UserContext);
  const isOnline = useOnline();
  const cart = useSelector((state) => state.cart.items);
  const recipes = useSelector((state) => state.recipe.recipes);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // --- LOGGING ADDED HERE ---
    console.log(`EFFECT TRIGGERED: Applying theme: ${theme}`);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogout = () => {
    setLogin(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    // --- LOGGING ADDED HERE ---
    setTheme(newTheme);
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto flex justify-between items-center border border-gray-300 rounded-lg shadow-md mt-4 py-1 px-4 sticky top-0 z-10 bg-white dark:bg-gray-800 dark:border-gray-700 mix-blend-normal">
        {/* ... rest of your JSX is the same ... */}
        <div className="my-2 hidden md:block">
          <Link to="/">
            <img src={Loco} alt="logo" data-testid="logo" className="h-10 w-10 shadow-sm border rounded-tr-lg rounded-bl-lg" />
          </Link>
        </div>
        <div className="md:hidden flex items-center cursor-pointer text-gray-800 dark:text-gray-200" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>
        <div className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5 p-2 m-2 text-gray-800 dark:text-gray-200">
            <li><Link className="relative inline-block hover:text-pink-300 font-bold" to="/">Home</Link></li>
            <li><Link className="relative inline-block hover:text-pink-300 font-bold" to="/about">About</Link></li>
            <li><Link className="relative inline-block hover:text-pink-300 font-bold" to="/contact">Contact</Link></li>
            <li><Link className="flex items-center hover:text-pink-300 font-bold" to="/recipeStore"><img src={RecipeStore} alt="recipeStore" className="h-5 w-5 mx-2" /><span>{recipes.length}</span></Link></li>
            <li><Link className="flex items-center hover:text-pink-300 font-bold" data-testid="cart" to="/cart"><img src={Cart} alt="cart" className="h-5 w-5 mx-2" /><span>{cart.length}</span></Link></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 p-2 m-2 text-gray-800 dark:text-gray-200">
          <button onClick={handleThemeSwitch} className="cursor-pointer">
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size="2xl" /> : <FontAwesomeIcon icon={faSun} size="2xl" />}
          </button>
          {login ? (
            <div onClick={handleLogout} className="cursor-pointer"><FontAwesomeIcon icon={faRightFromBracket} size="2xl" /></div>
          ) : (
            <Link to="/login"><FontAwesomeIcon icon={faCircleUser} size="2xl" /></Link>
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