import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const dbConnect = async (req,res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("Some Error Ocurred", error);
    }
}