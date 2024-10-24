import UserContext from "../utils/useContext";
import { useContext, useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import Mascot from "../assets/mascot.png";
import PasswordStrengthBar from "react-password-strength-bar"
import { useAuth } from "../context/authContext";

const Login = () => {
    const {loginUser} = useAuth();
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    })
    const handleLogin = (event)=>{
        event.preventDefault();
        try {
            loginUser(loginData);
            
        } catch (error) {
            console.log("error from login page: " , error);
        }
    }
    return (
        <div className="flex flex-row items-center justify-around h-screen bg-gray-100" onSubmit={handleLogin}>
            <div>
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-4" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input 
                            value={loginData.email} 
                            onChange={(e) => setLoginData({...loginData , email:e.target.value})} 
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            placeholder="Enter Email" 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            required
                            placeholder="Enter Password" 
                            value={loginData.password} 
                            onChange={(e) => setLoginData({...loginData , password:e.target.value})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                        
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded text-white hover:bg-yellow-400">Login</button>
                    <Link to={"/register"}><span className="hover:bg-yellow-400py-3 rounded text-center">create an account</span></Link>
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
    );
};

export default Login;
