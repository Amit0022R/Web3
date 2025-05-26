import mongoose from 'mongoose';    

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
        lowercase: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital', // Reference to the Hospital model
            required: true,
        }
    ],
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    },
}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);