import React from 'react';
import { UserPlus, UserCog, Camera, BarChart3 } from 'lucide-react';



const ActionCard = ({ title, description, icon: Icon, color, buttonText }) => (
  <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start transition-all hover:shadow-md hover:-translate-y-1">
    <div className={`p-3 rounded-xl mb-4 text-white shadow-sm ${color}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm mb-6 grow leading-relaxed">
      {description}
    </p>
    <button className={`w-full py-2.5 px-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-opacity group-hover:opacity-90 ${color}`}>
      {buttonText} <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  </div>
);

export default ActionCard;