import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white font-bold">F</div>
            <span className="text-xl font-bold text-blue-900">FaceRecSys</span>
          </div>
          <p className="text-gray-500">The next generation of attendance tracking powered by Artificial Intelligence.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-4">Product</h4>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Features</a></li>
            <li><a href="#" className="hover:text-blue-600">Security</a></li>
            <li><a href="#" className="hover:text-blue-600">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-4">Company</h4>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input type="text" placeholder="Email" className="bg-white border border-gray-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Go</button>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-200 pt-8 text-gray-400 text-sm">
        © 2026 FaceRecSys AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
