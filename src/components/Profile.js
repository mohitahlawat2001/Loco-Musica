import UserContext from "../utils/useContext";
import { useContext } from "react";

const Profile = () => {
    const { login , email,name } = useContext(UserContext);

    return (
        <div className="h-64 flex items-center justify-center rounded-3xl p-2 m-2 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h1>
                <div className="flex flex-col items-center space-y-4">
                    { login ? ( // Check if user is logged in
                        <div className="text-center">
                            <p className="text-lg font-medium text-gray-700">Name: <span className="font-semibold">{name}</span></p>
                            <p className="text-lg font-medium text-gray-700">Email: <span className="font-semibold">{email}</span></p>
                        </div>
                    ) : (
                        <p className="text-lg font-medium text-gray-700">Please log in to view your profile.</p> // Prompt to log in
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
