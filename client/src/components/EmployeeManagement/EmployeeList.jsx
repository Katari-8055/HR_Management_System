import React from "react";
import { employees } from "../../assets/Data";
import { Eye, Edit, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Designation</th>
              <th className="py-3 px-4">Joining Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Employee Info */}
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-10 h-10 rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.email}</p>
                  </div>
                </td>

                {/* ID */}
                <td className="py-3 px-4">{emp.id}</td>

                {/* Department */}
                <td className="py-3 px-4">{emp.department}</td>

                {/* Designation */}
                <td className="py-3 px-4">{emp.designation}</td>

                {/* Joining Date */}
                <td className="py-3 px-4">{emp.joiningDate}</td>

                {/* Status */}
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-3 px-4 flex gap-2">
                  <Link to={`/hr/employeemanagement/${emp.id}`}>
                  <button className="p-2 rounded-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition cursor-pointer">
                    <Eye className="w-5 h-5" />
                  </button>
                  </Link>
                  
                  <button className="p-2 rounded-full hover:bg-green-50 text-gray-600 hover:text-green-600 transition cursor-pointer">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-red-50 text-gray-600 hover:text-red-600 transition cursor-pointer">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
