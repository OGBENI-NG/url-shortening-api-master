import React from 'react'
import Button from './Button'

export default function Header({hamburger, logo, toggle, handleToggle, navBarRef}) {
  return (
    <header ref={navBarRef} className='flex items-center p-6 py-7 
      md:p-12 lg:p-10 lg:px-16 xl:py-10 xl:px-28 xxl:px-44 xxl:py-16'>
      <div className='md:h-12 md:w-36'>
        <img className='md:h-full md:w-full' src={logo} alt="logo" />
      </div> 
      <div className=''>
        <nav 
          className={`
            ${toggle ? "" :`sm:hidden lg:flex lg:items-center lg:top-[2.35rem] left-[14rem] 
              lg:w-[72%] xl:w-[69%] xxl:w-[63.4%] xl:left-[18rem] xxl:left-[22rem] 
              xl:top-[2.2rem] xxl:top-[3.3rem]`} 
              absolute top-[5.7rem] md:top-[7.5rem] right-0 left-0 text-white text-center 
              text-lg md:mx-12 md:p-10 md:py-8 md:pb-32 lg:text-base font-bold bg-dark-violet mx-6
              px-6 rounded-xl lg:mx-0 lg:p-0 md:z-[10] lg:bg-transparent lg:text-gray`}
          >
          <ul className='flex flex-col gap-6 border-b-[1px] border-grayish-violet py-9
            lg:flex-row lg:p-0 lg:border-b-0 lg:gap-7 md:text-3xl md:leading-loose lg:text-[20px]'>
            <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Features</li>
            <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Pricing</li>
            <li className='lg:hover:text-dark-violet lg:cursor-pointer'>Resources</li>
          </ul>
          <div className='py-9 flex flex-col gap-6 lg:gap-8 lg:flex-row lg:p-0 lg:items-center
            lg:ml-auto md:mt-5 lg:mt-[.3rem] xl:mt-2 lg:cursor-pointer lg:text-[20px] md:text-4xl md:leading-loose'>
            <p className='lg:hover:text-dark-violet lg:cursor-pointer'>Login</p>
            <Button className='py-3 md:py-4 lg:px-8 xxl:px-16 lg:py-2 md:pt-5 rounded-full md:text-3xl'>
              Sign Up
            </Button>
          </div> 
        </nav>
      </div>
      <div className='ml-auto w-8 md:w-12 lg:hidden' onClick={handleToggle}>
        <img src={hamburger} alt="hamburger" />
      </div>
    </header>
  )
}
