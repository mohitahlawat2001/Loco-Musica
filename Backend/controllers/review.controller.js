import {apiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import {catchAsync} from "../utils/catchAsync.js";
import { Review } from "../models/review.model.js";
import { Restaurant } from "../models/restaurant.model.js";

//create new foodItem
export const newReview = catchAsync(async (req,res)=>{
    const {comment , user , restaurant , rating} = req.body
    if(!(user && restaurant && rating)){
        throw new apiError(400 , "all fields are required");
    }
    const existRating = await Review.findOne({$and:[{user} , {restaurant}]});
    
    if(existRating){
        throw new apiError(400 , "your rating has been recoreded! ");
    }
    
    const newRating = await Review.create({
        user ,
        restaurant ,
        rating ,
        comment
    });

    if(!newRating){ 
        throw new apiError(500 , "rating and comments are not created");
    }
    //calculating the average rating
    const reviews = await Review.find({restaurant});
    if(reviews.length === 0){
        throw new apiError(404 , "No Reviews Found for this Restaurant! ")
    }
    
    const toatlCalculating = reviews.reduce((accu , curReview)=>{
        return accu + curReview.rating
    } , 0);
    
    const averageRating = toatlCalculating / reviews.length;
    
    await Restaurant.findByIdAndUpdate(restaurant , {averageRating});

    return res.status(201).json(
        new apiResponse(200 , newRating , "new created foodmenu is! ")
    )
})

// get all Reviews with specified restaurant
export const getAllReviews = catchAsync(async (req, res)=>{
    const {restaurantId} = req.params;
    const reviews = await Review.find({restaurant:restaurantId});
    if(reviews.length === 0){
        return res.status(200).json(
            new apiResponse(200 , [] , "No Reviews Found")
        )
    }
    return res.status(200).json(
        new apiResponse(200 , reviews , "reviews are!")
    )
})

//delete restaurant
export const deleteReview = catchAsync(async (req,res)=>{
    const {reviewId} = req.params;
    if(!reviewId){
        throw new apiError(400 ,"reviewId is not sent! ");
    }
    const deleteReview = await Review.findByIdAndDelete(reviewId);
    if(!deleteReview){
        throw new apiError(404 , "review is not found! ");
    }
    return res.status(204).json();
})