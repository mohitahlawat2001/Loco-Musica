import mongoose from "mongoose";
const foodMenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }
});

export const FoodMenu = mongoose.model("FoodMenu" , foodMenuSchema);
