import monggoose from 'mongoose';

const userSchema = new monggoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
} , { timestamps: true });

export const User = mongoose.model("User" , userSchema)