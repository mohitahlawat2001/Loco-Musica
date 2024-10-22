import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/buyer.js"
import cors from "cors"
import { env } from "process";


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:[env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use("/api/v1/user" , userRouter);


app.get("/",(req,res)=>{
    res.send("working")
})

//restaurant routes
import restaurantRouter from "./routes/restaurant.routes.js";
app.use("/api/v1/restaurant" , restaurantRouter);
export {app};