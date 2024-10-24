import express from "express";
const router = express.Router();
import {newFoodItem , getAllFoodItems , getFoodItem , updateFoodItem , deleteFoodItem} from "../controllers/foodMenu.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

router.post("/newfooditem" ,upload.single("img"), newFoodItem);
router.get("/getallfooditems/:restaurantId" , getAllFoodItems)
router.get("/getfooditem/:FoodItemId" , getFoodItem);

//only specified user can update and update
router.patch("/updatefooditem/:FoodItemId", upload.single("img") , updateFoodItem);
router.delete("/deletefooditem/:FoodItemId" , deleteFoodItem);

export default router; 