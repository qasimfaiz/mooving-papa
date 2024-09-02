import React, { useState, useEffect } from 'react';
import Delivery from '../assets/12-Delivery.png';
import Arrow from '../assets/arrow.png';
import Vector from '../assets/vector.png';

const Page3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 50;
  const visibleCards = 10;

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalCards - visibleCards : prevIndex - 1
    );
  };

  // Move to the next slide (scroll to the left)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % totalCards
    );
  };

  return (
    <div className="min-h-screen bg-[#00292A] py-12 px-4 md:px-8 flex flex-col items-center">
      {/* Text Section */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Our Services: Making your <br /> move a breeze
        </h2>
        <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Moving Papa provides flexible moving solutions, <br className="hidden md:block" /> 
          from full-service to DIY options. Our tech-driven platform ensures a smooth, <br className="hidden md:block" /> 
          transparent process, so you can move with ease.
        </p>
      </div>

      {/* Arrows Section */}
      <div className="flex items-center justify-center w-full max-w-5xl mb-12 px-4">
        <button onClick={prevSlide} className="p-3 md:p-6">
          <img src={Vector} alt="Left Arrow" className="w-6 md:w-14" />
        </button>
        <div className='ml-36 mr-36'></div>
        <button onClick={nextSlide} className="p-3 md:p-6">
          <img src={Arrow} alt="Right Arrow" className="w-6 md:w-20" />
        </button>
      </div>

      {/* Cards Section */}
      <div className="overflow-hidden w-full max-w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(totalCards / visibleCards) * 100}%`,
          }}
        >
          {[...Array(totalCards)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg p-12  mx-4 h-72 flex-shrink-0" style={{width:'400px'}}>
              <img src={Delivery} alt="Service" className="mb-4 h-16 w-16" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Service {i + 1}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Lorem morbi et amet suscipit. At sed 
                proin quis risus urna a. Magna in odio in urna amet ultrices fermentum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
