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
    const employees = await prisma.employee.findMany({
      include: {
        department: true, 
      },
    });

    return res.json({ success: true, employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch employees", error: error.message });
  }
};


//-------------------------------Add Dipartment-----------------------------//



export const addDepartment = async (req, res) => {
  const { name } = req.body;

  try {

    
    const existing = await prisma.department.findUnique({
      where: { name },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Department with this name already exists",
      });
    }

    const newDepartment = await prisma.department.create({
      data: { name },
    });

    
    return res.status(201).json({
      success: true,
      message: "Department added successfully",
      department: newDepartment,
    });

  } catch (error) {
    console.error("Error adding department:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error while creating department",
      error: error.message,
    });
  }
};


//-------------------------------Get Departments-----------------------------//


export const getDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany();
    return res.json({ success: true, departments });
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
}