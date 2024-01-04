import React from 'react'

export default function Footer({footerData, socialIcons}) {
  return (
    <footer className='px-6 py-12 bg-very-dark-violet text-center'>
      <h1 className='text-4xl font-bold text-white pb-8'>Shortly</h1>
      {footerData.map((data, index) => (
        <div key={index} className='text-gray leading-loose pb-8'>
          <h4 className='text-lightGray font-medium text-xl py-4'>{data.name}</h4>
          <p>{data.list[0]}</p>
          <p>{data.list[1]}</p>
          <p>{data.list[2]}</p>
          <p>{data.list[3]}</p>
        </div>
      ))}
      <div className='pt-8 flex justify-center gap-5'>
        {socialIcons.map((icon, i) => (
          <img key={i} src={icon.icon} alt={icon.alt} />
        ))}
      </div>
    </footer>
  )
}
