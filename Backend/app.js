import express from "express";
import cookieParser from "cookie-parser";

import cors from "cors"
import { env } from "process";


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))



app.get("/",(req,res)=>{
    res.send("working")
})

//restaurant routes
import userRouter from "./routes/buyer.js";
app.use("/api/v1/user" , userRouter);

import restaurantRouter from "./routes/restaurant.routes.js";
app.use("/api/v1/restaurant" , restaurantRouter);

import foodMenuRouter from "./routes/foodMenu.routes.js";
app.use("/api/v1/foodmenu" , foodMenuRouter);

import reviewRouter from "./routes/reviews.routes.js";
app.use("/api/v1/reviews" , reviewRouter);
export {app};