import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1";
const getAndDeleteReq = async(url , method)=>{
    try {
        const response = await axios({
            method,
            url,
            withCredentials:true,
            
        })
        return response.data
    } catch (error) {
        console.log("error from api calls: " , error);

    }
}

const postAndPatchReq = async(url , data , method , isFormData = false)=>{
    try {
        const response = await axios({
            method,
            url,
            data,
            withCredentials:true,
            headers:{"Content-Type":isFormData ? "multipart/form-data" : "application/json"}
        })
        return response.data;
    } catch (error) {
        console.log("error from api calls: " , error);
    }
}

export {baseUrl , getAndDeleteReq , postAndPatchReq};