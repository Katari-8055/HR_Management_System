import crypto from "crypto";
import prisma from "../../utils/Prisma.js";
import { sendEmail } from "../../utils/OTPmailer.js";

//------------------------------------------------------------------Add Employee with Email Verification Link------------------------------------//

export const addEmployee = async (req, res) => {
    const { firstName, lastName, email, salary, employeeId } = req.body;

    try {
        const existingEmployee = await prisma.employee.findUnique({ where: { email } });
        if (existingEmployee) {
            return res.json({ success: false, message: "Employee with this email already exists" });
        }

        // Generate a secure token (valid for password setup)
        const token = crypto.randomBytes(32).toString("hex");

        // Save employee with temporary setupToken
        const newEmployee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                email,
                salary: parseFloat(salary),
                employeeId,
                // Store token temporarily (create new field in schema: setupToken, setupTokenExpiry)
                setupToken: token,
                setupTokenExpiry: new Date(Date.now() + 1000 * 60 * 60 * 24), // valid for 24 hours
            },
        });

        // Create link
        const link = `https://yourapp.com/set-password?token=${token}`;

        // Send email with link
        await sendEmail(
            newEmployee.email,
            "Welcome to HR Management System",
            `Hello ${newEmployee.firstName},\n\nYour account has been created. Please set your password using the link below:\n\n${link}\n\nThis link will expire in 24 hours.`
        );

        return res.json({ success: true, message: "Employee added successfully", employee: newEmployee });


    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
