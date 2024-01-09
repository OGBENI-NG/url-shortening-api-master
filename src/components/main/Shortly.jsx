import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function Shortly(
  {
    longUrl, error, handleChange,
    handleShortenLink, shortUrl, longUrlArray,
    copyShortUrl, copyShortUrls, bgShortenDsk, 
    bgShortenMb
  }
  ) {

  return (
    <Section className="px-6 py-10 bg-lightGray md:px-12 lg:px-16 xl:px-28 xxl:px-44">
      <form
        className='bg-dark-violet rounded-[8px] p-7 -mt-[8.8rem] relative 
        z-[9] overflow-hidden lg:py-8 lg:px-12 lg:-mt-[7rem] xl:-mt-[6.6rem] xxl:py-12'>
        <section className='absolute top-0 right-0 -z-[1] lg:-bottom-0 lg:left-0'>
          <img className='lg:hidden w-full h-[100%]' src={bgShortenMb} alt="shorten-bg" />
          <img className='sm:hidden lg:block w-full h-full' src={bgShortenDsk} alt="shorten-bg" />
        </section>
        <section className={`transition-all flex flex-col ${error ? "gap-11 lg:gap-4" : "gap-5 md:gap-7"}
           lg:flex-row lg:items-center relative`}>
          <div>
            <input 
              id='shorten'
              name='shorten'
              type="text" 
              value={longUrl}
              onChange={handleChange}
              placeholder='Shorten a link here...'
              className={`w-full p-4 text-lg md:text-2xl rounded-[8px] outline-0 lg:w-[615px] xl:w-[750px] 
                xxl:w-[800px]
                ${error ? " border-[3px] border-red placeholder:text-red" : "border-none"}`}
            />
          </div>
            {error && 
              <i 
                className={`text-lg font-medium absolute top-[66px] lg:top-[68px]
                 md:top-[70px] text-red`}
              >
                {error}
              </i>
            }
          <Button 
            type="submit" 
            className="w-full transition-all rounded-[8px] py-4 text-lg md:text-2xl lg:text-xl 
              lg:w-[20%] lg:ml-auto lg:px-6"
            onClick={handleShortenLink}
          >
            Shorten It!
          </Button>
        </section>
      </form>
      <section className='mt-6 md:mt-10'>
        <div className='text-lg md:text-[24px]'>
          {longUrlArray.map((long, i) => (
            <div key={i} className='bg-white mb-4 md:mb-6 py-4
              md:py-8 md:pb-6 lg:pb-8 xl:py-4 rounded-[8px] lg:flex lg:items-center lg:px-8'>
              <div className='pb-4 border-b-[1px] border-grayish-violet lg:border-none lg:p-0 md:pb-8'>
                <a
                  className='px-4 md:px-8 text-very-dark-violet lg:p-0 inline-block 
                    sm:max-w-[300px]  md:max-w-[610px] lg:max-w-[750px] overflow-hidden overflow-ellipsis'
                  href={long}
                  target='_blank'
                >
                  {long}
                </a>
              </div>

              {shortUrl[i] && (
                <div className='px-4 md:px-8 md:pt-0  pt-4 md:flex md:items-center lg:p-0 
                  md:gap-7 md:ml-auto lg:transition-all lg:mt-0 md:mt-6'>
                  <a 
                    href={shortUrl[i]} 
                    target='_blank' 
                    className='text-cyan py-4 lg:p-0'
                  >
                    {shortUrl[i]}
                  </a>
                 
                  <Button 
                    className={`block w-full rounded-lg py-2 mt-4 md:w-max md:px-8
                      md:mt-0 md:ml-auto md:text-xl md:py-3
                      ${copyShortUrl === i ? "bg-dark-violet md:px-[18.5px] lg:hover:bg-dark-violet" : ""}
                    `}
                    onClick={() => copyShortUrls(i)}
                  >
                    {copyShortUrl === i ? "Copied!" : "Copy"}
                  </Button>
                 
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className='pt-10 md:py-16 pb-4 lg:pt-20 xl:pb-8 text-center'>
        <h4 className='font-bold text-very-dark-blue text-3xl'>Advanced Statistics</h4>
        <p className='mt-5 text-grayish-violet text-lg 
          md:text-[20px] md:w-[520px] md:m-auto md:mt-7 xl:mt-3'>
          Track how your links are performing
          across the web with our 
          advanced statistics dashboard.
        </p>
      </section>
    </Section>
  )
}
