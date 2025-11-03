import React from 'react'

const Navbar = () => {
  return (
        <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyApp
        </div>

        {/* Menu Items */}
        <div className="flex space-x-8 text-gray-700 font-medium">
          <a href="/login" className="hover:text-blue-600">Get Started</a>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar