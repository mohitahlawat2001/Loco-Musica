import React from "react";
import UserContext from "../utils/useContext";
import { useContext } from "react";

const Footer = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-gray-900 text-white py-4 mt-4">
            <div className="flex flex-col justify-around items-center">
                {/* Centered Header */}
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl">Loco Musica: Food & Tunes in Harmony</h1>
                </div>

                {/* Social Media Links */}
                <div className="mt-4 flex space-x-6 justify-center">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter text-2xl"></i> {/* FontAwesome Icon for Twitter */}
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram text-2xl"></i> {/* FontAwesome Icon for Instagram */}
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-2xl"></i> {/* FontAwesome Icon for LinkedIn */}
                    </a>
                </div>

                {/* Tagline */}
                <div className="mt-6 pt-4 text-center">
                    <p>© 2024 Loco Musica. All rights reserved.</p>
                    <p>Bringing the rhythm to your taste buds, one order at a time!</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
