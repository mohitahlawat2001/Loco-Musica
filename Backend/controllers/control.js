import { User } from "../models/user.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { catchAsync } from "../utils/catchAsync.js";
import jwt from 'jsonwebtoken';

// import { sendCookie } from "../utils/features.js";
import { Order } from "../models/orders.js";

const Token = (user)=>{
  try {
      return jwt.sign({ id: user._id, name: user.name }, process.env.TOKEN_SECRET, { expiresIn: "3d" });
  } catch (error) {
      throw new apiError(500 , "token is not creating");
  }
}
const cookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: 'Lax',
};
if (process.env.NODE_ENV === 'production') {
  cookieOptions.secure = true;
  cookieOptions.sameSite = 'None';
}

export const register = catchAsync(async(req ,res)=>{
  const {name , email , password , role} = req.body;
  if(!(name && email && password && role)){
    throw new apiError(400 , "all fileds are required! ");
  }
  const existUser = await User.findOne({email});
  if(existUser){
    throw new apiError(400 , "email is already taken!");
  }
  const user = await User.create({
    name ,
    email ,
    password ,
    role
  })
  
  if(!user){
    throw new apiError(500 , "user is not saved to databse");
  }
  user.password = undefined
  const accessToken = Token(user);
  return res.status(201).cookie("accessToken" , accessToken , cookieOptions).json(
    new apiResponse(200 , user , "user is registered successfully!")
  )
})


export const login = catchAsync( async(req, res)=>{
  const {email , password} = req.body;
  if(!(email && password)){
    throw new apiError(400 , "check the credentials")
  }
  const existUser = await User.findOne({email})
  if(!existUser){
    throw new apiError(404 , "user is not found!");
  }
  const ispasswordvalid = await existUser.ispasswordcorrect(password);
    if(!ispasswordvalid){
        throw new apiError(400,"password is incorrect");
    }
    existUser.password = undefined;
  const accessToken = Token(existUser);
  return res.status(200).cookie("accessToken" , accessToken , cookieOptions).json(
    new apiResponse(200 , existUser , "user is loged in")
  )
})

export const logout = catchAsync(async (req , res)=>{
  return res.clearCookie('accessToken', cookieOptions).json(
    new apiResponse(204 , null , "user is loged out")
  )
})
  
export const orders = async(req,res)=>{
    const { name, email,OrderedItem,total} = req.body;

    try {
      // Create a new order document
      const newOrder = new Order({
        name,
        email,
        OrderedItem,
        Total:total
      });
  
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      // Send success response
      res.status(201).json({
        message: 'Order saved successfully!',
        data: savedOrder,
      });
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({
        message: 'Error saving order',
        error: error.message,
      });
    }
  }
  export const somefun = (req , res)=>{
    return res.status(200).json({
      status:"success",
      message:"hurry u maid request"
    })
  }