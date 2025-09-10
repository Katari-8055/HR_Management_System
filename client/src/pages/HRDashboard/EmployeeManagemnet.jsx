import Sidebar from "../../components/UI/Sidebar.jsx";
import React from "react";
import EmployeeList from "../../components/EmployeeManagement/EmployeeList.jsx";
import EmployeeStats from "../../components/EmployeeManagement/EmployeeStats.jsx";

const EmployeeManagement = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">


        {/* Employee Table */}
        <section>
          <EmployeeStats/>
        </section>
        <section className="bg-white rounded-xl shadow-md p-4">
          <EmployeeList />
        </section>
      </div>
    </div>
  );
};

export default EmployeeManagement;
