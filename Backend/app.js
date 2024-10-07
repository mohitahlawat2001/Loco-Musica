import express from "express";
import { connectDB } from "./database/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/buyer.js"
import cors from "cors"

 const app = express();
 connectDB();
 app.use(express.json());
 app.use(cookieParser())
 app.use(cors({
    origin:["http://localhost:1234"],
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