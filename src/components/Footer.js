import React from "react";
import UserContext from "../utils/useContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
        const { user } = useContext(UserContext);
        return (
                <div className="bg-gray-900 text-white py-6 mt-4">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-24">

                                {/* Section 1: Website Name and Contact Details */}
                                <div>
                                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-gray-300 to-gray-100 text-transparent bg-clip-text">
                                                Loco Musica
                                        </h1>
                                        <p className="italic">Food & Tunes in Harmony</p>
                                        <div className="flex space-x-4 mt-5 md:mt-24">
                                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 hover:ring-4 hover:ring-blue-600 transition duration-200">
                                                        <a href="https://www.linkedin.com/in/mohitahlawat/" target="_blank" rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-600" />
                                                        </a>
                                                </div>

                                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 hover:ring-4 hover:ring-red-400 transition duration-200">
                                                        <a href="https://www.github.com/mohitahlawat2001/" target="_blank" rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-red-400" />
                                                        </a>
                                                </div>

                                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 hover:ring-4 hover:ring-blue-400 transition duration-200">
                                                        <a href="https://www.twitter.com/mahlawat2001/" target="_blank" rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400" />
                                                        </a>
                                                </div>

                                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 hover:ring-4 hover:ring-orange-500 transition duration-200">
                                                        <a href="https://discordapp.com/users/761943074426454026" target="_blank" rel="noopener noreferrer">
                                                                <FontAwesomeIcon icon={faDiscord} className="text-2xl hover:text-orange-500" />
                                                        </a>
                                                </div>
                                        </div>


                                </div>

                                {/* Section 2: Popular Categories */}
                                <div>
                                        <h2 className="text-lg font-semibold mb-4">Popular Categories</h2>
                                        <ul className="space-y-2">
                                                <ul className="space-y-2">
                                                        <li className="hover:text-yellow-400 cursor-pointer">Desserts</li>
                                                        <li className="hover:text-yellow-400 cursor-pointer">Main Courses</li>
                                                        <li className="hover:text-yellow-400 cursor-pointer">Quick Bites</li>
                                                        <li className="hover:text-yellow-400 cursor-pointer">Healthy Recipes</li>
                                                </ul>

                                        </ul>
                                </div>

                                {/* Section 3: Popular Recipes (New Section) */}
                                <div>
                                        <h2 className="text-lg font-semibold mb-4">Popular Recipes</h2>
                                        <ul className="space-y-2">
                                                <div>
                                                        <ul className="space-y-2">
                                                                <li className="hover:text-yellow-400 cursor-pointer">Best Homemade Pizza</li>
                                                                <li className="hover:text-yellow-400 cursor-pointer">Crispy Masala Dosa</li>
                                                                <li className="hover:text-yellow-400 cursor-pointer">Butter Chicken</li>
                                                                <li className="hover:text-yellow-400 cursor-pointer">Paneer Tikka</li>
                                                        </ul>
                                                </div>

                                        </ul>
                                </div>

                                {/* Section 4: Feedback Form */}
                                <div>
                                        <h2 className="text-lg font-semibold mb-4">We Value Your Feedback</h2>
                                        <form>
                                                <input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="w-full mb-2 p-2 rounded text-gray-900"
                                                />
                                                <textarea
                                                        placeholder="Your feedback"
                                                        className="w-full p-2 rounded text-gray-900 mb-4 resize-none"
                                                />
                                                <button
                                                        type="submit"
                                                        className="bg-yellow-500 px-4 py-2 text-gray-900 font-bold rounded hover:bg-yellow-400"
                                                >
                                                        Submit
                                                </button>
                                        </form>
                                        <p className="text-sm mt-4">
                                                Your feedback helps us improve our recipes and services. We appreciate your thoughts and will use them to make your experience even better!
                                        </p>
                                </div>
                        </div>

                        {/* Bottom Row with Copyright */}
                        <div className="border-t border-white mt-6 pt-4 text-center">
                                <p>© 2024 Loco Musica. All rights reserved.</p>
                                <p>Cook, taste, and enjoy the rhythm of your favorite recipes!</p>
                        </div>
                </div>


        );
};

export default Footer;