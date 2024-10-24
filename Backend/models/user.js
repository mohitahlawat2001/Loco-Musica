import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    } ,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user" , "admin" , "owner"],
        default:"user"
    }
  
   
})
schema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password , 10);
    
})

schema.methods.ispasswordcorrect = async function(password){
    return await bcrypt.compare(password , this.password);
}


export const User = mongoose.model("User",schema);