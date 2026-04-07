import { Router } from "express";
import { teacherInfo, teacherRegister } from "../Controllers/teacher.controller.js";
import { isAdminM } from "../MiddleWares/isAdmin.js";

const teacher = Router();

teacher.post("/register",teacherRegister);
teacher.get("/get",isAdminM,teacherInfo);

export const teacherRoute = teacher;