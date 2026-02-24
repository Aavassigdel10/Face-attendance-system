import React from "react";
import Navbar from "../components/Navbar";



const TeacherDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
  
      <div className="hidden md:block w-64 shrink-0">
  
      </div>

      <div className="flex-1 bg-gray-50">
      

        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
            Class Overview
          </h2>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
              <h3 className="text-gray-500 font-medium">Total Students</h3>
              <p className="text-2xl sm:text-3xl font-bold text-indigo-500">60</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
              <h3 className="text-gray-500 font-medium">Present Today</h3>
              <p className="text-2xl sm:text-3xl font-bold text-green-500">52</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
              <h3 className="text-gray-500 font-medium">Absent Today</h3>
              <p className="text-3xl font-bold text-red-500">8</p>
            </div>
          </div>

          <div className="mt-10">
            <button className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg transition-all active:scale-95">
              📷 Register Student Face
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;