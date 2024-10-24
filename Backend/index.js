import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
import { app } from "./app.js";
const PORT = process.env.PORT || 5000
import { connectDB } from "./database/database.js";
// console.log("the cloudinary env from index-file: " , process.env.CLOUD_NAME);
connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is connected successfully: ${PORT}`);
    })
    
}).catch((error)=>{
    console.log("server is not connected: " , error);
})
