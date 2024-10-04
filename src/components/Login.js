import UserContext from "../utils/useContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mascot from "../assets/mascot.png";
const Login = () => {
    const { setName,  setEmail,setLogin} = useContext(UserContext);
    const [name, setNamee] = useState('');
    const [email, setEmaill] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Send the data to the backend
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, credentials: 'include',
            
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });

        const data = await response.json();

       
            // Assuming setUser updates the user in your context
            setName(name);
            setEmail(email);
            setLogin(true);
            navigate('/');
      
    };

    return (
        <div className="flex flex-row items-center justify-around h-screen bg-gray-100">
            <div>
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-4" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input value={name} onChange={(e) => setNamee(e.target.value)} type="text" name="name" id="name" placeholder="Enter Name" className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmaill(e.target.value)} className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded text-white hover:bg-yellow-400">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
