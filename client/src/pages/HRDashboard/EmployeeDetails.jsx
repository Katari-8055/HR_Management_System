import React from 'react'
import EmployeeProfile from '../../components/EmployeeManagement/EmployeeProfile';
import Sidebar from '../../components/UI/Sidebar.jsx'

const EmployeeDetails = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">


        <section className="bg-white rounded-xl shadow-md p-4">
          <EmployeeProfile />
        </section>
      </div>
    </div>
  );
}

export default EmployeeDetails