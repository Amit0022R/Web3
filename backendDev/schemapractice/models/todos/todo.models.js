import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
      content: {
        type: String,
        required: true,
      },
      complete: {
        type: Boolean,
        default: false,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId, // give reference of todo
        ref: "User" // model create krke time jo name waha hota same here
      },
      subTodos: [
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: "SubTodo" 
        }
      ] // array of subtodo
  },
   {timestamps:true})

export const Todo = mongoose.model("Todo" , todoSchema)