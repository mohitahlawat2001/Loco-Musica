import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = React.useState(false);
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <a href="/">
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="nav-bar__menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="login">
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
  );
};

export default Header;
