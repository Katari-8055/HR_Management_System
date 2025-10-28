import crypto from "crypto";
import prisma from "../../utils/Prisma.js";
import { sendEmail } from "../../utils/OTPmailer.js";

//------------------------------------------------------------------Add Employee with Email Verification Link------------------------------------//
export const addEmployee = async (req, res) => {
    const { firstName, lastName, email, salary, employeeId, departmentName } = req.body;

    try {
        const hrId = req.hr.id;

        const hr = await prisma.hR.findUnique({ where: { id: hrId } });
        if (!hr || !hr.isVerified) {
            return res.status(403).json({
                success: false,
                message: "HR account not verified. Please verify your account to add employees.",
            });
        }

        // 🔍 Step 1: Check if department exists by name
        const department = await prisma.department.findUnique({
            where: { name: departmentName },
        });

        if (!department) {
            return res.status(400).json({
                success: false,
                message: `Department "${departmentName}" not found.`,
            });
        }

        // 🧑‍💼 Step 2: Check if employee already exists
        const existingEmployee = await prisma.employee.findUnique({ where: { email } });
        if (existingEmployee) {
            return res.json({
                success: false,
                message: "Employee with this email already exists",
            });
        }

        // 🔐 Step 3: Generate a secure token (for password setup)
        const token = crypto.randomBytes(32).toString("hex");

        // 🧾 Step 4: Create employee and link departmentId
        const newEmployee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                email,
                salary: parseFloat(salary),
                employeeId,
                setupToken: token,
                setupTokenExpiry: new Date(Date.now() + 1000 * 60 * 60 * 24), // valid for 24 hours
                departmentId: department.id, // ✅ department linked here
            },
        });

        // 🔗 Step 5: Create verification link
        const link = `http://localhost:5173/api/employee/setpassword?token=${token}`;

        // ✉️ Step 6: Send email
        await sendEmail(
            newEmployee.email,
            "Welcome to HR Management System",
            `Hello ${newEmployee.firstName},\n\nYour account has been created under the "${department.name}" department.\nPlease set your password using the link below:\n\n${link}\n\nThis link will expire in 24 hours.`
        );

        // ✅ Step 7: Response
        return res.json({
            success: true,
            message: "Employee added successfully and verification link sent.",
            employee: newEmployee,
        });
    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
