import React from "react";
import { useParams } from "react-router-dom";
import { employees } from "../../assets/Data";
import { FaEdit } from "react-icons/fa";
import EmployeeTabs from "./EmployeeTab";

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return <p className="p-6 text-red-500">Employee not found!</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Employee Management &gt; Employee Profile
      </p>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between ">
        <div className="flex items-center space-x-4">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{employee.name}</h2>
            <p className="text-gray-600">{employee.designation}</p>
            <p className="text-gray-500">{employee.department} Department</p>
            <p className="text-sm text-gray-400">Joined {employee.joiningDate}</p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          <FaEdit className="mr-2" /> Edit Profile
        </button>
      </div>

      {/* Example stats */}
      <div className="bg-white rounded-2xl shadow flex justify-around p-6 mb-6 text-center">
        <div>
          <p className="text-xl font-bold">45</p>
          <p className="text-gray-500">Total Tasks</p>
        </div>
        <div>
          <p className="text-xl font-bold text-green-600">42</p>
          <p className="text-gray-500">Completed</p>
        </div>
        <div>
          <p className="text-xl font-bold text-orange-500">8</p>
          <p className="text-gray-500">Leaves Taken</p>
        </div>
        <div>
          <p className="text-xl font-bold text-blue-600">₹85,000</p>
          <p className="text-gray-500">Monthly Salary</p>
        </div>
      </div>

      {/* ✅ Tabs in separate file */}
      <EmployeeTabs employee={employee} />
    </div>
  );
};

export default EmployeeProfile;
