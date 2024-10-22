import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true
    },
    coverImg:{
        type:String,
        required:true
    },
    review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }],
    averageRating:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
});

export const Restaurant = mongoose.model("Restaurant" , restaurantSchema);
