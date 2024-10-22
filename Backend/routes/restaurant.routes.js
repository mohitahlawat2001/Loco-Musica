import express from "express"
import {newRestaurant , getAllRestaurants , getRestaurant , getTopRestaurant , updateRestaurant , deleteRestaurant} 
from "../controllers/restaurant.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.post("/newrestaurant" , upload.single("coverImg") , newRestaurant);
router.get("/getestaurant" ,   getAllRestaurants)
router.get("/:restaurantId" , getRestaurant);
router.patch("/:restaurantId" , updateRestaurant);
router.delete("/:restaurantId" ,deleteRestaurant);
router.get("/toprestaurant" , getTopRestaurant)
export default router;