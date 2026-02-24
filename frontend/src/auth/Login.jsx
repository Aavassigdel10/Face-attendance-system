import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

    const [username, setUsername] = useState("");

 
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem("username", newUsername); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email,  // MUST be email, not username
        password,
        role,
      });

      console.log("Login response:", response.data);

      const { token, role: userRole } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", userRole);

      if (userRole === "student") navigate("/student");
      else navigate("/teacher");
    } catch (error) {
      console.error("Login error:", error.response?.data);
      const message =
        error.response?.data?.error ||
        error.response?.data?.non_field_errors?.[0] ||
        "Invalid credentials or role. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white border border-blue-400 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {role === "student" ? "Student Login" : "Teacher Login"}
        </h2>

        {/* Role Selection */}
        <div className="flex justify-between mb-6">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 rounded-l-lg font-medium transition ${
              role === "student" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("teacher")}
            className={`w-1/2 py-2 rounded-r-lg font-medium transition ${
              role === "teacher" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Teacher
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              required
              value={username}
              onChange={handleChange}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Logging in..." : `Login as ${role === "student" ? "Student" : "Teacher"}`}
          </button>
        </form>

        <div className="text-center mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
          <a href="/" className="block text-sm text-blue-600 hover:underline">Return Back</a>
        </div>
      </div>
    </div>
  );
};

export default Login;