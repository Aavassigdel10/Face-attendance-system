import React from 'react';
import { UserPlus, UserCog, Camera, BarChart3 ,ChevronRight} from 'lucide-react';
import Dashbar from "../nav/Dashbar";
import { Link } from 'react-router-dom';
import FaceCapture from '../images/FaceCapture';
import Register from '../student/Register';




const StudentDashboard = () => {
  const cards = [
    {
      title: "Student Registration",
      desc: "Register new students with complete details and face recognition setup",
      icon: <UserPlus size={24} />,
      bgColor: "bg-blue-600",
      borderColor: "border-blue-100",
      path: "/register",
    },
    {
      title: "Update Student Details",
      desc: "Modify existing student information and profile settings",
      icon: <UserCog size={24} />,
      bgColor: "bg-emerald-500",
      borderColor: "border-emerald-100",
      path: "/update-details"

    },
    {
      title: "Face Recognition Demo",
      desc: "Test and demonstrate live face recognition capabilities",
      icon: <Camera size={24} />,
      bgColor: "bg-purple-500",
      borderColor: "border-purple-100",
      path: "/Capture",
      
    },
    {
      title: "Attendance Records",
      desc: "View comprehensive attendance statistics and reports",
      icon: <BarChart3 size={24} />,
      bgColor: "bg-orange-500",
      borderColor: "border-orange-100",
      path: "/attendance"
      
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Dashbar />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            <span className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase">
              Dashboard
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Student Management Hub
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Streamline student operations with our comprehensive face recognition and attendance management system.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`group bg-white p-7 rounded-4xl border ${card.borderColor} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col`}
            >
              {/* Card Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${card.bgColor}`}>
                {card.icon}
              </div>

              {/* Card Text */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm mb-8 grow leading-relaxed">
                {card.desc}
              </p>

              {/* Card Button */}
              <button className={`w-full py-3 px-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${card.bgColor} hover:brightness-110 shadow-md`}>
                Get Started <ChevronRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;