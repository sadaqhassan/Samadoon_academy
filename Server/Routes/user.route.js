import { Router } from "express";
import { loginApi, registerApi} from "../Controllers/user.controller.js";
import { isAdminM } from "../MiddleWares/isAdmin.js";

const user = Router()

user.post("/registerTeacher",isAdminM,registerApi)
user.post("/login",loginApi);
// user.get("/user-data",isAuthM,getProfileApi);
// user.get("/logout",logout);
// user.post("/google",googleOauth);
// user.post("/upload-image",isAuthM,uploadImageApi);
// user.put("/update-profile",isAuthM,updatePofileApi);

export const userRoute = user;