import mongoose from "mongoose";

const userModel = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEofX99GPaBBLF9NPxmpiDRHAmvY00shDnw&s"
    },
    role:{
        type:String,
        required:true,
        enum:["admin","teacher"]
    }
},{timestamps:true})

export const theUser = mongoose.model("user",userModel);