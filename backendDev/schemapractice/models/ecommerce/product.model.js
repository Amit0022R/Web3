// product mei category hogi and hume reference banana padega dusre model ka

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
     description: {
         type: String,
         required: true,
     },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        productImage: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            default: 0,
            required: true,
        },
        stock: {
            type: Number,
            default: 0,
            required: true,
        },
        // har ek product ka ek category hoga
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Reference to the Category model
            required: true,
        },
        // product own kon krta h
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },

},  { timestamps: true });

export const Product = mongoose.model("Product", productSchema);