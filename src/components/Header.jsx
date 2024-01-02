import React from 'react'
import Button from './Button'

export default function Header({hamburger, logo, toggle, handleToggle}) {
  return (
    <header className='flex items-center p-6 py-7 lg:p-10 lg:px-16'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav 
        className={`
          ${toggle ? "" : "sm:hidden lg:flex lg:items-center lg:top-[2.35rem] left-[14rem] lg:w-[72%]"} 
            absolute top-[5.7rem] right-0 left-0 text-white text-center text-lg lg:text-base font-bold bg-dark-violet mx-6 px-6 rounded-xl lg:mx-0  lg:px-0
          lg:bg-transparent lg:text-gray`}
        >
        <ul className='flex flex-col gap-6 border-b-[1px] border-grayish-violet py-9
         lg:flex-row lg:p-0 lg:border-b-0 lg:gap-7'>
          <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Features</li>
          <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Pricing</li>
          <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Resources</li>
        </ul>
        <div className='py-9 flex flex-col gap-6 lg:flex-row lg:p-0 lg:items-center
           lg:ml-auto lg:cursor-pointer'>
          <p className='lg:hover:text-dark-violet lg:cursor-pointer'>Login</p>
          <Button className='py-3 lg:px-5 lg:py-2 rounded-full'>Sign Up</Button>
        </div> 
      </nav>
      <div className='ml-auto w-8 lg:hidden' onClick={handleToggle}>
        <img src={hamburger} alt="hamburger" />
      </div>
    </header>
  )
}
