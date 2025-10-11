import HrSidebar from '../../components/UI/HrSidebar.jsx'
import React from 'react'

const LeaveManagement = () => {
  return (
    <div className="flex h-screen">
      {/* HrSidebar */}
      <HrSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">
            LeaveManagemen Page</h1>
        <p>Welcome to your HR
            LeaveManagemen!</p>
      </div>
    </div>
  )
}

export default LeaveManagement