import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI_STRING!)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`MongoDB error: ${error}`)
    }
};