import React from "react";
import Dashbar from "../nav/Dashbar";
import {
  UserPlus,
  Users,
  Camera,
  BarChart3,
  CalendarDays,
  Bell,
} from "lucide-react";

const features = [
  {
    title: "Take Attendance",
    description:
      "Mark attendance using live face recognition for your class sessions",
    icon: <Camera className="w-6 h-6 text-white" />,
    color: "bg-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Manage Students",
    description:
      "Add, update or remove students and manage face data for recognition",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Attendance Records",
    description:
      "View and manage daily, weekly and monthly attendance records",
    icon: <UserPlus className="w-6 h-6 text-white" />,
    color: "bg-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate attendance reports and visualize trends with analytics",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    button: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Class Schedule",
    description:
      "Manage your classes, subjects, and timetable for attendance sessions",
    icon: <CalendarDays className="w-6 h-6 text-white" />,
    color: "bg-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    title: "Notifications",
    description:
      "Send announcements and alerts to students regarding attendance",
    icon: <Bell className="w-6 h-6 text-white" />,
    color: "bg-pink-600",
    button: "bg-pink-600 hover:bg-pink-700",
  },
];

const TeacherDashboard = () => {
  return (
    <>
      <Dashbar />
      <div className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 py-8">
        {/* Title Section */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold tracking-wide">
            • TEACHER DASHBOARD •
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          Teacher Management Hub
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Efficiently manage attendance, monitor student presence using face
          recognition, and generate insightful reports.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl ${item.color} shadow-md`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <button
              className={`mt-6 text-white px-4 py-2 rounded-lg text-sm font-medium transition ${item.button}`}
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TeacherDashboard;