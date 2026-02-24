import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
        <section className="pt-32 pb-20 px-4 bg-linear-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            ⭐ Revolutionary Face Recognition Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Future of <br />
            <span className="bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Attendance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Transform your attendance management with cutting-edge AI technology. 
            <span className="font-bold text-blue-600"> Secure</span>, 
            <span className="font-bold text-green-500"> Fast</span>, and 
            <span className="font-bold text-purple-500"> Reliable</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate("/SignUp")} className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 hover:scale-105 transition transform">Get Started Free →</button>
            <button onClick={() => navigate("/Capture")} className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition flex items-center gap-2">
               📷 Try Live Demo
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/40 rounded-[3rem] backdrop-blur-xl border border-white shadow-2xl flex items-center justify-center">
             {/* Circular Graphic Simulation */}
             <div className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce">
                <p className="text-xs text-gray-400">Recognition Rate</p>
                <p className="font-bold text-green-500">99.8%</p>
             </div>
             <div className="w-64 h-64 border-8 border-indigo-100 rounded-full flex items-center justify-center relative">
                <div className="w-full h-full border-t-8 border-indigo-500 rounded-full absolute -top-2 animate-spin-slow"></div>
                <div className="text-indigo-500 bg-indigo-50 p-6 rounded-3xl">
                   <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
             </div>
             <div className="absolute bottom-10 left-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce">
                <p className="text-xs text-gray-400">Processing Time</p>
                <p className="font-bold text-blue-500">&lt; 0.5s</p>
             </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Hero
