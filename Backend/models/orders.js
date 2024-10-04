import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Customer name is required'],  // Name is required
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],          // Email is required
    trim: true,
    // match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],  // Email validation
  },
  OrderedItem: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  
 Total: {
    type: String,
                         
  }
}, { timestamps: true });  // Add timestamps to track creation and update times

// Create the Order model
export const Order = mongoose.model("Order", orderSchema);
