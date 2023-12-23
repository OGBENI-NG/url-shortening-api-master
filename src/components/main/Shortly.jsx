import React from 'react'
import Section from '../Section'
import Button from '../Button'

export default function Shortly({longUrl, error, handleChange, handleShortenLink, shortUrl}) {
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
          <span className='text-lg hidden'>please add link</span>
        </div>
        <Button 
          type="submit" 
          className="w-full rounded-[10px] py-4 text-lg"
          onClick={handleShortenLink}
        >
          Shorten It
        </Button>
      </form>
      <div>
        {shortUrl && (
          <div>
            <p>{longUrl}</p>
            <p>{shortUrl}</p>
          </div>
        )}
      </div>
    </Section>
  )
}
