import React from 'react';
import IntelliWashLogo from "../assets/IntelliWashLogo.png";

const Header = () => {
  return (
    <div className='flex justify-between shadow-lg rounded-xl w-screen overflow-x-hidden'>
      <img className='w-40 cursor-pointer m-2 mx-5' src={IntelliWashLogo} alt='company-logo'/>
      <div className='flex justify-between items-center cursor-pointer mx-4'>
        <p className='m-2 p-2'>HOME</p>
        <p className='m-2 p-2'>ABOUT</p>
        <p className='m-2 p-2'>CONTACT</p>
      </div>
    </div>
  )
}

export default Header
