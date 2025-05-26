import mongoose from 'mongoose';    

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    diagonsedWith: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"],
        trim: true
    },
    // kis hospital mei admit ho bhai
    admittedIn: { // Reference to the Hospital model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital', // Reference to the Hospital model
        required: true
    }

}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);