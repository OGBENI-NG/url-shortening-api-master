import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function IntroBase({bgBoostDsk, bgBoostMb}) {
  return (
    <Section className="bg-dark-violet relative overflow-hidden py-[5.5rem] -z-[1] 
      text-center">
      <div className='absolute -z-[1] top-0 right-0 left-0'>
        <img className='lg:hidden w-full' src={bgBoostMb} alt="bg-boost-icon" />    
        <img className='lg:block sm:hidden' src={bgBoostDsk} alt="bg-boost-icon" />    
      </div>
     <div className='px-6'>
     <h3 className='text-white font-bold text-[1.76rem] mt-2'>Boost your links today</h3>
      <Button className="mt-5 py-3 px-8 text-lg lg:px-8 lg:py-2 rounded-full">Get Started</Button>
     </div>
    </Section>
  )
}
