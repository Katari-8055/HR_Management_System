import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyAccount from "./pages/VerifyAccount";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Sidebar from "./components/UI/Sidebar";
import Overview from "./pages/HRDashboard/Overview";
import TaskManagement from "./pages/HRDashboard/TaskManagement";
import EmployeeManagemnet from "./pages/HRDashboard/EmployeeManagemnet";
import LeaveManagement from "./pages/HRDashboard/LeaveManagement";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/verify" element={<VerifyAccount />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
        <Route path="/hr" element={<Sidebar/>}/>
        <Route path="/hr/overview" element={<Overview/>}/>
        <Route path="/hr/taskmanagement" element={<TaskManagement/>}/>
        <Route path="/hr/employeemanagement" element={<EmployeeManagemnet/>}/>
        <Route path="/hr/leavemanagement" element={<LeaveManagement/>}/>
      </Routes>
    </Router>
  );
};

export default App;
