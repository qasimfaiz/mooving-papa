import React from 'react';
import Pexel from '../assets/pexel.png';
import Star from '../assets/Star.png';
import Log from '../assets/log.png';
const Page5 = () => {
  return (
    <div className="p-8 bg-pink-100 font-sans">
      {/* Centered Heading */}
      <h2 className="text-center pt-6 pb-6 text-3xl font-bold mb-8" style={{fontFamily:'initial'}}>A Message From The Founders</h2>

      {/* Flex container for text and image */}
      <div className="flex flex-col md:flex-row justify-between items-center ml-8">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-lg" style={{fontFamily:'initial'}}>
          <p>
            At Moving Papa, we believe in keeping things simple and honest. <br />
            Moving can be stressful, so transparency is at the heart of <br /> everything we do.
          </p>
          <p className='pt-3 pb-3' >
            You deserve to know exactly what to expect—no hidden fees, no <br /> unnecessary calls,
            just a straightforward process that works for <br /> you. We're here to earn your trust by
            being open and always <br /> putting your needs first.
          </p>
          <p > 
            Thank you for choosing us to be part of your journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end pt-6 mr-8 md:mt-0">
          <img src={Pexel} alt="Founders" style={{width:'400px'}} />
        </div>
      </div>

      {/* Seal */} 
      <div className="flex  relative w-28 -m-5" style={{marginLeft:'410px'}}>
      <div>
          <img src={Star} alt="Star" className="relative z-10" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <img src={Log} alt="Logo" className="w-3/5 z-20" />
        </div>
    </div>
    </div>
  );
};

export default Page5;
