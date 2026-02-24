import React from 'react'

const About = () => {
  return (
    <section id="#about" className='py-2 bg-grey-600 overflow-hidden '>
      <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">About Us</span>
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 text-center sm:">
            Plan Design,Process,Coding,Sucess Results
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-center">
            Our Advance Face attendance system is here to make use of this technology 
          </p>
          <div className="relative grid grid-cols-1 gap-8">
            <div className=" hidden"></div>

          </div>

   
      
    

    </section>
  )
}


export default About;
