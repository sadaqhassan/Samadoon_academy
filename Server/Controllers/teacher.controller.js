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