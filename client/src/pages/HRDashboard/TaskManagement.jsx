import ProjectManagement from '../../components/HRComponents/ProjectManagement.jsx'
import HrSidebar from '../../components/UI/HrSidebar.jsx'
import React from 'react'

const TaskManagement = () => {
  return (
   <div>
      <h1 className="text-2xl font-bold mb-4">Task Management Page</h1>
      <p>Welcome to your HR Task Management!</p>
      <ProjectManagement/>
    </div>
  )
}

export default TaskManagement