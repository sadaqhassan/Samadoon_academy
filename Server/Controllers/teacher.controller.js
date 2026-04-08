import { teacherModel } from "../models/teacher.model.js";

export const teacherRegister  = async (req,res) => {
    const {phone_number,teachers_email,teachers_name} = req.body;

    if(!phone_number || !teachers_email || !teachers_name) return res.status(400).json({success:false,message:"fill al fields"})
    try {
        const teacher = await teacherModel.findOne({teachers_email});
        if(teacher) {
            return res.status(400).json({success:false,message:"teacher is exist"});
        };

        const count = await teacherModel.countDocuments();
        
        await teacherModel.create({
            phone_number,
            teachers_email,
            teachers_name,
            id:count+1
        });

        return res.status(200).json({success:true,message:"teacher Register successFully"});
    } catch (error) {
        res.status(500).json({Success:false,message:"server errror"})
        console.log(error);
    }
}

// http://localhost:2000/api/teacher/register/get

export const teacherInfo = async (req,res) => {
    const {userRole} = req

    if(!userRole || userRole !== "admin") return res.status(400).json({success:false,message:"you can't get info"})
    try {
        const teachers  = await teacherModel.find();
        
        return res.status(200).json({success:true, data:teachers});

    } catch (error) {
        res.status(500).json({Success:false,message:"server errror"})
        console.log(error);
    }
}

// deleteTecher

export const deleteTecherApi = async (req,res) => {
    const userId = req.userId
    const id = req.params;
    if(!userId) return res.status(403).json({success:false,message:"you can't delete"})
    try {
        const teacher = await teacherModel.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"teacher deleted"});
    } catch (error) {
        res.status(500).json({Success:false,message:"server errror"})
        console.log(error);
    }
}