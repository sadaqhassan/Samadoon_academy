import express from 'express'
import { configApp } from './utils/Config.js';
import connectionDb from './utils/conn.js';
import { userRoute } from './Routes/user.route.js';
import bcrypt from 'bcryptjs';
import { theUser } from './models/user.model.js';
const app = express();

configApp(app)

app.use("/api/user",userRoute);

connectionDb()



const existingAdmin = await theUser.findOne({ role: "admin" });

if (!existingAdmin) {
    const hashed =  bcrypt.hashSync(process.env.AdminPassword, 10);

await User.create({
    name: "Super Admin",
    email: "admin@gmail.com",
    password: hashed,
    role: "admin",
});
}
