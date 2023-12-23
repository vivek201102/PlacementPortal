import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from './logo.png' 

const Page = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex justify-between min-w-full bg-primary p-5 text-cyan-50'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='font-bold text-2xl '>
        PLACEMENT PORTAL
      </div>
      <div className='relative'>
        <div
          onClick={toggleDropdown}
          className='flex items-center justify-center cursor-pointer'
        >
          <FontAwesomeIcon icon={faUser} className='rounded-full p-2 border' />
          <FontAwesomeIcon icon={faCaretDown} className='p-2 ml-1' />
        </div>
        {isDropdownOpen && (
          <div className='absolute top-full right-0 mt-2 w-48 bg-primary border rounded-md'>
            {/* Dropdown content */}
            <a
              href=''
              className='block px-4 py-2 text-gray-50 hover:bg-slate-800'
            >
              Profile
            </a>
            <a
              href='/'
              className='block px-4 py-2 text-gray-50 hover:bg-slate-800'
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
