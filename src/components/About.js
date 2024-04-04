import { Outlet } from "react-router-dom";
import UserContext from "../utils/useContext";
import { useContext } from "react";

const About = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="bg-gray-200">
            <h1 className="text-2xl font-bold text-center mt-8">
                This site is made for fun with Swiggy API
            </h1>
            <h2 className="text-xl font-semibold text-center mt-4">
                Welcome {user.name}!
            </h2>
            <Outlet />
        </div>
    )
};

export default About;