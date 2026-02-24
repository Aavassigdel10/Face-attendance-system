import React from 'react';

const Work = () => {
  const steps = [
    {
      id: "01",
      title: "Capture Image",
      description: "User captures a high-quality image via webcam on the registration page with automatic face detection.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: "bg-blue-50 text-blue-500",
    },
    {
      id: "02",
      title: "AI Processing",
      description: "Advanced deep learning algorithms extract unique facial embeddings with state-of-the-art accuracy.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      iconBg: "bg-green-50 text-green-500",
    },
    {
      id: "03",
      title: "Secure Storage",
      description: "Encrypted facial embeddings are securely stored in MongoDB with enterprise-grade protection.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      iconBg: "bg-purple-50 text-purple-500",
    },
    {
      id: "04",
      title: "Live Recognition",
      description: "Real-time webcam feeds are analyzed and matched against stored embeddings for instant identification.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "bg-orange-50 text-orange-500",
    },
  ];

  return (
    <section id="HowItWorks" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">How It Works</span>
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Simple Process, Powerful Results
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our advanced facial attendance  system follows a streamlined four-step process to deliver accurate and secure results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-12 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              {/* Step Number */}
              <div className="absolute top-6 right-8 text-4xl font-black text-gray-50 opacity-10 group-hover:opacity-20 transition-opacity">
                {step.id}
              </div>

              {/* Icon */}
              <div className={`${step.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Decorative Corner Circle */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gray-50 rounded-full -z-10 opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;