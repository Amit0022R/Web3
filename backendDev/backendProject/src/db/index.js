import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        // Connect to MongoDB
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        // Log the error if connection fails
        // You can also use a logging library like Winston or Morgan for better logging
        console.error("Error connecting to MongoDB:", error);
        // Optionally, you can handle the error further or log it
        throw error;
    }
}


export default connectDB;
