import { createContext, useState } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployee = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/hr/getAllEmployees", {
      withCredentials: true,
    });
      setEmployees(res.data.employees);
  } catch (error) {
    console.error("Error fetching employees:", error.response?.data || error.message);
  }
};


  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, getAllEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
