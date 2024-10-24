import UserContext from "../utils/useContext";
import { useContext, useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import Mascot from "../assets/mascot.png";
import PasswordStrengthBar from "react-password-strength-bar"
import { useAuth } from "../context/authContext";

const Register = () => {
    const {registerUser} = useAuth();
    const [registerData , setRegisterData] = useState({
        name:"",
        email:"",
        password:"",
        role:""
    })
    console.log("the register data from localstate: " , registerData);
    const handleRegister = (e)=>{
        e.preventDefault();
        try {
            registerUser(registerData);
        } catch (error) {
            console.log("error from register page: " , error);
        }
    }
    return (
        <div className="flex flex-row items-center justify-around h-screen bg-gray-100" onSubmit={handleRegister}>
            <div>
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input 
                            value={registerData.name} 
                            onChange={(e) => setRegisterData({...registerData , name:e.target.value})} 
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
                            value={registerData.email} 
                            onChange={(e) => setRegisterData({...registerData , email:e.target.value})} 
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
                            value={registerData.password} 
                            onChange={(e) => setRegisterData({...registerData , password:e.target.value})} 
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" 
                        />
                        
                    </div>
                    <div className="mb-6">
                        <label htmlFor="role" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Select The Role</label>
                        <select className="outline-none px-4 py-2"
                        value={registerData.role}
                        onChange={(e)=>setRegisterData({...registerData , role:e.target.value})}
                        >
                            <option>owner</option>
                            <option>user</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded 
                    text-white hover:bg-yellow-400">Login</button>
                    <Link to={"/login"}><span className="hover:bg-yellow-400py-3 rounded 
                    text-center">Already habe an account</span></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
