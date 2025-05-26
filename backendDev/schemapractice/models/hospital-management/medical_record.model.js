import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatmentPlan: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ""
    }
} , { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

