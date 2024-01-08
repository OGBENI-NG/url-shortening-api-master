import React from 'react'
import Section from '../Section'

export default function Testimonies({testimoniesData}) {

  const renderBrandData = testimoniesData.map((data, index) => (
    <div 
      key={index}
      className={`bg-white text-center mb-24 py-8 px-7 flex flex-col items-center 
        justify-center lg:mb-0 
        rounded-[8px] relative z-[0] lg:items-start lg:text-left
         ${index !== 0 && `lg:after:absolute lg:after:content-[""] lg:after:w-2 lg:after:h-6
         lg:after:bg-cyan lg:after:rotate-90 
         lg:after:-left-[16px]
         ${index === 1 && 'lg:after:top-[120px]'} 
         ${index === 2 && 'lg:after:top-[72px]'}`} 
         ${index === 0 && "lg:h-max" || index === 1 && "lg:mt-12 lg:h-max" || index === 2 && "lg:h-max lg:mt-24"}`}
    >
      <div className={`relative bg-dark-violet -mt-[4.4rem] h-20 w-20 p-5 rounded-full mb-4
        ${index !== 0 ? `before:absolute before:content-[""] before:w-3 before:h-20 before:bg-cyan
           before:left-[2.1rem] before:-top-[3.6rem] before:m-0 before:-z-[1] lg:before:hidden  ` : ''}`}>
        <img src={data.img} alt={data.alt} />
      </div>
      <h2 className='font-bold text-very-dark-blue text-2xl my-4'>{data.name}</h2>
      <p className='text-lg lg:text-lg md:text-2xl text-grayish-violet'>{data.details}</p>
    </div>
  ));
  
  return (
    <Section className="bg-lightGray p-6 md:px-28 lg:-z-[0] pt-12 lg:px-8 lg:py-28 
      lg:flex lg:gap-6 xl:py-16 xl:px-28 xxl:px-44 xxl:py-32">
      {renderBrandData}
    </Section>
  );
  
}
