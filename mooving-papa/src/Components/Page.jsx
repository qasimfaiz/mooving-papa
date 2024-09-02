import React, { useState } from 'react';

const Page2 = () => {
  const [selectedService, setSelectedService] = useState('full-service');

  return (
    <div className="text-center py-20 bg-white min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-12">How it works</h2>
      
      <div className="flex justify-center mb-12">
      <button
          onClick={() => setSelectedService('self-service')}
          className={` bg-[#00292A] px-8 py-1 rounded-full text-white font-semibold text-lg transition-colors duration-300 
          `}
        >
        <button
          onClick={() => setSelectedService('full-service')}
          className={`bg-[#F84734] px-10 -ml-7 mr-4 py-4 rounded-full text-white font-semibold text-lg transition-colors duration-300 
            
          `}
        >
          Full-service
        </button>
       
          Self-service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mt-10">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4" style={{color:'#00292A'}}>Book your move</h3>
          <p className="text-lg text-gray-500">Tell us when and where, and we’ll handle the rest. Booking is easy and stress-free.</p>
        </div>
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4" style={{color:'#00292A'}}>We move you</h3>
          <p className="text-lg text-gray-500">Our professional movers <br /> arrive on time, ready to <br /> carefully pack, load, and <br /> transport your belongings.</p>
        </div>
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4" style={{color:'#00292A'}}>Settle in</h3>
          <p className="text-lg text-gray-500">We unload and all you need <br /> to do is relax and enjoy your <br /> new space.</p>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-16">
        <button className="w-48 py-4  bg-[#F84734] text-white text-xl font-semibold rounded-full shadow-lg">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Page2;
