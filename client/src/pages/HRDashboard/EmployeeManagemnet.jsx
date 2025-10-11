import HrSidebar from "../../components/UI/HrSidebar.jsx";
import React from "react";
import EmployeeList from "../../components/HRComponents/EmployeeList.jsx";
import EmployeeStats from "../../components/HRComponents/EmployeeStats.jsx";

const EmployeeManagement = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* HrSidebar */}
      <HrSidebar />

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
