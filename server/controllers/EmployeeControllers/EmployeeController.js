import prisma from "../../utils/Prisma.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

//-------------------------------------------------Set Employee Password----------------------------------------------------//
export const setPassword = async (req, res) => {
    const { token, password } = req.body;

    try {
        
        const employee = await prisma.employee.findFirst({
            where: {
                setupToken: token,
                setupTokenExpiry: { gt: new Date() }, 
            },
        });

        if (!employee) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired password setup link",
            });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

 
        await prisma.employee.update({
            where: { id: employee.id },
            data: {
                password: hashedPassword,
                setupToken: null,
                setupTokenExpiry: null,
            },
        });

        return res.json({
            success: true,
            message: "Password set successfully! You can now log in.",
        });
    } catch (error) {
        console.error("Error setting password:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

//-------------------------------------------------Login Employee Profile----------------------------------------------------//

export const loginEmployee = async (req, res) => {
    const { email, password } = req.body;

    try {
        const employee = await prisma.employee.findUnique({ where: { email } });

        if (!employee) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, employee.password);

        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = Jwt.sign(
            { id: employee.id, email: employee.email, role: employee.role },
            process.env.JWT_SECRET_EMP,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, 
        });

        res.json({ success: true, message: "Login successful", 
            user: {
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            role: employee.role,
            }})
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ success: false, message: "Server error" }); 
    }
}


//-------------------------------------------------------------Adding More Employee Details--------------------------------------------------//

export const addEmployeeDetails = async (req, res) => {
    const{ phone,  dateOfBirth ,gender, position, street, city, state , zip, country, accountNo, ifsc, bankName,emergencyName,
        emergencyRelation,emergencyPhone,pan,aadhaar,passport
    } = req.body;

    try {
        const employeeId = req.employee.id;
        await prisma.employee.update({
            where: { id: employeeId },
            data: {
                phone,
                dateOfBirth: new Date(dateOfBirth), gender, position, street, city, state, zip, country, accountNo, ifsc,bankName,
                emergencyName,  emergencyRelation,  emergencyPhone, pan, aadhaar, passport }
        });

        res.json({ success: true, message: "Employee details added successfully" });
    } catch (error) {
        console.error("Error adding employee details:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}