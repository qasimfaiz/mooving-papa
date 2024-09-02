import React from 'react';
import Goggle from '../assets/goggle.png'; // Using the image you've already imported

const Page6 = () => {
  return (
    <div className="p-32 mt-9 bg-white">
      {/* Title Section */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-14 -mt-20">
        Real Stories from <span className="text-yellow-500">Happy Customers</span>
        <span role="img" aria-label="smiley face">😊</span>
      </h2>

      {/* Reviews Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-24 ">
        {/* Review Card 1 */}
        <div className="bg-white rounded-lg shadow-2xl p-6 w-full md:w-1/3 flex flex-col items-center" style={{minHeight: '525px'}}>
          <img src={Goggle} alt="5 stars" className="w-28 mb-8" />
          <div className="flex flex-col justify-center h-full">
            <p className="text-center text-gray-500 mb-3 mt-3">
              Et eligendi expedita. <br /> Accusantium qui est eius <br /> nemo eaque dolore <br /> necessitatibus voluptatem. <br />
              Ut accusamus provident <br /> beatae dolorum amet. <br /> Omnis sapiente aut saepe <br /> aliquam doloribus eaque. <br />Iure sit sed animi molestiae <br /> impedit.
            </p>
            <p className="text-center font-semibold text-gray-500 pt-6">From: Sophia Jenkins</p>
            <a href="https://www.google.com" className="text-blue-400 text-center ">See it on Google</a>
          </div>
        </div>

        {/* Review Card 2 */}
        <div className="bg-white rounded-lg shadow-2xl p-6 w-full md:w-1/3 flex flex-col items-center" style={{minHeight: '525px'}}>
          <img src={Goggle} alt="5 stars" className="w-28 mb-8" />
          <div className="flex flex-col justify-center h-full">
            <p className="text-center text-gray-500 mb-3 mt-3">
              Et eligendi expedita. <br /> Accusantium qui est eius <br /> nemo eaque dolore <br /> necessitatibus voluptatem. <br />
              Ut accusamus provident <br /> beatae dolorum amet. <br /> Omnis sapiente aut saepe <br /> aliquam doloribus eaque. <br />Iure sit sed animi molestiae <br /> impedit.
            </p>
            <p className="text-center font-semibold text-gray-500 pt-6">From: Sophia Jenkins</p>
            <a href="https://www.google.com" className="text-blue-400 text-center ">See it on Google</a>
          </div>
        </div>

        {/* Review Card 3 */}
        <div className="bg-white rounded-lg shadow-2xl p-6 w-full md:w-1/3 flex flex-col items-center" style={{minHeight: '525px'}}>
          <img src={Goggle} alt="5 stars" className="w-28 mb-8" />
          <div className="flex flex-col justify-center h-full">
            <p className="text-center text-gray-500 mb-3 mt-3">
              Et eligendi expedita. <br /> Accusantium qui est eius <br /> nemo eaque dolore <br /> necessitatibus voluptatem. <br />
              Ut accusamus provident <br /> beatae dolorum amet. <br /> Omnis sapiente aut saepe <br /> aliquam doloribus eaque. <br />Iure sit sed animi molestiae <br /> impedit.
            </p>
            <p className="text-center font-semibold text-gray-500 pt-6">From: Sophia Jenkins</p>
            <a href="https://www.google.com" className="text-blue-400 text-center ">See it on Google</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
