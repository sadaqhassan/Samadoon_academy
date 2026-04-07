import { Router } from "express";
import { teacherRegister } from "../Controllers/teacher.controller.js";

const teacher = Router();

teacher.post("/register",teacherRegister);

export const teacherRoute = teacher;