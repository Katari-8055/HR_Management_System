import React from 'react'
import { Outlet } from 'react-router-dom'
import EmpSidebar from '../components/UI/EmpSidebar'

const EmpLayout = () => {
  return (
    <div className="flex h-screen">
      <EmpSidebar />
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default EmpLayout