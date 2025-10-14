import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const EmpHeaderProfile = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/employee/empDetails",
          { withCredentials: true }
        );
        // The API returns { success, employee }, so we need employee
        setEmployee(response.data.employee);
        console.log("Employee Data:", response.data.employee);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!employee) return <div>No employee data found.</div>;

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src={employee.image || "/default-avatar.png"}
          alt={`${employee.firstName} ${employee.lastName}`}
          className="w-24 h-24 rounded-full object-cover"
        />

        {/* Employee Info */}
        <div>
          <h2 className="text-xl font-bold">
            {employee.firstName} {employee.lastName}
          </h2>
          <p className="text-gray-600">{employee.position || "No position"}</p>
          <p className="text-gray-500">
            {employee.departmentId ? `Department ${employee.departmentId}` : "No department"}
          </p>
          <p className="text-sm text-gray-400">
            Joined{" "}
            {employee.dateOfJoining
              ? new Date(employee.dateOfJoining).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <button className="mt-4 md:mt-0 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
        <FaEdit className="mr-2" /> Edit Profile
      </button>
    </div>
  );
};

export default EmpHeaderProfile;
