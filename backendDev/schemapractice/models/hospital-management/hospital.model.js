import mongoose from 'mongoose';    

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    address: {
        type: String,
        required: true,
    },
    specialization: [
        {
            type: String,
            required: true,
            lowercase: true,
        }
    ],
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    establishedYear: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);