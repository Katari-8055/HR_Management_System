import Sidebar from '../../components/UI/Sidebar.jsx'
import React from 'react'

const TaskManagement = () => {
  return (
   <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">
            TaskManagement Page</h1>
        <p>Welcome to your HR 
            Task Management!</p>
      </div>
    </div>
  )
}

export default TaskManagement