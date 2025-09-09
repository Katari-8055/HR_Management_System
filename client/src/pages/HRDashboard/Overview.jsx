import React from 'react'
import Sidebar from '../../components/UI/Sidebar.jsx'

const 
Overview = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">
            Overview Page</h1>
        <p>Welcome to your HR Management 
            Overview!</p>
      </div>
    </div>
  )
}

export default Overview
