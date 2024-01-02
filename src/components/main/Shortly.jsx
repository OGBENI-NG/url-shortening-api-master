import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function Shortly({longUrl, error, handleChange, handleShortenLink, shortUrl, longUrlArray}) {
  return (
    <Section className="px-6 py-10 bg-lightGray">
      <form className='flex flex-col gap-5 bg-dark-violet rounded-xl p-7 -mt-[8.8rem]'>
        <div>
          <input 
            type="text" 
            value={longUrl}
            onChange={handleChange}
            placeholder='Shorten a link here...'
            className='w-full p-4 text-lg rounded-[10px] mb-1 border-none
            outline-0'
          />
          {error && <span className='text-lg hidden'>{error}</span>}
        </div>
        <Button 
          type="submit" 
          className="w-full rounded-[10px] py-4 text-lg"
          onClick={handleShortenLink}
        >
          Shorten It!
        </Button>
      </form>
      <div className='mt-6'>
        <div className='text-lg'>
          {longUrlArray.map((long, i) => (
            <div key={i} className='bg-white mb-4 py-4'>
              <p className='pb-4 border-b-[1px] border-grayish-violet'>
                <a className='px-4 text-very-dark-violet' href={long} target='_blank'>{long}</a>
              </p>
              {shortUrl[i] && (
                <p className='px-4 pt-4'>
                  <a 
                    href={shortUrl[i]} 
                    target='_blank' 
                    className='text-cyan py-4'>
                    {shortUrl[i]}
                  </a>
                  <Button className='block w-full rounded-lg py-2 mt-4'>Copy</Button>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </Section>
  )
}
