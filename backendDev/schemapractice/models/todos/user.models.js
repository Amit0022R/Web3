import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
      // username: String,
      // email: String,
      // isActive: Boolean,

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
        // if not true send custom message
        required: [true, "password is required"],

      }
  
  } ,
      {timestamps: true}
)

export const User = mongoose.model("User",userSchema) 