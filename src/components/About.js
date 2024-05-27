import { Link, Outlet } from "react-router-dom";
import UserContext from "../utils/useContext";
import { useContext } from "react";
import Mascot from "../assets/mascot.png";
import { useState } from "react";


const About = () => {
    const { user } = useContext(UserContext);
    const [linkTo, setLinkTo] = useState("/about/profile");

    const toggleLink = () => {
        setLinkTo(prevLinkTo => prevLinkTo === "/about/profile" ? "/about" : "/about/profile");
    }
    return (
        <div className="bg-gray-200">
                    <Link to={linkTo} onClick={toggleLink}>
            <button className="bg-green-500 text-white font-bold p-2 m-2 rounded-lg hover:bg-green-600">
                Profile
            </button>
        </Link>

            <h2 className="text-xl font-semibold text-center mt-4">
                Welcome {user.name}!
            </h2>
            <Outlet />

            <section className="bg-white text-gray-800 py-12 my-5 mx-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-3xl font-bold mb-6 text-center">About Loco Musica</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="mb-4">
                                Welcome to <strong>Loco Musica</strong>, where food meets music in perfect harmony! Our mission is to bring you an unforgettable culinary experience, whether you're ordering your favorite dishes or exploring new recipes. At Loco Musica, we believe that food and music are universal languages that bring people together, and we’re here to make your dining experience as enjoyable and exciting as possible.
                            </p>
                            <p className="mb-4">
                                Founded by food enthusiasts and music lovers, Loco Musica aims to create a vibrant community where you can discover delicious meals and learn to cook like a pro. Our platform offers a seamless ordering process and a rich collection of recipes that cater to all tastes and preferences.
                            </p>
                            <p className="mb-4">
                                Whether you’re looking for a quick bite, a gourmet meal, or a fun new recipe to try at home, Loco Musica has got you covered. Our team is dedicated to providing top-notch service and ensuring that every meal is a delightful experience.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={Mascot} alt="Loco Musica" className="rounded-lg shadow-lg " />
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Join Us on This Flavorful Journey</h3>
                        <p className="mb-4">
                            Explore our app, order your favorite dishes, and discover new recipes today. Let’s make every meal a musical experience!
                        </p>
                        <Link to='/' className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
            <h2 className="text-xl font-semibold text-center m-4 p-4">
                Please contact us for any queries
                <Link to='/contact' className="inline-block bg-green-500 text-white font-bold p-2 m-2 rounded-lg hover:bg-green-600">
                    Contact
                </Link>         
            </h2>

        </div>
    )
};

export default About;