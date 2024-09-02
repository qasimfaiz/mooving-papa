import React from 'react';
import Links from '../assets/links.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 rounded-t-3xl -mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between ">
        {/* Left Section - Menu Links */}
        <div className="mb-6 md:mb-0 ml-10">
          <ul className="space-y-4">
            <li className="text-2xl">WORK</li>
            <li className="text-2xl">SERVICES</li>
            <li className="text-2xl">SUBSCRIPTION</li>
            <li className="text-2xl">FREEBIES</li>
            <li className="text-2xl">ABOUT US</li>
            <li className="text-2xl">CONTACT</li>
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className='text-2xl mr-10'>
          <h3 className="text-2xl font-bold  mb-8">Contact us</h3>
          <p className="mb-2">Based in NewYork United States</p>
          <p className="mb-2">hello@yourdomain.com</p>
          <p className="mb-4">(078) 12345 12112</p>
          <div className="flex space-x-4">
           <img src={Links} alt="" className='w-36 mt-2' />
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className=" mt-20 ml-14">
        <p className="text-2xl">Made with <span className="text-red-500">❤️</span> by humans at Moving Papa</p>
      </div>
    </footer>
  );
};

export default Footer;
