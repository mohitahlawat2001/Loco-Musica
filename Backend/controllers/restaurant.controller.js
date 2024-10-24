import {apiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import {catchAsync} from "../utils/catchAsync.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Restaurant } from "../models/restaurant.model.js";

//creating new restaurant
export const newRestaurant = catchAsync(async (req,res)=>{
    const {name , location , address , user} = req.body
    if(!(name && location && address && user)){
        throw new apiError(400 , "all fields are required !");
    }
    const restaurant = await Restaurant.findOne({$and:[{name} , {location}]});
    if(restaurant){
        console.log("the restauant is: " , restaurant);
        throw new apiError(400 , "restaurant is already present");
    }
    const coverImgPath = req.file ? req.file?.path : undefined;
    const cloudinaryUpload = coverImgPath ? await uploadOnCloudinary(coverImgPath) : undefined;
    if(coverImgPath && !cloudinaryUpload){
        throw new apiError(500 , "uploading a coverImg is not working! ");
    }
    const newRestaurant = await Restaurant.create({
        name ,
        address , 
        location ,
        coverImg:cloudinaryUpload ? cloudinaryUpload.url : undefined,
        user
    })
    if(!newRestaurant){
        throw new apiError(500 , "restaurant is not created");
    }
    return res.status(201).json(
        new apiResponse(201 , newRestaurant , "successfully new restuarant is created! ")
    )
})

// get all restaurants
export const getAllRestaurants = catchAsync(async (__, res)=>{
    const restauants = await Restaurant.find();
    if(!restauants.length === 0){
        throw new apiError(404 , "there are no resturants");
    }
    return res.status(200).json(
        new apiResponse(200 , restauants , "restaurants are!")
    )
})

//get a restaurant
export const getRestaurant = catchAsync(async(req,res)=>{
    const {restaurantId} = req.params;
    if(!restaurantId){
        throw new apiError(400 , "restaurantId is not sent");
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if(!restaurant){
        throw new apiError(404 , "there is no such restaurant");
    }
    return res.status(200).json(
        new apiResponse(200 , restaurant , "the restaurant is! ")
    )
})

//get a user specified restaurant
export const getUserRestaurant = catchAsync(async (req,res)=>{
    const {userId} = req.params;
    if(!userId){
        throw new apiError(400 , "userId is not sent! ");
    }
    const userRestaurant = await Restaurant.findOne({user:userId});
    if(!userRestaurant){
        throw new apiError(404 , "there is no restaurant for this user");
    }
    return res.status(200).json(
        new apiResponse(200 , userRestaurant , "user restaurant is!")
    )
})

//get a top 10 restaurant
export const getTopRestaurant = catchAsync(async (__ ,res)=>{
    const topRestaurant = await Restaurant.find()
    .sort( {averageRating: -1} )
    .limit(10);
    if(topRestaurant.length === 0){
        throw new apiError(404 , "there are not top restaurants found")
    }
    return res.status(200).json(
        new apiResponse(200 , topRestaurant , "Some Top Restaurant are!")
    )
})

//update restaurant
export const updateRestaurant = catchAsync(async(req, res)=>{
    const {restaurantId} = req.params;
    if(!restaurantId){
        throw new apiError(400 , "there is no restaurantId! ");
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if(!restaurant){
        throw new apiError(404 , "there is no restaurant! ");
    }
    let coverImgPath = req.file?.path;
    if(coverImgPath){
        const cloudinaryUpload = await uploadOnCloudinary(coverImgPath);
        if(!cloudinaryUpload){
            throw new apiError(500 , "uploading new cover image is failed");
        }
        req.body.coverImg = cloudinaryUpload.url;
    }
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId , req.body , {new:true , runValidators:true});
    if(!updatedRestaurant){
        throw new apiError(400 , "the restauant is not updated")
    }
    return res.status(200).json(
        new apiResponse(200 , updatedRestaurant , "the updated restaurant is! ")
    )
})

//delete restaurant
export const deleteRestaurant = catchAsync(async (req,res)=>{
    const {restaurantId} = req.params; 
    if(!restaurantId){
        throw new apiError(400 ,"restaurantId is not sent! ");
    }
    const deleteRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if(!deleteRestaurant){
        throw new apiError(404 , "restaurant is not found! ");
    }
    return res.status(204).json();
})