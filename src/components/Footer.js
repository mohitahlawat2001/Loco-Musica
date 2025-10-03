import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope, 
    faArrowRight, 
    faMapMarkerAlt, 
    faPhone,
    faChevronUp 
} from "@fortawesome/free-solid-svg-icons";
import { 
    faFacebookF, 
    faWhatsapp, 
    faInstagram, 
    faGithub, 
    faXTwitter 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white">
            
            <div className="bg-purple-600 h-2 w-full"></div>
            
            
            <div className="py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        
                        
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h1 className="text-5xl font-bold text-purple-400 mb-4">
                                    Loco Musica
                                </h1>
                                <div className="w-20 h-1 bg-purple-500 mb-6"></div>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                Discover a place where music and food come together to create a feast for your senses. 
                                From mouthwatering dishes to vibrant melodies, we serve a vibe you won't forget.
                            </p>
                            
                            
                            <div className="space-y-4 pt-6">
                                <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 font-medium">123 Harmony Street</p>
                                        <p className="text-gray-400 text-sm">Melody Town, CA 90210</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                                    </div>
                                    <p className="text-gray-300 font-medium">+1 (555) 123-4567</p>
                                </div>
                                
                                <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                                    </div>
                                    <p className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200">
                                        info@locomusica.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Quick Links
                                </h3>
                                <div className="w-full h-px bg-gray-700"></div>
                            </div>
                            <ul className="space-y-3">
                                {['Home', 'About Us',  'Contact'].map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href="#" 
                                            className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 flex items-center p-2 rounded-md"
                                            role="link"
                                            aria-label={`Navigate to ${link} page`}
                                        >
                                            <div className="w-2 h-2 bg-purple-500 rounded-sm mr-3"></div>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Stay Updated
                                </h3>
                                <div className="w-full h-px bg-gray-700"></div>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <p className="text-gray-300 text-sm mb-4">
                                    Subscribe to get special offers, menu updates, and event notifications.
                                </p>
                                
                                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-200"
                                        required
                                        aria-label="Email address for newsletter subscription"
                                    />
                                    
                                    <button 
                                        type="submit"
                                        disabled={isSubmitted}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                        aria-label="Subscribe to newsletter"
                                    >
                                        {isSubmitted ? (
                                            <span className="text-green-300">✓ Subscribed!</span>
                                        ) : (
                                            <>
                                                <span>Subscribe</span>
                                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>

                            
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">Follow Us</h4>
                                <div className="flex space-x-3">
                                    {[
                                        { icon: faFacebookF, color: 'bg-blue-600 hover:bg-blue-700' },
                                        { icon: faXTwitter, color: 'bg-gray-700 hover:bg-gray-600' },
                                        { icon: faWhatsapp, color: 'bg-green-600 hover:bg-green-700' },
                                        { icon: faInstagram, color: 'bg-pink-600 hover:bg-pink-700' },
                                        { icon: faGithub, color: 'bg-gray-600 hover:bg-gray-500' }
                                    ].map((social, index) => (
                                        <a 
                                            key={index}
                                            href="#" 
                                            className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                            aria-label={`Follow us on social media platform ${index + 1}`}
                                        >
                                            <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="h-px bg-gray-700 mt-16 mb-8"></div>

                    
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm font-medium">© 2024 Loco Musica. All rights reserved.</p>
                            <p className="text-gray-500 text-xs mt-1">Bringing the rhythm to your taste buds, one order at a time!</p>
                        </div>
                        
                        
                        <div className="flex space-x-6 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="text-gray-400 hover:text-purple-400 hover:bg-gray-800 transition-all duration-200 px-3 py-2 rounded-md"
                                    aria-label={`Read our ${link}`}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 z-50"
                aria-label="Scroll to top of page"
            >
                <FontAwesomeIcon icon={faChevronUp} className="text-xl" />
            </button>
        </footer>
    );
};

export default Footer;
