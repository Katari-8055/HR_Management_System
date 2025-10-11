import React from 'react'
import EmpSidebar from '../../components/UI/EmpSidebar'

const EmpLeaveManagement = () => {
  return (
    <div className="flex h-screen">
      {/* HrSidebar */}
      <EmpSidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">
            Overview Page</h1>
        <p>Welcome to your Emp Leave Management Overview !</p>
      </div>
    </div>
  )
}

export default EmpLeaveManagement