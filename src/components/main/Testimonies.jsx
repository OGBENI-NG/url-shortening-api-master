import React from 'react'
import Section from '../Section'

export default function Testimonies({brandData}) {

  const renderBrandData = brandData.map((data, index) => (
    <div 
      key={index}
      className='bg-white text-center mb-24 py-8 px-7 flex flex-col items-center justify-center
        rounded-[8px] relative -z-[0]'
    >
      <div className={`relative bg-dark-violet -mt-[4.4rem] h-20 w-20 p-5 rounded-full mb-4
        ${index !== 0 ? 'before:absolute before:content-[""] before:w-4 before:h-20 before:bg-cyan before:left-8 before:-top-[3.6rem] before:m-0 before:-z-[2]' : ''}`}>
        <img src={data.img} alt={data.alt} />
      </div>
      <h2 className='font-bold text-very-dark-blue text-2xl my-4'>{data.name}</h2>
      <p className='text-lg text-grayish-violet'>{data.details}</p>
    </div>
  ));
  
  return (
    <Section className="bg-lightGray p-6 py-12">
      {renderBrandData}
    </Section>
  );
  
}
