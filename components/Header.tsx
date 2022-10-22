import React from 'react';
import Image from 'next/image';
import { FaSearch, FaGlobe, } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { HiUserCircle } from 'react-icons/Hi'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '>
      <div className='relative flex items-center h-10'>

        {/* left */}
        <Image src="https://links.papareact.com/qd3" 
        layout='fill'
        objectFit='contain'
        objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className='flex items-center md:border-2 md:shadow-sm rounded-full py-2'>
        <input className='flex-grow pl-5 bg-transparent outline-none  text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='start your reserch' />
        <FaSearch className='hidden md:inline-flex cursor-pointer h-8 bg-red-400 rounded-full text-white md:mx-2' />
      </div>
      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>become a host</p>
        <FaGlobe className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <FiMenu className='h-6' />
          <HiUserCircle className='h-6' />
        </div>

      </div>

    </header>
  )
}

export default Header