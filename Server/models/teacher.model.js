import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    teachers_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    languages:{
        type:Object,
    },
    teachers_email:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});


export const teacherModel = mongoose.model("teacher",teacherSchema);