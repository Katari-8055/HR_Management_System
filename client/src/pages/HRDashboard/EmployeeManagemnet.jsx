import HrSidebar from "../../components/UI/HrSidebar.jsx";
import React from "react";
import EmployeeList from "../../components/HRComponents/EmployeeList.jsx";
import EmployeeStats from "../../components/HRComponents/EmployeeStats.jsx";

const EmployeeManagement = () => {
  return (
     <div>
      <section>
          <EmployeeStats/>
        </section>
        <section className="bg-white rounded-xl shadow-md p-4">
          <EmployeeList />
        </section>
    </div>
  );
};

export default EmployeeManagement;