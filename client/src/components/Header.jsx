import React from 'react'

const Header = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          HR Management System
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
          A powerful platform to manage employees, track attendance, handle
          payroll, and generate reports — all in one place.
        </p>
        <div className="space-x-4">
          <a
            href="/signup"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-transparent border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">👥 Employee Management</h2>
          <p className="text-gray-600">
            Add, edit, and manage employee profiles with ease. Keep all data centralized and secure.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">🗓 Attendance Tracking</h2>
          <p className="text-gray-600">
            Track attendance, leaves, and working hours in real time with simple reports.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">💰 Payroll Automation</h2>
          <p className="text-gray-600">
            Automate salary processing, deductions, and generate payslips instantly.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your HR?</h2>
        <p className="mb-6 text-gray-200">
          Start managing your employees more efficiently with our HRMS today.
        </p>
        <a
          href="/signup"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200"
        >
          Create Free Account
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} HR Management System. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Header