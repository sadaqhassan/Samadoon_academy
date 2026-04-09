import mongoose from "mongoose";

const studentSchema = new mongoose.schema({
    
    studentID:{
        type:Number,
        unique:true
    },
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
        unique:true
    }
},{timeStamps:true})

export const studentModel = mongoose.model("students",studentSchema)