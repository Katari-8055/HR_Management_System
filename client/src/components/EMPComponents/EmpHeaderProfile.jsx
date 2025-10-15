import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const InfoSection = ({ title, icon, children }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6 w-full">
    <h2 className="flex items-center text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
      {icon && <span className="mr-2">{icon}</span>} {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </div>
);

const Field = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value || "N/A"}
      readOnly
      className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-700 focus:outline-none"
    />
  </div>
);

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
        setEmployee(response.data.employee);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (!employee) return <div className="text-center text-red-500">No employee data found.</div>;

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8">
      {/* Profile Header */}
      <div className=" p-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-center text-white mb-8">
        <div className="flex items-center gap-6">
          <img
            src={employee.image || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-black">
              {employee.firstName} {employee.lastName}
            </h2>
            <p className="opacity-90 text-black">{employee.position || "No Position"}</p>
            <p className="text-sm opacity-75 text-black">
              {employee.departmentId ? `Department ${employee.departmentId}` : "No Department"}
            </p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 flex items-center bg-white text-blue-700 px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition">
          <FaEdit className="mr-2" /> Edit Profile
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Basic Information */}
        <InfoSection title="Basic Information" icon="👤">
          <Field label="Full Name" value={`${employee.firstName} ${employee.lastName}`} />
          <Field label="Email Address" value={employee.email} />
          <Field label="Phone Number" value={employee.phone} />
          <Field label="Alternate Phone" value={employee.alternatePhone} />
          <Field
            label="Date of Birth"
            value={employee.dateOfBirth ? new Date(employee.dateOfBirth).toLocaleDateString() : "N/A"}
          />
          <Field label="Gender" value={employee.gender} />
          <Field label="Marital Status" value={employee.maritalStatus} />
          <Field label="Blood Group" value={employee.bloodGroup} />
        </InfoSection>

        {/* Address */}
        <InfoSection title="Address Details" icon="🏠">
          <Field label="Street" value={employee.street} />
          <Field label="City" value={employee.city} />
          <Field label="State" value={employee.state} />
          <Field label="Zip" value={employee.zip} />
          <Field label="Country" value={employee.country} />
        </InfoSection>

        {/* Bank */}
        <InfoSection title="Bank Details" icon="🏦">
          <Field label="Account No" value={employee.accountNo} />
          <Field label="IFSC Code" value={employee.ifsc} />
          <Field label="Bank Name" value={employee.bankName} />
        </InfoSection>

        {/* Emergency */}
        <InfoSection title="Emergency Contact" icon="🚨">
          <Field label="Contact Name" value={employee.emergencyName} />
          <Field label="Relation" value={employee.emergencyRelation} />
          <Field label="Phone" value={employee.emergencyPhone} />
        </InfoSection>

        {/* IDs */}
        <InfoSection title="Government IDs" icon="🆔">
          <Field label="PAN" value={employee.pan} />
          <Field label="Aadhaar" value={employee.aadhaar} />
          <Field label="Passport" value={employee.passport} />
        </InfoSection>
      </div>
    </div>
  );
};

export default EmpHeaderProfile;
