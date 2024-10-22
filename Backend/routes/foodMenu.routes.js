import express from "express";
const router = express.Router();
import {newFoodItem , getAllFoodItems , getFoodItem , updateFoodItem , deleteFoodItem} from "../controllers/foodMenu.controller.js";
router.post("/newfooditem" , newFoodItem);
router.get("/getallfooditems" , getAllFoodItems)
router.get("/getfooditem" , getFoodItem);
router.patch("/updatefooditem" , updateFoodItem);
router.delete("/deletefooditem" , deleteFoodItem);

export default router; 