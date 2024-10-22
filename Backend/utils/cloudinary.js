import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
// console.log("the cloudinary env from cloudinary-file: " , process.env.CLOUD_NAME);
const uploadOnCloudinary = async (localpath)=>{
    try {
        if(!localpath){
            return null;
        }
        const uploadMedia = await cloudinary.uploader.upload(localpath , {resource_type:"auto"});
        // console.log("public_id of the cloudinary " , uploadMedia.public_id);
        fs.unlinkSync(localpath);
        return uploadMedia;
    } catch (error) {
        fs.unlinkSync(localpath);
        console.log("error from cloudinary: " , error);
    }
}
export { uploadOnCloudinary }