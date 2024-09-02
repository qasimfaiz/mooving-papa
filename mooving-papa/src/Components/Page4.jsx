import React from 'react';
import LeftSide from '../assets/leftside.png';

const Page4 = () => {
  return (
    <div className="flex flex-col items-center justify-between p-6 bg-white text-gray-800">
      <style>
        {`
          .text-gradient {
            background: linear-gradient(180deg, #F84734 0%, #34A853 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .line-gradient {
            position: absolute;
            bottom: -10px;
            marleft: 0;
            width: 85%;
            height: 2px;
            background: linear-gradient(180deg, #F84734 0%, #34A853 100%);
          }
        `}
      </style>
      <h1 className="text-3xl font-bold text-green-600 mb-20 mt-2 text-center"> <span className='text-black'>Our commitment to </span>transparency</h1>
      <div className="flex flex-col md:flex-row items-center justify-between md:w-full">
        <div className="md:w-[45%] space-y-8 ml-16">
          <div className="relative">
            <div className="flex items-start">
              <span className="text-gradient pr-4 font-bold">01</span>
              <div>
                <p> <span className='font-bold'> Clear, Upfront pricing</span> <span className="text-sm text-gray-600">
                 - We believe in honest communication <br /> from the start. We provide clear, upfront pricing with no hidden <br /> fees, so you know exactly what you're paying for.
                </span></p>
                
              </div>
            </div>
            <div className="line-gradient"></div>
          </div>
          <div className="relative">
            <div className="flex items-start">
              <span className="text-gradient pr-4 font-bold">02</span>
              <div>
                <p> <span className='font-bold'> Real-Time Tracking</span> <span className="text-sm text-gray-600">
                 - With MovingPapa You’ll always know the <br /> status of your move, from when we pick up your items to when <br /> they arrive at your new home, providing full visibility.
                </span></p>
                
              </div>
            </div>
            <div className="line-gradient"></div>
          </div>
          <div className="relative">
            <div className="flex items-start">
              <span className="text-gradient pr-4 font-bold">03</span>
              <div>
                <p> <span className='font-bold'>Sustainability at the Core</span> <span className="text-sm text-gray-600">
                - Transparency extends to our <br /> environmental impact. From our eco-friendly packing materials <br /> to optimized routes, we’re committed to moving your <br /> belongings while minimizing our carbon footprint                </span></p>
                
              </div>
            </div>
            <div className="line-gradient"></div>
          </div>
          <div className="relative">
            <div className="flex items-start">
              <span className="text-gradient pr-4 font-bold">04</span>
              <div>
                <p> <span className='font-bold'>24/7 Availability & Non-Intrusive Service</span> <span className="text-sm text-gray-600">
                - Life doesn’t stop, <br /> so neither do we. With round-the-clock availability, you can <br /> schedule your move at your convenience. Plus, we respect your <br /> time—no spammy calls. You decide when you want to be <br /> contacted.                </span></p>
                
              </div>
            </div>
          
          </div>
        </div>
        <div className="md:w-[60%] flex justify-center mt-8 md:mt-0">
          <img src={LeftSide} alt="Moving Papa" className="w-full max-w-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Page4;
