import React, { useState } from "react";
import { Download, UserPlus, Building2 } from "lucide-react";
import { stats } from "../../assets/Data.js";
import AddEmployeeForm from "./AddEmployeeForm.jsx";
import CreateDepartment from "./CreateDepartment.jsx";

const EmployeeStats = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDeptForm, setShowDeptForm] = useState(false);

  return (
    <div className="mb-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Employee Management
          </h1>
          <p className="text-gray-600">
            Manage your workforce and employee information
          </p>
        </div>

        <div className="flex gap-3">
          {/* Export */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">
            <Download className="w-4 h-4" />
            Export
          </button>

          {/* Create Department */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 cursor-pointer"
            onClick={() => setShowDeptForm(true)}
          >
            <Building2 className="w-4 h-4" />
            Create Department
          </button>

          {/* Add Employee */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <UserPlus className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm border flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </h2>
                <p
                  className={`text-sm ${
                    stat.trend === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modals */}
      {showForm && <AddEmployeeForm onClose={() => setShowForm(false)} />}
      {showDeptForm && <CreateDepartment onClose={() => setShowDeptForm(false)} />}
    </div>
  );
};

export default EmployeeStats;
