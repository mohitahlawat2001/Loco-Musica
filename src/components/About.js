import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gray-200">
            <h1 className="text-2xl font-bold text-center mt-8">
                This site is made for fun with Swiggy API
            </h1>
            <Outlet />
        </div>
    )
};

export default About;