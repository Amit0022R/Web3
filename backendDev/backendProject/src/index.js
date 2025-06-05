// require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import {DB_NAME} from './constants.js';

// Load environment variables from .env file
import connectDB from './db/index.js';
dotenv.config({path: './.env'});

connectDB();




/*
( async () => {
    try{
        // Connect to MongoDB
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
       app.on("error", (error) => {
              console.log("error", error);
              throw error;
       })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        }

        // Your application logic here
    } catch (error) {   
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()
*/