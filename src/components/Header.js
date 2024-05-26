import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Loco from "../assets/loco.png";

const Header = () => {
  const [login, setLogin] = React.useState(false);
  const isOnline = useOnline();
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
    <div className=" flex justify-between bg-transparent shadow-md m-2 p-2 ">
      <div className=" m-2 ">
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
              <Link  className="flex" data-testid="cart" to="/cart"> 
              <img src={Cart} alt="cart" className="h-5 w-5 mx-2" /> - <span className="mx-2">{cart.length}</span>
              </Link>
            </li>
        </ul>
      </div>
      <div className="p-3 m-2 ">
        {login ? (
          <button className="login__button" onClick={() => setLogin(false)}>
            Logout
          </button>
        ) : (
          <button className="logout__button" onClick={() => setLogin(true)}>
            Login
          </button>
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
