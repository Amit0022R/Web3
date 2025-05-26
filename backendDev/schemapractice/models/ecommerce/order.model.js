import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId: { // pdtId is the reference to the Product model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    orderItems: {
        type: [orderItemSchema], // Array of order items
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        // enum means ki sirf inhi values mei se koi value ho sakti hai
        enum: ['pending', 'shipped', 'delivered', 'cancelled'], // Order status options
        default: 'pending',
    },
}, { timestamps: true });

export const Order = mongoose.model("Order" , orderSchema);