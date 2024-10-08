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

const Header = () => {
  const { login, setLogin, user, setUser } = useContext(UserContext);

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
      <div className="flex justify-between items-center bg-transparent shadow-md my-2 py-2 px-4 flex-wrap">
      <div className="my-2 hidden lg:block ">
          <Link to="/">
            <img
              src={Loco}
              alt="logo"
              data-testid="logo"
              className="h-12 w-12 shadow-sm border rounded-tr-lg rounded-bl-lg"
            />
          </Link>
        </div>

        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>

        <div className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 p-3 m-2">
            <li>
              <Link className="hover:text-pink-300" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-pink-300" to="/about">About</Link>
            </li>
            <li>
              <Link className="hover:text-pink-300" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="flex items-center hover:text-pink-300" to="/recipeStore">

                <img src={RecipeStore} alt="recipeStore" className="h-5 w-5 mx-2" /> - <span className="mx-2">{recipes.length}</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center hover:text-pink-300" data-testid="cart" to="/cart">

                <img src={Cart} alt="cart" className="h-5 w-5 mx-2" /> - <span className="mx-2">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-3 m-2">

          {login ? (
            <div onClick={handleLogout}>
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
        {isOnline ? (
          <div className="border mx-auto bg-green-400 rounded-md h-2 w-1/2 md:w-1/3" />
        ) : (
          <div className="border mx-auto bg-red-400 rounded-md h-2 w-1/2 md:w-1/3" />
        )}
      </h1>
    </>
  );
};

export default Header;
