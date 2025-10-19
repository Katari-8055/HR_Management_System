import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import VerifyAccount from "./pages/Auth/VerifyHrAccount";
import EmployeeDashboard from "./pages/EmployeeDashboard";

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
import HrLayout from "./layouts/HrLayout";
import EmpLayout from "./layouts/EmpLayout";
import EmpDetailedForm from "./components/EMPComponents/EmpDetailedForm";
import EmpProfile from "./pages/EMPDashboard/EmpProfile";
import HrProfile from "./pages/HRDashboard/HrProfile";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/verify" element={<VerifyAccount />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>

        {/* HR Routes with Layout */}
        <Route path="/hr" element={<HrLayout />}>
          <Route path="profile" element={<HrProfile/>} />
          <Route path="overview" element={<Overview />} />
          <Route path="taskmanagement" element={<TaskManagement />} />
          <Route path="employeemanagement" element={<EmployeeManagemnet />} />
          <Route path="employeemanagement/:id" element={<EmployeeDetails />} />
          <Route path="leavemanagement" element={<LeaveManagement />} />
        </Route>

        {/* EMP Routes with Layout */}
        <Route path="/emp" element={<EmpLayout />}>
          <Route path="overview" element={<EmpOverview />} />
          <Route path="taskmanagement" element={<EmpTaskManagement />} />
          <Route path="leavemanagement" element={<EmpLeaveManagement />} />
          <Route path="profile" element={<EmpProfile/>} />
        </Route>

        {/* Non-layout API route */}
        <Route path="/emp/detail" element={<EmpDetailedForm/>}/>
        <Route path="/api/employee/setpassword" element={<Setpassword />} />
        
      </Routes>
    </Router>
  );
};

export default App;
