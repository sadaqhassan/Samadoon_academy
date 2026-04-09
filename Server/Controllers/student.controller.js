import { studentModel } from "../models/student.model.js";

export const studentRegister  = async (req,res) => {
    const {phone_number,name} = req.body;

    if(!phone_number || !name) return res.status(400).json({success:false,message:"fill al fields"})
    try {
        const student = await studentModel.findOne({student_email});
        if(student) {
            return res.status(400).json({success:false,message:"=student is exist"});
        };

        const count = await studentModel.countDocuments();
        
        await studentModel.create({
            phone_number,
            email,
            name,
            StudentId:count+1
        });

        return res.status(200).json({success:true,message:"=student Register successFully"});
    } catch (error) {
        res.status(500).json({Success:false,message:"server errror"})
        console.log(error);
    }
}

// // http://localhost:2000/api/student/register/get

// export const studentInfo = async (req,res) => {
//     const {userRole} = req

//     if(!userRole || userRole !== "admin") return res.status(400).json({success:false,message:"you can't get info"})
//     try {
//         const student  = await studentModel.find();
        
//         return res.status(200).json({success:true, data:student});

//     } catch (error) {
//         res.status(500).json({Success:false,message:"server errror"})
//         console.log(error);
//     }
// }

// // deleteStudent

// export const deleteStudentApi = async (req,res) => {
//     const userRole = req.userRole
//     if(userRole !== "admin") return res.status(403).json({success:false,message:"only admins can delete"})
//     const id = req.params.id;
//     try {
//         await studentModel.findByIdAndDelete(id);
//         return res.status(200).json({success:true,message:"=student deleted"});
//     } catch (error) {
//         res.status(500).json({Success:false,message:"server errror"})
//         console.log(error);
//     }
// }