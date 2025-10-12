import React, { useState, useEffect } from "react";
import { LayoutDashboard, CheckSquare, Calendar, User, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const EmpSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Dashboard", path: "/emp/overview", icon: <LayoutDashboard size={20} /> },
    { label: "Task Management", path: "/emp/taskmanagement", icon: <CheckSquare size={20} />, badge: 3 },
    { label: "Leave Management", path: "/emp/leavemanagement", icon: <Calendar size={20} />, badge: 1 },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/employee/logoutEmp", {}, { withCredentials: true });
      if (res.status === 200) {
        console.log("Logout successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  useEffect(() => {
    const profileHandler = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/employee/empDetails", { withCredentials: true });
        if (res.status === 200) {
          setname(res.data.employee.firstName);
        }
      } catch (error) {
        console.error("Profile Error:", error);
      }
    };

    profileHandler();
  }, []);

  return (
    <aside
      className={`h-screen bg-white border-r shadow-sm transition-all duration-300 
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b ">
        {!collapsed && <h1 className="font-bold text-lg">HRConnect Pro</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Profile */}
      <div className="p-4 border-b ">
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center ">
            <User size={16} color="white" />
          </div>
          {!collapsed && <span className="text-sm font-medium">{name}</span>}
        </button>

        {profileOpen && (
          <div className="mt-2 bg-white border rounded shadow-md">
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </NavLink>
            <button
              onClick={submitHandler}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 cursor-pointer"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-gray-100 relative ${
                collapsed ? "justify-center" : "space-x-3"
              } ${isActive ? "bg-gray-200 font-medium" : ""}`
            }
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
            {item.badge && (
              <span
                className={`absolute right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ${
                  collapsed ? "-top-1 right-1" : ""
                }`}
              >
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-xs text-gray-500 text-center">
        © 2025 HRConnect Pro
      </div>
    </aside>
  );
};

export default EmpSidebar;
