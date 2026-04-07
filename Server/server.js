import express from 'express'
import { configApp } from './utils/Config.js';
import bcrypt from 'bcryptjs';
import { theUser } from './models/user.model.js';
import { userRoute } from './Routes/user.route.js';
import connectionDb from './utils/conn.js';
const app = express();

configApp(app)

app.use("/api/user",userRoute);
app.use("/api/teacher",teacherRoute);


await connectionDb();

const existingAdmin = await theUser.findOne({ role: "admin" });

if (!existingAdmin) {
    const hashed =  bcrypt.hashSync(process.env.AdminPassword, 10);

await theUser.create({
    username: "Super Admin",
    email: "admin@gmail.com",
    password: hashed,
    role: "admin",
});
}
