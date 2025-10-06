import prisma from "../../utils/Prisma.js";



//Get HR Details----------------------------------------------------------------------------------->



export const getHRDetails = async (req, res) => {
    try {
        const hrId = req.hr.id; 
        const hr = await prisma.hR.findUnique({ where: { id: hrId } });
        if (!hr) {
            return res.status(404).json({ success: false, message: "HR not found" });
        }
        console.log(hr);
        return res.json({ success: true, hr });
        
    } catch (error) {
        console.error("Error fetching HR details:", error);
    }
}