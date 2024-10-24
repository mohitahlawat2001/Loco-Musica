import {apiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import {catchAsync} from "../utils/catchAsync.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { FoodMenu } from "../models/foodMenu.model.js";

//create new foodItem
export const newFoodItem = catchAsync(async (req,res)=>{
    const {name , price , restaurantId} = req.body
    if(!(name && price && restaurantId)){
        throw new apiError(400 , "all fields are required");
    }
    const imgPath = req.file ? req.file?.path : undefined
    const uploadCloudinary = imgPath ? await uploadOnCloudinary(imgPath) : undefined
    if(imgPath &&!uploadCloudinary){
        throw new apiError(500 , "Error in image upload! ");
    }
    const foodItem = await FoodMenu.create({
        name ,
        price ,
        img:uploadCloudinary ? cloudinaryUpload.url : undefined,
        restaurantId
    });
    if(!foodItem){
        throw new apiError(500 , "foodItem is not created");
    }
    return res.status(201).json(
        new apiResponse(200 , foodItem , "new created foodmenu is! ")
    )
})

// get all foodItems of a specific restaurants
export const getAllFoodItems = catchAsync(async (req, res)=>{
    const {restaurantId} = req.params
    const foodItems = await FoodMenu.find({restaurantId});
    if(!foodItems.length === 0){
        throw new apiError(404 , "there are no foodItesms");
    }
    return res.status(200).json(
        new apiResponse(200 , foodItems , "foodItems are!")
    )
})

//get foodItem by Id
export const getFoodItem = catchAsync(async(req,res)=>{
    const {FoodItemId} = req.params;
    if(!FoodItemId){
        throw new apiError(400 , "restaurantId is not sent");
    }
    const FoodItem = await FoodMenu.findById(FoodItemId);
    if(!FoodItem){
        throw new apiError(404 , "there is no such restaurant");
    }
    return res.status(200).json(
        new apiResponse(200 , FoodItem , "the restaurant is! ")
    )
})

//update FoodItem
export const updateFoodItem = catchAsync(async(req, res)=>{
    const {foodItemId} = req.params;
    if(!foodItemId){
        throw new apiError(400 , "there is no restaurantId! ");
    }
    const FoodItem = await FoodMenu.findById(foodItemId);
    if(!FoodItem){
        throw new apiError(404 , "there is no restaurant! ");
    }
    let coverImgPath = req.file?.path;
    if(coverImgPath){
        const cloudinaryUpload = await uploadOnCloudinary(coverImgPath);
        if(!cloudinaryUpload){
            throw new apiError(500 , "uploading new cover image is failed");
        }
        req.body.img = cloudinaryUpload.url;
    }
    const updatedFoodItem = await FoodMenu.findByIdAndUpdate(foodItemId , req.body , {new:true , runValidators:true});
    if(!updatedFoodItem){
        throw new apiError(400 , "the restauant is not updated")
    }
    return res.status(200).json(
        new apiResponse(200 , updatedFoodItem , "the updated restaurant is! ")
    )
})

//delete foodItem
export const deleteFoodItem = catchAsync(async (req,res)=>{
    const {foodItemId} = req.params;
    if(!foodItemId){
        throw new apiError(400 ,"foodItemId is not sent! ");
    }
    const deleteFoodItem = await FoodMenu.findByIdAndDelete(restaurantId);
    if(!deleteFoodItem){
        throw new apiError(404 , "foodItem is not found! ");
    }
    return res.status(204).json();
})