import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
   fullname: { type: String, required: true },
   email: { type: String, required: true },
   address: { type: String, required: true },
   city: { type: String, required: true },
   pincode: { type: String, required: true, match: /^\d{6}$/ },
   state: { type: String, required: true },
   phone: { type: String, required: true, match: /^\d{10}$/ },
   totalAmount: { type: Number, required: true },
 },
 {
   timestamps: true, // Automatically manage createdAt and updatedAt fields
 });
 
 const Order = mongoose.model("Order", orderSchema);
 
 export default Order;
 