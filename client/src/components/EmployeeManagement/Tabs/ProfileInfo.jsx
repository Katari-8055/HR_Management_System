import React from "react";
import { User, Home, PhoneCall, HeartPulse } from "lucide-react";

const ProfileInfo = ({ employee }) => {
  return (
    <div className="space-y-10">
      {/* Basic Information */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6 border-b pb-3">
          <User className="text-blue-600 w-5 h-5" />
          <h3 className="text-lg font-semibold text-gray-800">
            Basic Information
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Full Name *" value={employee.name || "Rajesh Kumar"} />
          <Field
            label="Email Address *"
            value={employee.email || "rajesh.kumar@company.com"}
          />
          <Field
            label="Phone Number *"
            value={employee.phone || "+91 9876543210"}
          />
          <Field
            label="Alternate Phone"
            value={employee.altPhone || "+91 9876543211"}
          />
          <Field label="Date of Birth *" value={employee.dob || "05/15/1990"} />
          <Field label="Gender" value={employee.gender || "Male"} />
          <Field
            label="Marital Status"
            value={employee.maritalStatus || "Married"}
          />
          <Field label="Blood Group" value={employee.bloodGroup || "B+"} />
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6 border-b pb-3">
          <Home className="text-green-600 w-5 h-5" />
          <h3 className="text-lg font-semibold text-gray-800">
            Address Information
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Address"
            value={employee.address || "123, MG Road, Sector 15"}
          />
          <Field label="City" value={employee.city || "Gurgaon"} />
          <Field label="State" value={employee.state || "Haryana"} />
          <Field label="PIN Code" value={employee.pinCode || "122001"} />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gray-50 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6 border-b pb-3">
          <PhoneCall className="text-red-500 w-5 h-5" />
          <h3 className="text-lg font-semibold text-gray-800">
            Emergency Contact
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Contact Name"
            value={employee.emergencyName || "Priya Kumar"}
          />
          <Field
            label="Contact Phone"
            value={employee.emergencyPhone || "+91 9876543212"}
          />
          <Field
            label="Relationship"
            value={employee.emergencyRelation || "Spouse"}
          />
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Field component
const Field = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-500">{label}</label>
    <div className="mt-1 px-3 py-2 border rounded-lg bg-white shadow-sm text-gray-800">
      {value}
    </div>
  </div>
);

export default ProfileInfo;
