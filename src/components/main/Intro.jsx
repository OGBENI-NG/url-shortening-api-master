import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function Intro({illustrationWorking}) {
  return (
    <Section className="sm:overflow-x-hidden md:overflow-y-visible bg-white md:px-12
     md:flex md:gap-16 lg:gap-10 md:items-center lg:px-16 lg:pb-12 md:pb-52 xl:pb-8
      md:relative lg:mt-8 lg:mb-[11rem] xl:px-28 xl:mb-28 xxl:px-44 xxl:pb-32">
      <div className='h-[320px] w-[500px] ml-6 md:order-1 md:absolute 
        md:-right-28  lg:-right-20 
        md:top-0 md:bottom-0 md:h-max xl:w-[580px] xxl:w-[710px] xxl:-top-0'>
        <img className='w-full h-full ' src={illustrationWorking} alt="illustration-working" />
      </div>
      <div className='text-center lg:text-left py-10 px-6 mt-5 md:p-0 
        pb-40 lg:w-[500px] md:w-[380px] xl:w-[570px] md:text-left'>
        <h1 className='text-4xl font-bold md:text-5xl xl:text-6xl leading-tight
          xl:leading-tight'>More than just shorter links</h1>
        <p className='text-lg md:text-[20px] text-grayish-violet mt-4 font-medium leading-[150%] xl:text-[24px] xl:w-full
          md:w-[310px] lg:w-full'>
          Build your  brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <Button className="z-[1] mt-7 md:mt-10 py-3 px-7 text-lg md:px-8 lg:py-2 rounded-full xl:py-4 xl:px-12">
          Get Started
        </Button>
      </div>
    </Section>

  )
}
