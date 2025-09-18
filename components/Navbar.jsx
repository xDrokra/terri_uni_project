import React from 'react'
import Image from 'next/image';

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

const Navbar = () => {
return (
    <nav className="w-full flex bg-(--bg-glossy) justify-between items-center p-5 px-6 shadow-lg/10">
        <MenuIcon className='h-9 w-9'></MenuIcon>
        <Image 
            src='/logo.png'
            width={75}
            height={50}
            alt='logo'
        />
    </nav>
)
}

export default Navbar