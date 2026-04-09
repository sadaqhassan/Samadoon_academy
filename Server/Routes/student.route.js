import { Router } from "express";
import { studentInfo, studentRegister } from "../Controllers/student.controller.js";
import { isAdminM } from "../MiddleWares/isAdmin.js";
import { deleteStudentApi } from "../Controllers/student.controller.js";

const student = Router();

student.post("/register",isAdminM,studentRegister);
student.get("/get",isAdminM,studentInfo);
student.delete("/delete/:id",isAdminM,deleteStudentApi);

export const studentRoute = student;