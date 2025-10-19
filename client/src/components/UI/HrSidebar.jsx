// import React, { useState, useEffect } from "react";
// import {
//   LayoutDashboard,
//   Users,
//   CheckSquare,
//   Calendar,
//   User,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useNavigate, NavLink } from "react-router-dom";
// import axios from "axios";

// const HrSidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [name, setName] = useState("");
//   const navigate = useNavigate();

//   const navigationItems = [
//     { label: "Dashboard", path: "/hr/overview", icon: <LayoutDashboard size={20} /> },
//     { label: "Employee Management", path: "/hr/employeemanagement", icon: <Users size={20} /> },
//     { label: "Task Management", path: "/hr/taskmanagement", icon: <CheckSquare size={20} />, badge: 3 },
//     { label: "Leave Management", path: "/hr/leavemanagement", icon: <Calendar size={20} />, badge: 1 },
//   ];

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/api/hr/logoutHr", {}, { withCredentials: true });
//       console.log(res);
//       if (res.status === 200) {
//         console.log("Logout successful");
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   useEffect(() => {
//     const profileHandler = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/hr/hrDetails", { withCredentials: true });
//         console.log("Loading...");
//         if (res.status === 200) {
//           setName(res.data.hr.name);
//         }
//       } catch (error) {
//         console.error("Profile Error:", error);
//       }
//     };

//     profileHandler();
//   }, []);

//   return (
//     <aside
//       className={`h-screen bg-white border-r shadow-sm transition-all duration-300 
//         ${collapsed ? "w-16" : "w-64"}`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b ">
//         {!collapsed && <h1 className="font-bold text-lg">HRConnect Pro</h1>}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-2 rounded hover:bg-gray-100"
//         >
//           {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//         </button>
//       </div>

//       {/* Profile */}
//       <div className="p-4 border-b ">
//         <button
//           onClick={() => setProfileOpen(!profileOpen)}
//           className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded cursor-pointer"
//         >
//           <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center ">
//             <User size={16} color="white" />
//           </div>
//           {!collapsed && <span className="text-sm font-medium">{name}</span>}
//         </button>

//         {profileOpen && (
//           <div className="mt-2 bg-white border rounded shadow-md">
//             <NavLink
//               to="/hr/profile"
//               className="block px-4 py-2 text-sm hover:bg-gray-100"
//             >
//               Profile
//             </NavLink>
//             <button
//               onClick={submitHandler}
//               className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 cursor-pointer"
//             >
//               <LogOut size={16} />
//               <span>Logout</span>
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Navigation */}
//       <nav className="p-4 space-y-2">
//         {navigationItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center p-2 rounded-md relative cursor-pointer ${
//                 collapsed ? "justify-center" : "space-x-3"
//               } hover:bg-gray-100 ${
//                 isActive ? "bg-gray-200 font-semibold" : ""
//               }`
//             }
//           >
//             {item.icon}
//             {!collapsed && <span>{item.label}</span>}
//             {item.badge && (
//               <span
//                 className={`absolute right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ${
//                   collapsed ? "-top-1 right-1" : ""
//                 }`}
//               >
//                 {item.badge}
//               </span>
//             )}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="p-4 border-t text-xs text-gray-500 text-center">
//         © 2025 HRConnect Pro
//       </div>
//     </aside>
//   );
// };

// export default HrSidebar;


import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  Calendar,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const HrSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/hr/logoutHr",
        {},
        { withCredentials: true }
      );
      console.log(res);
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
        const res = await axios.get("http://localhost:3000/api/hr/hrDetails", { withCredentials: true });
        console.log("Loading...");
        if (res.status === 200) {
          setName(res.data.hr.name);
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
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <h1 className="font-bold text-lg">HRConnect Pro</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Profile */}
      <div className="p-4 border-b">
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <User size={16} color="white" />
          </div>
          {!collapsed && <span className="text-sm font-medium">{name}</span>}
        </button>

        {profileOpen && (
          <div className="mt-2 bg-white border rounded shadow-md">
            <NavLink
              to="/hr/profile"
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
        <NavLink
          to="/hr/overview"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-md relative cursor-pointer ${
              collapsed ? "justify-center" : "space-x-3"
            } hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
          }
        >
          <LayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/hr/employeemanagement"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-md relative cursor-pointer ${
              collapsed ? "justify-center" : "space-x-3"
            } hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
          }
        >
          <Users size={20} />
          {!collapsed && <span>Employee Management</span>}
        </NavLink>

        <NavLink
          to="/hr/taskmanagement"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-md relative cursor-pointer ${
              collapsed ? "justify-center" : "space-x-3"
            } hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
          }
        >
          <CheckSquare size={20} />
          {!collapsed && <span>Task Management</span>}
          <span
            className={`absolute right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ${
              collapsed ? "-top-1 right-1" : ""
            }`}
          >
            3
          </span>
        </NavLink>

        <NavLink
          to="/hr/leavemanagement"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-md relative cursor-pointer ${
              collapsed ? "justify-center" : "space-x-3"
            } hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
          }
        >
          <Calendar size={20} />
          {!collapsed && <span>Leave Management</span>}
          <span
            className={`absolute right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ${
              collapsed ? "-top-1 right-1" : ""
            }`}
          >
            1
          </span>
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-xs text-gray-500 text-center">
        © 2025 HRConnect Pro
      </div>
    </aside>
  );
};

export default HrSidebar;
