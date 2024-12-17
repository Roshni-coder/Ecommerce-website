
import mongoose from "mongoose";

export const Connection = async () => {
    const URL = "mongodb+srv://roshni:roshan@myeshop.xhvqh.mongodb.net/?retryWrites=true&w=majority&appName=MyEshop"
    try {
        await mongoose.connect(URL)
        console.log("Database Connect SuccessFully...");
    } catch (error) {
        console.log("error while connecting with database......",error.message);
    }
}
export default Connection;