import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope, 
    faArrowRight,
    faChevronUp,
    faCheck 
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
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [focusedLink, setFocusedLink] = useState(null);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
            // Reset after 3 seconds with smooth transition
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show/hide scroll button based on scroll position
    useEffect(() => {
        const toggleScrollButton = () => {
            setShowScrollButton(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleScrollButton);
        return () => window.removeEventListener('scroll', toggleScrollButton);
    }, []);

    return (
        <footer 
            className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="py-12 animate-fadeIn">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        
                        <div className="space-y-4 group">
                            <h1 className="text-2xl font-semibold text-white mb-6 transition-all duration-300 group-hover:text-purple-200">
                                Loco Musica
                            </h1>
                            <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                                Discover a place where music and food come together to create a feast for your senses. From mouthwatering dishes to vibrant melodies, we serve a vibe you won't forget.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white mb-4 relative">
                                <span className="border-b-2 border-white pb-1 inline-block">Office</span>
                            </h3>
                            <div className="space-y-2">
                                <p className="text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-default">
                                    123 Harmony Street
                                </p>
                                <p className="text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-default">
                                    Melody Town, CA 90210
                                </p>
                                <Link 
                                    to="/contact" 
                                    className="block text-purple-300 hover:text-purple-200 text-sm transition-all duration-300 transform hover:translate-x-1 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-1 py-0.5"
                                    aria-label="Send email to info@locomusica.com"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    info@locomusica.com
                                </Link>
                                <p className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-200 cursor-default">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white mb-4 relative">
                                <span className="border-b-2 border-white pb-1 inline-block">Links</span>
                            </h3>
                            <nav role="navigation" aria-label="Footer navigation">
                                <ul className="space-y-2">
                                    {[
                                        { name: 'Home', path: '/' },
                                        { name: 'About', path: '/about' },
                                        { name: 'Contact', path: '/contact' }
                                    ].map((link, index) => (
                                        <li key={index}>
                                            <Link 
                                                to={link.path}
                                                className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2 hover:font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 inline-block relative group"
                                                onFocus={() => setFocusedLink(index)}
                                                onBlur={() => setFocusedLink(null)}
                                                aria-label={`Navigate to ${link.name} page`}
                                            >
                                                <span className="relative z-10">{link.name}</span>
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4 relative">
                                <span className="border-b-2 border-white pb-1 inline-block">Newsletter</span>
                            </h3>
                            
                            <form onSubmit={handleNewsletterSubmit} className="space-y-4" noValidate>
                                <div className="relative group">
                                    <div className="flex items-center border-b border-gray-300 pb-2 transition-all duration-300 group-focus-within:border-purple-300 group-focus-within:pb-3">
                                        <FontAwesomeIcon 
                                            icon={faEnvelope} 
                                            className="text-gray-300 text-sm mr-3 transition-colors duration-300 group-focus-within:text-purple-300" 
                                            aria-hidden="true"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Enter your Email ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-transparent border-0 outline-none text-white w-full text-sm placeholder-gray-400 transition-all duration-300 focus:placeholder-gray-300"
                                            required
                                            aria-label="Email address for newsletter subscription"
                                            aria-describedby="newsletter-description"
                                            disabled={isSubmitted}
                                        />
                                        <button 
                                            type="submit" 
                                            className="ml-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                            aria-label="Subscribe to newsletter"
                                            disabled={isSubmitted}
                                        >
                                            <FontAwesomeIcon 
                                                icon={isSubmitted ? faCheck : faArrowRight} 
                                                className={`text-sm transition-all duration-300 ${isSubmitted ? 'text-green-400' : ''}`} 
                                            />
                                        </button>
                                    </div>
                                    
                                    {isSubmitted && (
                                        <div 
                                            className="absolute top-full left-0 mt-2 text-green-400 text-xs animate-slideInUp"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            ✓ Successfully subscribed!
                                        </div>
                                    )}
                                </div>
                                
                                <p id="newsletter-description" className="text-gray-400 text-xs sr-only">
                                    Subscribe to receive special offers, menu updates, and event notifications
                                </p>
                            </form>
                            
                            <div className="mt-6">
                                <h4 className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-3" role="list" aria-label="Social media links">
                                    {[
                                        { icon: faFacebookF, label: 'Facebook', color: 'hover:bg-blue-100' },
                                        { icon: faXTwitter, label: 'Twitter', color: 'hover:bg-gray-100' },
                                        { icon: faWhatsapp, label: 'WhatsApp', color: 'hover:bg-green-100' },
                                        { icon: faInstagram, label: 'Instagram', color: 'hover:bg-pink-100' },
                                        { icon: faGithub, label: 'GitHub', color: 'hover:bg-gray-100' }
                                    ].map((social, index) => (
                                        <Link 
                                            key={index}
                                            to="/contact"
                                            className={`bg-white text-gray-800 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent ${social.color}`}
                                            aria-label={`Connect with us on ${social.label} - Opens contact page`}
                                            role="listitem"
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.animationDelay = `${index * 0.1}s`;
                                            }}
                                        >
                                            <FontAwesomeIcon 
                                                icon={social.icon} 
                                                className="text-xs transition-transform duration-300 hover:scale-110" 
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative my-8">
                        <hr className="w-0 mx-auto border-gray-400 animate-expandWidth" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                        <p className="text-gray-300 text-sm font-medium">© {new Date().getFullYear()} Loco Musica. All rights reserved.</p>
                        <p className="text-gray-400 text-sm mt-1">Bringing the rhythm to your taste buds, one order at a time!</p>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 z-50 ${
                    showScrollButton 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-16 opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll to top of page"
                aria-hidden={!showScrollButton}
            >
                <FontAwesomeIcon 
                    icon={faChevronUp} 
                    className="text-sm transition-transform duration-300 hover:-translate-y-0.5" 
                />
            </button>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes expandWidth {
                    from { width: 0; }
                    to { width: 91.666667%; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.4s ease-out forwards;
                }
                
                .animate-expandWidth {
                    animation: expandWidth 1s ease-out forwards;
                    width: 0;
                }

                /* Reduce motion for users who prefer it */
                @media (prefers-reduced-motion: reduce) {
                    .animate-fadeIn,
                    .animate-fadeInUp,
                    .animate-slideInUp,
                    .animate-expandWidth {
                        animation: none;
                        opacity: 1;
                        transform: none;
                        width: 91.666667%;
                    }
                    
                    * {
                        transition-duration: 0.01ms !important;
                        animation-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
