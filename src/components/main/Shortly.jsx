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
    <Section className="px-6 py-10 bg-lightGray">
      <form className='bg-dark-violet rounded-[8px] p-7 -mt-[8.8rem] relative 
        z-[9] overflow-hidden'>
        <div className='absolute top-0 right-0 -z-[1]'>
          <img className='lg:hidden' src={bgShortenMb} alt="shorten-bg" />
          <img className='sm:hidden lg:block' src={bgShortenDsk} alt="shorten-bg" />
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <input 
              type="text" 
              value={longUrl}
              onChange={handleChange}
              placeholder='Shorten a link here...'
              className='w-full p-4 text-lg rounded-[8px] mb-1 border-none
              outline-0'
            />
            {error && <span className='text-lg hidden'>{error}</span>}
          </div>
          <Button 
            type="submit" 
            className="w-full rounded-[8px] py-4 text-lg"
            onClick={handleShortenLink}
          >
            Shorten It!
          </Button>
        </div>
      </form>
      <div className='mt-6'>
        <div className='text-lg'>
          {longUrlArray.map((long, i) => (
            <div key={i} className='bg-white mb-4 py-4 rounded-[8px]'>
              <div className='pb-4 border-b-[1px] border-grayish-violet'>
                <a 
                  className='px-4 text-very-dark-violet' 
                  href={long} 
                  target='_blank'
                >
                  {long}
                </a>
              </div>
              {shortUrl[i] && (
                <div className='px-4 pt-4'>
                  <a 
                    href={shortUrl[i]} 
                    target='_blank' 
                    className='text-cyan py-4'
                  >
                    {shortUrl[i]}
                  </a>
                  <Button 
                    className={`block w-full rounded-lg py-2 mt-4 
                      ${copyShortUrl === i ? "bg-dark-violet" : ""}
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
      </div>
      <div className='pt-10 pb-4 text-center'>
        <h1 className='font-bold text-very-dark-blue text-3xl'>Advanced Statistics</h1>
        <p className='mt-5 text-grayish-violet text-lg'>
          Track how your links are performing
          across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
    </Section>
  )
}
