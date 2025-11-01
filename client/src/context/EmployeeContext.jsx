import { createContext, useState } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);

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

  const getProjects = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/hr/getProjects", {withCredentials: true});
      setProjects(res.data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error.response?.data || error.message);
    }
  }


  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, getAllEmployee, getProjects, projects, setProjects }}>
      {children}
    </EmployeeContext.Provider>
  );
};
