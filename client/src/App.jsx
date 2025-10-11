import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import VerifyAccount from "./pages/Auth/VerifyHrAccount";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import HrSidebar from "./components/UI/HrSidebar";
import Overview from "./pages/HRDashboard/Overview";
import TaskManagement from "./pages/HRDashboard/TaskManagement";
import EmployeeManagemnet from "./pages/HRDashboard/EmployeeManagemnet";
import LeaveManagement from "./pages/HRDashboard/LeaveManagement";
import EmployeeDetails from "./pages/HRDashboard/EmployeeDetails";
import Setpassword from "./components/EMPComponents/SetPassword";
import EmpSidebar from "./components/UI/EmpSidebar";
import EmpOverview from "./pages/EMPDashboard/EmpOverview";
import EmpTaskManagement from "./pages/EMPDashboard/EmpTaskManagement";
import EmpLeaveManagement from "./pages/EMPDashboard/EmpLeaveManagement";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/verify" element={<VerifyAccount />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>

        {/* Hr Routes */}
        <Route path="/hr" element={<HrSidebar/>}/>
        <Route path="/hr/overview" element={<Overview/>}/>
        <Route path="/hr/taskmanagement" element={<TaskManagement/>}/>
        <Route path="/hr/employeemanagement" element={<EmployeeManagemnet/>}/>
        <Route path="/hr/employeemanagement/:id" element={<EmployeeDetails/>}/>
        <Route path="/hr/leavemanagement" element={<LeaveManagement/>}/>

        {/* EMP Routes */}
        <Route path="/emp" element={<EmpSidebar/>}/>
        <Route path="/api/employee/setpassword" element={<Setpassword/>}/>
        <Route path="/emp/overview" element={<EmpOverview/>}/>
        <Route path="/emp/taskmanagement" element={<EmpTaskManagement/>}/>
        <Route path="/emp/leavemanagement" element={<EmpLeaveManagement/>}/>

      </Routes>
    </Router>
  );
};

export default App;
