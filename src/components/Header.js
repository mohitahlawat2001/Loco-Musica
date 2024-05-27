import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Loco from "../assets/loco.png";
import Login from "../assets/login.png";
import Logout from "../assets/logout.png";
import RecipeStore from "../assets/recipeStore.png";
import { useContext } from "react";
import UserContext  from "../utils/useContext";

const Header = () => {
  const { user ,setUser } = useContext(UserContext);
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
    <>
    <div className=" flex justify-between bg-transparent shadow-md my-2 py-2 ">
      <div className=" mx-4 my-2 ">
        <Link href="/">
          <img
            src={Loco}
              alt="logo"
              data-testid="logo"
              className="h-12 w-12 shadow-sm  border  rounded-tr-lg rounded-bl-lg "
          />
        </Link>
      </div>
      <div >
        <ul className="flex flex-row space-x-5 p-3 m-2" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="flex" to="/recipeStore">
              <img src={RecipeStore} alt="recipeStore" className="h-5 w-5 mx-2" /> -
               <span className="mx-2">{recipes.length}</span>
              </Link>
            </li>
            <li>
              <Link  className="flex" data-testid="cart" to="/cart"> 
              <img src={Cart} alt="cart" className="h-5 w-5 mx-2" /> - <span className="mx-2">{cart.length}</span>
              </Link>
            </li>
            
        </ul>
      </div>
      <div className="p-3 m-2 ">
        {user.login ? 
            <div onClick={handleLogout}>
              <img src={Logout} alt="logout" className="h-9 w-9 mx-2" /> 
            </div>
            : (
            <Link to="/login">
              <img src={Login} alt="login" className="h-9 w-9 mx-2" />
            </Link>
        )}
      </div>

      </div>

      <h1 data-testid="online-status">
      {
        isOnline ? (
          <div className="border mx-80 bg-green-400 rounded-md h-2  ">
          </div>
        ) : (
            <div className="border mx-80 bg-red-400 rounded-md h-2 ">
          </div>
        )
      }
      </h1>
      
    </>
  );
};

export default Header;
