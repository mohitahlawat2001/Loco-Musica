import express from "express";
const router = express.Router();
import {newReview , getAllReviews , deleteReview} from "../controllers/review.controller.js";
router.post("/newreview" , newReview);
router.get("/getreview/:restaurantId" , getAllReviews);

//only admin can delete
router.delete("/deletereview/:reviewId" , newReview);

export default router;