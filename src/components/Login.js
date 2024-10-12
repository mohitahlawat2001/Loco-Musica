import UserContext from "../utils/useContext";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mascot from "../assets/mascot.png";

const Login = () => {
    const { setName, setEmail, setLogin, user, setUser } = useContext(UserContext);
    const [name, setNameInput] = useState('');
    const [email, setEmailInput] = useState('');

    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
    const [isDarkMode, setIsDarkMode] = useState(false);

   
    useEffect(() => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(savedDarkMode); 
    });
  
    console.log("mode",isDarkMode)
   
    const handleLogin = async (e) => {
        e.preventDefault();

        // Send the data to the backend
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });

        const data = await response.json();

        // Assuming setUser updates the user in your context

        setUser({ ...user, name: name, email: email, password: password, login: true });
        history('/');
    };


    return (
        <div className={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}>

        <div className="flex flex-row items-center justify-around h-screen">
            <div>
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className=" p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-4" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input 
                            value={name} 
                            onChange={(e) => setNameInput(e.target.value)} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Email Address" 
                            value={email} 
                            onChange={(e) => setEmailInput(e.target.value)} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded text-white hover:bg-yellow-400">Login</button>
                </form>
                {/* Uncomment if you want to use Google Login */}
                {/* <div className="flex items-center w-full my-6">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter Name" className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="
                        Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded text-white hover:bg-yellow-400">Login</button>
                </form>
                <div className="flex items-center w-full my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 font-semibold">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="flex justify-center">
                    <GoogleLogin />
                </div> */}


                
            </div>
        </div>
        </div>
    );
};

export default Login;
