import React from "react";
import UserContext from "../utils/useContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-gray-900 text-white py-4 mt-4">
      <div className="flex flex-row justify-around">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl">Loco Musica: Food & Tunes in Harmony</h1>
        </div>
        <div className="container mx-auto px-4">
          <p className="text-center">Welcome {user.name}!</p>
          <p className="text-center">Email: {user.email}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 text-center">
        <p>© 2024 Loco Musica. All rights reserved.</p>
        <p>Bringing the rhythm to your taste buds, one order at a time!</p>
      </div>
    </div>
  );
};

export default Footer;
