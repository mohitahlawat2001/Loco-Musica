import mongoose from "mongoose";
export const connectDB = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`database is connected!! `);
  } catch (error) {
    console.log("error from db connections: " , error);
    process.exit(1);
  }
}
