import React from "react";
import UserContext from "../utils/useContext";
import { useContext } from "react";

const Footer = () => {
        const { user } = useContext(UserContext);
        return (
                <div className="bg-gray-900 text-white py-4">
                        <div className="container mx-auto px-4">
                                <h1 className="text-2xl">Footer</h1>
                        </div>
                        <div className="container mx-auto px-4">
                                <p className="text-center">Welcome {user.name}!</p>
                                <p className="text-center">Email: {user.email}</p>
                                </div>
                </div>
        );
};

export default Footer;