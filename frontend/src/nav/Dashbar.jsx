import React, { useEffect, useState } from 'react';
import { UserPlus, LogOut } from 'lucide-react';

const Dashbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/login"; 
  };

  return (
    <nav className="flex justify-between items-center mb-12 w-full h-full bg-white shadow-md px-6 py-4">
      
      <div className="flex items-center gap-3">
        {/* Profile Icon */}
        <div className="w-12 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
          <UserPlus size={20} />
        </div>

        {/* User Info */}
        <div className="flex flex-col">
          <h1 className="font-bold text-gray-900 text-sm md:text-base">
            Student Dashboard
          </h1>

          <p className="text-[10px] md:text-xs text-gray-500">
            Welcome back, {username}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-500 font-semibold hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
      >
        <LogOut size={18} /> 
        <span className="hidden sm:inline text-sm">Logout</span>
      </button>
    </nav>
  );
};

export default Dashbar;