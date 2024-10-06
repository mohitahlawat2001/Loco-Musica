import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 rounded-tl-[100px] rounded-tr-none"
            style={{ background: "linear-gradient(to right, #00093c, #4e014e)" }}
        >
            <div className="flex flex-wrap justify-between container mx-auto px-4">
                {/* Column 1 */}
                <div className="w-full md:w-1/4 p-4">
                    <h1 className="text-4xl mb-4">Loco Musica</h1>
                    <p className="text-sm">
                        Discover a place where music and food come together to create a feast for your senses. From
                        mouthwatering dishes to vibrant melodies, we serve a vibe you won't forget.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/6 p-4">
                    <h3 className="text-lg mb-6 inline-block border-b-2 border-white pb-1">Office</h3>
                    <p>123 Harmony Street</p>
                    <p>Melody Town, CA 90210</p>
                    <p className="email-id">info@locomusica.com</p>
                    <h4 className="mt-2">+1 (555) 123-4567</h4>
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-1/6 p-4">
                    <h3 className="text-lg mb-6 inline-block border-b-2 border-white pb-1">Links</h3>
                    <ul>
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="w-full md:w-1/4 p-4">
                    <h3 className="text-lg mb-6 inline-block border-b-2 border-white pb-1">Newsletter</h3>
                    <form className="flex items-center border-b border-gray-300 pb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-lg mr-2" />
                        <input
                            type="email"
                            placeholder="Enter your Email ID"
                            className="bg-transparent border-0 outline-none text-white w-full"
                            required
                        />
                        <button type="submit" className="ml-2 text-lg">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </form>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faFacebookF} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full p-1" />
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faTwitter} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full p-1" />
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faWhatsapp} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full p-1" />
                        </a>
                        <a href="#" className="text-white">
                            <FontAwesomeIcon icon={faInstagram} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full p-1" />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="w-11/12 mx-auto my-6 border-gray-300" />

            <div className="text-center mt-4">
                <p className="text-sm">© 2024 Loco Musica. All rights reserved.</p>
                <p className="text-sm">Bringing the rhythm to your taste buds, one order at a time!</p>
            </div>
        </footer>
    );
};

export default Footer;
