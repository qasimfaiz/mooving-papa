import React from 'react';
import hero from '../assets/hero.png';
import Stars from '../assets/starss.png';
import Pin from '../assets/pin.png';
import Circle from '../assets/circle.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white">
      
      {/* Left Side: Text and Rating */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Your Move, Simplified
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          Full service moving teams or rent a truck.
        </p>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md md:shadow-lg" style={{ borderTop: '4px solid #34A853' }}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="h-16 md:h-20 w-16 md:w-20" />
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-gray-900">Google Top Rated Service</p>
              <img src={Stars} alt="Stars" className="w-32 md:w-40 mt-1" />
              <p className="text-xs md:text-sm text-gray-400 mt-1">See all our reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 mt-8 md:mt-0 bg-[#0B2E33] p-6 rounded-3xl text-white flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Where are you moving to?</h3>
        <form className="w-full max-w-sm flex flex-col items-center">
          <div className="mb-4 w-full">
            <label className="flex items-center p-4 bg-white text-gray-400 rounded-full">
              <img src={Circle} alt="" className='mr-2 w-6' />
              Choose pick up point
            </label>
          </div>
          
          <div className="mb-4 w-full">
            <label className="flex items-center p-4 bg-white text-gray-400 rounded-full">
              <img src={Pin} alt="" className='mr-2 w-6' />
              Choose your destination
            </label>
          </div>
          <button 
            type="button" 
            className="bg-[#F84734] text-white py-2 md:py-3 text-sm md:text-base rounded-full font-semibold w-24 md:w-28">
            Get a Quote
          </button>
        </form>
        <p className="text-xs md:text-sm mt-4 text-gray-500 text-center">
          No hidden fees. <br />Transparent Pricing from start to finish.
        </p>
        <div className="mt-6 w-full max-w-sm">
          <img src={hero} alt="Moving" className="w-full rounded-lg" />
        </div>
      </div>
      
    </div>
    
  );
}

export default Hero;
