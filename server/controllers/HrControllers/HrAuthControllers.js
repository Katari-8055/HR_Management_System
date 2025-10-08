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
                role: "HR",
            },
        });

        //generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // store OTP in Redis with 10 min expiry
        await redis.set(`otp:${newHR.id}`, String(otp), { ex: 600 });


        await sendEmail(
            newHR.email,
            "Welcome to HR Management System",
            `Hello ${newHR.name},\n\nYour account has been successfully created. Your OTP is: ${otp}\n\nThank you!`
        );


        // Create JWT
        const token = jwt.sign(
            { id: newHR.id, email: newHR.email, role: newHR.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Store cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

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


// OTP verification---------------------------------------------------------------------->
export const verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const hrId = req.hr.id; // Assuming HR ID is stored in req.hr by HR middleware
        if (!otp) {
            return res.json({ success: false, message: "HR ID and OTP are required" });
        }

        // get OTP from redis
        const storedOtp = await redis.get(`otp:${hrId}`);

        if (!storedOtp) {
            return res.json({ success: false, message: "OTP expired or not found" });
        }

        // compare OTPs
        if (Number(storedOtp) !== Number(otp)) {
            return res.json({ success: false, message: "Invalid OTP" });
        }


        await redis.del(`otp:${hrId}`);


        await prisma.hR.update({
            where: { id: Number(hrId) },
            data: { isVerified: true },
        });

        return res.json({ success: true, message: "OTP verified successfully" });
    } catch (error) {
        console.error("OTP Verification Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

//HR Login----------------------------------------------------------------------------------->


export const loginHR = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const hr = await prisma.hR.findUnique({ where: { email } });
        if (!hr) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, hr.password);

        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: hr.id, email: hr.email, role: hr.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        res.json({
            success: true, message: "Login successful",
            user: {
                id: hr.id,
                name: hr.name,
                email: hr.email,
                role: hr.role,
            }
        })
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}



//HR Logout----------------------------------------------------------------------------------->


export const logoutHR = (req, res) => {
    res.clearCookie("token"); // removes the cookie named "token"
    res.status(200).json({ message: "Logged out successfully" });
};


//Get HR Name----------------------------------------------------------------------------------->

