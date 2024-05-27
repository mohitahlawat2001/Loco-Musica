import UserContext from "../utils/useContext";
import { useContext } from "react";

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div className=" h-64 flex items-center justify-center rounded-3xl p-2 m-2 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h1>
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-700">Name: <span className="font-semibold">{user.name}</span></p>
                        <p className="text-lg font-medium text-gray-700">Email: <span className="font-semibold">{user.email}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
