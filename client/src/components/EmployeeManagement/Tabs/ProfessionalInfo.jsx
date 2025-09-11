import React from "react";
import { Briefcase, Building2, Calendar, UserCheck, MapPin, Mail, Phone } from "lucide-react";

const ProfessionalInfo = ({ employee }) => {
  return (
    <div className="space-y-8">
      {/* Employment Details */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" /> Employment Details
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <InfoField label="Employee ID" value={employee.id || "EMP001"} />
          <InfoField
            label="Designation"
            value={employee.designation || "Senior Software Engineer"}
          />
          <InfoField label="Department" value={employee.department || "Engineering"} />
          <InfoField label="Joining Date" value={employee.joiningDate || "03/15/2022"} />
          <InfoField
            label="Reporting Manager"
            value={employee.reportingManager || "John Doe - Engineering Manager"}
          />
          <InfoField
            label="Employment Type"
            value={employee.employmentType || "Full Time"}
          />
          <InfoField label="Work Location" value={employee.location || "Hybrid"} />
          <InfoField label="Probation Period (months)" value={employee.probation || "6"} />
        </div>
      </div>

      {/* Compensation */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-green-600" /> Compensation
        </h3>
        <InfoField
          label="Monthly Salary (₹)"
          value={employee.salary || "85,000"}
          highlight
        />
      </div>

      {/* Work Contact */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-purple-600" /> Work Contact
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <InfoField
            label="Work Email"
            value={employee.workEmail || "rajesh.kumar@company.com"}
          />
          <InfoField label="Extension" value={employee.extension || "1234"} />
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-orange-600" /> Skills & Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {(employee.skills || ["React", "Node.js", "MongoDB", "AWS"]).map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 🔹 Reusable field component */
const InfoField = ({ label, value, highlight }) => (
  <div>
    <label className="block text-gray-500 text-sm mb-1">{label}</label>
    <div
      className={`px-3 py-2 rounded-lg border ${
        highlight
          ? "bg-green-100 text-yellow-800 font-semibold border-green-300"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      {value}
    </div>
  </div>
);

export default ProfessionalInfo;
