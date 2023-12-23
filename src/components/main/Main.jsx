import React from 'react'
import Intro from './Intro'
import Shortly from './Shortly'

export default function Main({illustrationWorking, error, longUrl, handleChange, shortUrl, handleShortenLink}) {
  return (
    <main>
      <Intro
        illustrationWorking={illustrationWorking}
      />
      <Shortly 
        longUrl={longUrl} 
        handleChange={handleChange}
        shortUrl={shortUrl}
        handleShortenLink={handleShortenLink}
        error={error}
      />
    </main>
  )
}
