import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function IntroBase({bgBoostDsk, bgBoostMb}) {
  return (
    <Section className="bg-dark-violet relative py-[5.5rem] -z-[0] 
      text-center overflow-hidden lg:py-12 xxl:py-16">
      <div className='absolute overflow-hidden -z-[1] top-0 right-0 left-0 lg:bottom-0'>
        <img className='lg:hidden w-full' src={bgBoostMb} alt="bg-boost-icon" />    
        <img className='lg:block lg:w-full lg:h-full sm:hidden' src={bgBoostDsk} alt="bg-boost-icon" />    
      </div>
     <div className='px-6'>
     <h3 className='text-white font-bold text-[1.76rem] lg:text-3xl mt-2'>Boost your links today</h3>
      <Button className="mt-5 lg:mt-8 md:mt-10 py-3 px-8 text-lg md:px-8 lg:py-2 rounded-full xl:py-4 xl:px-12
      relative z-10">Get Started</Button>
     </div>
    </Section>
  )
}
