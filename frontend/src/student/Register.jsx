import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  GraduationCap,
  Mail,
  Phone,
  Hash,
  Calendar,
  BookOpen,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    semester: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ handle change (ONLY updates state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ handle submit (SEND to API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.fullName || !formData.email || !formData.studentId) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/students/",
        formData
      );

      console.log("Student saved:", response.data);

      // go to next page
      navigate("/capture");
    } catch (error) {
      console.error(
        "Submission error:",
        error.response?.data || error.message
      );
      alert("Failed to register student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg shadow-blue-200 shadow-lg">
            <User className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Student Registration</h1>
            <p className="text-sm text-slate-500 font-medium">
              Step 1 of 2: Student Details
            </p>
          </div>
        </div>
        <Link
          to="/student"
          className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition"
        >
          <LayoutDashboard size={18} />
          <span className="font-semibold text-sm">Dashboard</span>
        </Link>
      </div>

      {/* Main Form */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="p-6 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Register New Student
            </h2>
            <p className="text-slate-500">
              Fill in all required student details
            </p>
          </div>

          {/* ✅ FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Personal Details */}
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-md">
                  <User className="text-white w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-blue-900">
                  Personal Details
                </h3>
              </div>

              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  icon={<User size={18} />}
                  onChange={handleChange}
                />
                <InputField
                  label="Student ID"
                  name="studentId"
                  value={formData.studentId}
                  icon={<Hash size={18} />}
                  onChange={handleChange}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  icon={<Mail size={18} />}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  icon={<Phone size={18} />}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Academic Details */}
            <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-500 p-1.5 rounded-md">
                  <GraduationCap className="text-white w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-emerald-900">
                  Academic Details
                </h3>
              </div>

              <div className="space-y-4">
                <SelectField
                  label="Department"
                  name="department"
                  value={formData.department}
                  options={["CSIT", "BIM", "BIT"]}
                  icon={<BookOpen size={18} />}
                  onChange={handleChange}
                />
                <SelectField
                  label="Year"
                  name="year"
                  value={formData.year}
                  options={["2078", "2079", "2080", "2081"]}
                  icon={<Calendar size={18} />}
                  onChange={handleChange}
                />
                <SelectField
                  label="Semester"
                  name="semester"
                  value={formData.semester}
                  options={[
                    "1st Semester",
                    "2nd Semester",
                    "3rd Semester",
                    "4th Semester",
                    "5th Semester",
                    "6th Semester",
                    "7th Semester",
                    "8th Semester",
                  ]}
                  icon={<BookOpen size={18} />}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="lg:col-span-2 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                {loading ? "Submitting..." : "Continue to Photo Capture"}
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// reusable input
const InputField = ({ label, icon, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold uppercase text-slate-500">
      {label} *
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

// reusable select
const SelectField = ({ label, icon, options, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold uppercase text-slate-500">
      {label} *
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <select
        {...props}
        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Register;