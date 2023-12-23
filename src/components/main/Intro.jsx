import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function Intro({illustrationWorking}) {
  return (
    <Section className="overflow-hidden bg-white lg:flex lg:items-center lg:px-16 
      lg:relative lg:mt-8">
      <div className='h-[320px] w-[500px] ml-6 lg:order-1 lg:absolute -right-20 
        lg:top-0 lg:bottom-0 lg:h-full '>
        <img className='w-full h-full ' src={illustrationWorking} alt="illustration-working" />
      </div>
      <div className='text-center lg:text-left py-10 px-6 mt-5 lg:p-0 
        pb-40 lg:w-[500px]'>
        <h1 className='text-4xl font-bold lg:text-5xl lg:leading-tight'>More than just shorter links</h1>
        <p className='text-lg text-grayish-violet mt-4 font-medium leading-[150%]'>
          Build your  brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <Button className="mt-7 py-3 px-7 text-lg lg:px-8 lg:py-2">
          Get Started
        </Button>
      </div>
    </Section>

  )
}
