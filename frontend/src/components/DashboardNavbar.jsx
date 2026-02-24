import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ title, UserName, onLogout }) => {
  const username = localStorage.getItem("currentUser");
  const navigate = useNavigate(); 

  const handleLogout = () => {
  
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userRole");

   
    if (onLogout) onLogout();

 
    navigate("/Login");
  };

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">{title}</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">
          Welcome, {username || "User"}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
