import React from 'react'
const Features = () => {
  const featureList = [
    { title: "Real-time Recognition", desc: "Recognize faces instantly using live webcam capture with industry-leading accuracy.", icon: "📷", color: "bg-blue-50 text-blue-500" },
    { title: "Easy Registration", desc: "Register new users seamlessly via webcam with secure encrypted facial embeddings.", icon: "👤", color: "bg-green-50 text-green-500" },
    { title: "User Management", desc: "Comprehensive dashboard to view, manage, and monitor all registered users.", icon: "📊", color: "bg-purple-50 text-purple-500" },
    { title: "Advanced Security", desc: "Enterprise-grade encryption for all facial data and personal information.", icon: "🛡️", color: "bg-yellow-50 text-yellow-500" },
    { title: "Lighting Fast Processing", desc: "Optimized algorithms for lightning-fast facial recognition and processing.", icon: "⚡", color: "bg-orange-50 text-orange-500" },
    { title: "Cross-Platform Support", desc: "Works seamlessly across all modern browsers and devices with webcam access.", icon: "🌐", color: "bg-teal-50 text-teal-500" },];

  return (
    <section id="Features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">• FEATURES •</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">Powerful Features for Modern Recognition</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Experience cutting-edge facial recognition technology with enterprise-grade security and user-friendly interface.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition duration-300 group">
              <div className={`${f.color} w-12 h-12 flex items-center justify-center rounded-2xl text-2xl mb-6 group-hover:scale-110 transition`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;