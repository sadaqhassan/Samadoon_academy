import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Grade:{
        type:String,
        required:true,
    },
    phone_number:{
        type:Number,
        unique:true,
        sparse: true

    }
},{timestamps:true})

export const studentModel = mongoose.model("students",studentSchema)