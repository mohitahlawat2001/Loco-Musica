import React from "react";

const Header = () => {
        return (
                <div className="nav-bar">
                        <div className="nav-bar__logo">
                                <a href="/" >
                                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="logo" />
                                </a>
                        </div>
                        <div className="nav-bar__menu">
                                <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                </ul>
                        </div>
                
                </div>
        )
}

export default Header;