import React, { useState } from "react";
import ProfileInfo from "./Tabs/ProfileInfo";
import ProfessionalInfo from "./Tabs/ProfessionalInfo";
import ActivityHistory from "./Tabs/ActivityHistory";

const EmployeeTabs = ({ employee }) => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="bg-white rounded-2xl shadow">
      {/* Tab Headers */}
      <div className="flex border-b space-x-6 px-6 ">
        {["personal", "professional", "documents", "history"].map((tab) => (
          <button
        
            key={tab}
            className={`pb-3 px-1 cursor-pointer ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "personal" && "👤 Personal Info"}
            {tab === "professional" && "💼 Professional"}
            {tab === "documents" && "📄 Documents"}
            {tab === "history" && "⏱ Activity History"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Personal Info */}
         {activeTab === "personal" && <ProfileInfo employee={employee} />} 

        {/* Professional */}
        {activeTab === "professional" && <ProfessionalInfo employee={employee}/>}

        {/* Documents */}
        {activeTab === "documents" && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Documents</h3>
            <p>Passport: Uploaded</p>
            <p>Aadhar: Uploaded</p>
            <p>PAN: Pending</p>
          </div>
        )}

        {/* Activity History */}
        {activeTab === "history" && <ActivityHistory employee={employee}/>}
      </div>
    </div>
  );
};

export default EmployeeTabs;
