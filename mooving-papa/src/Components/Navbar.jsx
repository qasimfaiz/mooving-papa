import React, { useState } from 'react';
import Logo from '../assets/LOGO.png';
import Location from '../assets/location.png';
import Leaf from '../assets/Union.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white border-b-2 border-gray-400 '>
      {/* Logo div and button */}
      <div className='flex items-center w-full md:w-auto'>
        <img src={Logo} alt="Logo" className='mr-1' />
        <button 
          style={{backgroundColor: '#F84734', color: 'white', width: '150px', height: '40px'}} 
          className='rounded-full ml-auto md:ml-48'>
          Book a move
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden ml-4'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-500 focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* nav list */}
      <ul className={`flex-col md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 mr-4 font-bold cursor-pointer ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li className='relative flex items-center md:border-l-2 md:border-gray-400 md:pl-4 md:h-16 '>
          TRACK YOUR MOVE
          <img src={Location} alt="Location Icon" className='ml-2' />
        </li>
        <li className='relative flex items-center md:border-l-2 md:border-gray-400 md:pl-4 md:h-16'>
          SUSTAINABILITY
          <img src={Leaf} alt="Leaf Icon" className='ml-2'/>
        </li>
        <li className='relative flex items-center md:border-l-2 md:border-gray-400 md:pl-4 md:h-16'>
          SIGN UP
        </li>
        <li className='relative flex items-center md:border-l-2 md:border-gray-400 md:pl-4 md:h-16'>
          LOGIN
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
