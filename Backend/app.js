import express from "express";
import { connectDB } from "./database/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/buyer.js"
import dotenv from "dotenv";
import cors from "cors"
import { env } from "process";

dotenv.config();

 const app = express();
 connectDB();
 app.use(express.json());
 app.use(cookieParser())
 app.use(cors({
    origin:[env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
 app.use(userRouter);


app.get("/",(req,res)=>{
    res.send("working")
})


app.listen(5000,()=>{
    console.log(`server is working on port : 5000 `)
})