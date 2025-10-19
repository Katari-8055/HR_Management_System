import prisma from "../../utils/Prisma.js";



//Get HR Details----------------------------------------------------------------------------------->



export const getHRDetails = async (req, res) => {
    try {
        const hrId = req.hr.id; 
        const hr = await prisma.hR.findUnique({ where: { id: hrId } });
        if (!hr) {
            return res.status(404).json({ success: false, message: "HR not found" });
        }
      
        return res.json({ success: true, hr });
        
    } catch (error) {
        console.error("Error fetching HR details:", error);
    }
}
//------------------------------------------------Get All Employees-------------------------------------------------------------------->


export const getAllEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        return res.json({ success: true, employees });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch employees", error: error.message });
    }
}
