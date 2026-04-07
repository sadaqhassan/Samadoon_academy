import { teacherModel } from "../models/teacher.model";

export const teacherRegister  = async (req,res) => {
    const {phone_number,teachers_email,teachers_name} = req.body;
    
    if(!phone_number || !teachers_email || !teachers_name) return res.status(400).json({Success:false,message:"fill al fields"})
    try {
        const teacher = await teacherModel.findOne({email:teachers_email});
        if(!teacher) {
            return res.status(400).json({Success:false,message:"teahcer is exist"});
        };

        await teacherModel.create(req.body);

        return res.status(400).json({Success:false,message:"teacher Register successFully"});
    } catch (error) {
        res.status(500).json({Success:false,message:"server errror"})
        console.log(error);
    }
}