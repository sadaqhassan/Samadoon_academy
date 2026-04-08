import { Router } from "express";
import { deleteTecherApi, teacherInfo, teacherRegister } from "../Controllers/teacher.controller.js";
import { isAdminM } from "../MiddleWares/isAdmin.js";

const teacher = Router();

teacher.post("/register",isAdminM,teacherRegister);
teacher.get("/get",isAdminM,teacherInfo);
teacher.delete("/delete/:id",isAdminM,deleteTecherApi);

export const teacherRoute = teacher;