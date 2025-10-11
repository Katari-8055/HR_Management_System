import React from "react";
import HrSidebar from "../components/UI/HrSidebar";
import { Outlet } from "react-router-dom";

const HrLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays fixed */}
      <HrSidebar />

      {/* Main Content changes */}
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HrLayout;
