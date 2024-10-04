import { User } from "../models/user.js";

import { sendCookie } from "../utils/features.js";
import { Order } from "../models/orders.js";


export const register = async(req,res)=>{
    const { name, email, password} = req.body;
    console.log(name + " " + email)
  
      const user = await User.findOne({email});
  
    if(user){
      return res.status(404).json({
        success:false,
        message:"User already exists"
      })
    }
      
      try {
       
        const newUser = new User({ name, email, password});
        await newUser.save();
        // res.status(201).json(newUser); // Optional: respond with the created user object
        sendCookie(newUser,res,"Succesfully Registerd" , 201)
  
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Registration failed' });
      }
  }


  export const login = async(req,res)=>{

    const {name,email,password}=req.body;
  
    try{
      const user = await User.findOne({email})
  
      if (!user) {
        res.json({ success: false, user:"wrong email or password" });
      } 

      if(user.password===password){
        res.json({success:true,user:"Logged In Succesfully"})
      }
  
    }catch(error){
    console.log(error)
    }
  }
  
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


