import prisma from "../../utils/Prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../utils/OTPmailer.js";
import redis from "../../utils/redis.js";



//-------------------------------------------------HR----------------------------------------------------//

export const signupHR = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // check existing user
        const existingUser = await prisma.hR.findUnique({ where: { email } });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create HR
        const newHR = await prisma.hR.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "HR",  // role enum
            },
        });

        // generate JWT (valid for 1 day)
        const token = jwt.sign(
            { id: newHR.id, email: newHR.email, role: newHR.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // set token in cookie (1 day)
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        //generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);
        
         // store OTP in Redis with 10 min expiry
        await redis.set(`otp:${newHR.id}`, otp, { ex: 600 });

        //sending OTP on email
        await sendEmail(
            newHR.email,
            "Welcome to HR Management System",
            `Hello ${newHR.name},\n\nYour account has been successfully created. Your OTP is: ${otp}\n\nThank you!`
        );

        

        return res.json({
            success: true,
            message: "HR signup successful",
            user: {
                id: newHR.id,
                name: newHR.name,
                email: newHR.email,
                role: newHR.role,
            },
        });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}