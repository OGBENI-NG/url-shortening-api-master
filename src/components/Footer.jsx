import React from 'react'

export default function Footer({footerData, socialIcons}) {
  return (
    <footer className='px-6 py-12 md:py-20 bg-very-dark-violet text-center lg:text-left
      lg:flex lg:items-start lg:justify-between lg:px-16 xl:px-28 xxl:px-44'>
      <h1 className='text-4xl md:pb-10 lg:p-0 font-bold text-white pb-8'>Shortly</h1>
      <section className='sm:block md:flex md:gap-20 md:justify-center lg:gap-14 lg:text-lg'>
        {footerData.map((data, index) => (
          <div key={index} className='text-gray leading-loose pb-8 lg:pb-0'>
            <h5 className='text-lightGray font-medium text-xl py-4
              lg:pt-0 lg:pb-7 md:text-[1.3rem] lg:text-2xl xxl:text-4xl: lg:hover:text-cyan lg:cursor-pointer'
            >
              {data.name}
            </h5>
            <div className='xl:text-base lg:text-[22px] md:text-[20px] xxl:text-xl md:flex md:flex-col md:gap-4
            '>
              {data.list.map(list => (
                <p key={list} className='lg:hover:text-cyan lg:cursor-pointer'>{list}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className='pt-8 flex justify-center lg:flex-col xl:flex-row xl:gap-6 sm:gap-10 lg:gap-8 lg:pt-0 xxl:gap-8 '>
        {socialIcons.map((icon, i) => (
          <div key={i} className=''>
            <img className='sm:w-9 md:w-14 lg:w-12 xl:w-9 xxl:w-11' src={icon.icon} alt={icon.alt} />
          </div>
        ))}
      </section>
    </footer>
  )
}
