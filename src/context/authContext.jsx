import { useContext , createContext, useState, Children, useEffect } from "react";
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../service/apiCalls";
const authContext = createContext({
    uer:null,
    registerUser:()=>{}, 
    loginUser:()=>{},
    logoutUser:()=>{},
    registerRestaurant:()=>{},
    registerFoodMenu:()=>{},
})

const useAuth = ()=>useContext(authContext);
const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null);
    const [restaurant , setRestaurant] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(null);

    console.log("user from localstate: " , user);
    const registerUser = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/user/register` , data , "post");
            console.log("response from register page: " , response.data);
            sessionStorage.setItem("User" , JSON.stringify(response.data));
            setUser(response.data);
        } catch (error) {
            console.log("error from register page: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }

    const loginUser = async(data)=>{
        try {
            const response = await postAndPatchReq(`${baseUrl}/user/login` , data , "post");
            // console.log("response from context page: " , response.data);
            setUser(response.data);
            sessionStorage.setItem("User" , JSON.stringify(response.data));
        } catch (error) {
            console.log("error from context page: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    const registerRestaurant = async(formData)=>{
        try {
            const response = await postAndPatchReq(`${baseUrl}/restaurant/newrestaurant` , formData , "post" , true);
            // console.log("response from context page: " , response.data);
            setRestaurant(response.data);
            sessionStorage.setItem("Restaurant" , JSON.stringify(response.data));
        } catch (error) {
            console.log("error from context page: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    const registerFoodMenu = async(data)=>{
        try {
            const response = await postAndPatchReq(`${baseUrl}/user/login` , data , "post");
            // console.log("response from context page: " , response.data);
            setUser(response.data);
            sessionStorage.setItem("User" , JSON.stringify(response.data));
        } catch (error) {
            console.log("error from context page: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        const storedUser = sessionStorage.getItem("User");
        const stroedRestaurant = sessionStorage.getItem("Restaurant");
        storedUser ? setUser(storedUser): null;
        stroedRestaurant ? setRestaurant(stroedRestaurant):null
    } , [])
    const logoutUser = async()=>{
        try {
            const response = await getAndDeleteReq(`${baseUrl}/user/logout` , "get");
            sessionStorage.clear();
            setUser(null);
            return response;
        } catch (error) {
            console.log("error for logout function on context: " , error);
        }
    }
    return (
        <authContext.Provider value={{user , registerUser , loginUser , logoutUser , isError , isLoading , registerFoodMenu , registerRestaurant}}>
            {children}
        </authContext.Provider>
    )
}

export {useAuth , AuthProvider , authContext};