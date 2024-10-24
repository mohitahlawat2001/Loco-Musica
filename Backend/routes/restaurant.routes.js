import express from "express"
import {newRestaurant , getAllRestaurants , getRestaurant , getTopRestaurant , updateRestaurant , deleteRestaurant} 
from "../controllers/restaurant.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.post("/newrestaurant" , upload.single("coverImg") , newRestaurant);
router.get("/getrestaurant" ,   getAllRestaurants);
router.get("/:restaurantId" , getRestaurant);
router.get("/toprestaurant" , getTopRestaurant);

//only a specified users can
router.patch("/:restaurantId" , upload.single("coberImg"), updateRestaurant);
router.delete("/:restaurantId" ,deleteRestaurant);


export default router;