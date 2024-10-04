import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Loco from "../assets/loco.png";
import RecipeStore from "../assets/recipeStore.png";
import { useContext } from "react";
import UserContext from "../utils/useContext";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const isOnline = useOnline();
  const cart = useSelector((state) => state.cart.items);
  const recipes = useSelector((state) => state.recipe.recipes);

  const handleLogout = () => {
    setUser({
      name: "Guest",
      email: "email.com",
      password: "password",
      login: false,
    });
  };

  return (
    <header className="flex flex-wrap items-center justify-between bg-transparent shadow-md py-2 px-4 md:px-10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src={Loco}
            alt="logo"
            data-testid="logo"
            className="h-10 w-10 md:h-12 md:w-12 shadow-sm border rounded-tr-lg rounded-bl-lg"
          />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex-grow">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-5 p-3">
          <li>
            <Link to="/" className="text-sm sm:text-base">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-sm sm:text-base">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm sm:text-base">
              Contact
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-sm sm:text-base" to="/recipeStore">
              <img src={RecipeStore} alt="recipeStore" className="h-4 w-4 sm:h-5 sm:w-5 mx-1" />
              <span>{recipes.length}</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-sm sm:text-base" data-testid="cart" to="/cart">
              <img src={Cart} alt="cart" className="h-4 w-4 sm:h-5 sm:w-5 mx-1" />
              <span>{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* User Login/Logout */}
      <div className="flex-shrink-0">
        {user.login ? (
          <div onClick={handleLogout} className="cursor-pointer">
            <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
          </div>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
          </Link>
        )}
      </div>

      <h1 data-testid="online-status" className="w-full mt-2">
        {isOnline ? (
          <div className="mx-auto w-1/2 h-2 bg-green-400 rounded-md"></div>
        ) : (
          <div className="mx-auto w-1/2 h-2 bg-red-400 rounded-md"></div>
        )}
      </h1>
    </header>
  );
};

export default Header;
