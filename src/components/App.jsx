import React,{useState, useEffect} from 'react'
import Header from './Header'
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/hamburger.svg'
import illustrationWorking from '../asset/images/illustration-working.svg'
import Intro from './main/Intro'
import axios from 'axios'
import Shortly from './main/Shortly'
import brandData from '../../data'
import Testimonies from './main/Testimonies'

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [longUrl, setLongUrl] = useState("")
  const [shortUrl, setShortUrl] = useState(storeShortUrls)
  const [longUrlArray, setLongUrlArray] = useState(storeLongUrls)
  const [error, setError] = useState('')
  const [copyShortUrl, setCopyShortUrl] = useState(null)
  const BITLY_ACCESS_TOKEN = import.meta.env.VITE_BITLY_API_KEY
  


  //storing the value of shortUrl to localStorage 
  function storeShortUrls(){
    const storeShortUrl = localStorage.getItem('shortUrl')
    return storeShortUrl ? JSON.parse(storeShortUrl) : []
  } 
  
  //storing the value of LongUrl to localStorage
  function storeLongUrls() {
    const storeLongUrl = localStorage.getItem('longUrlArray')
    return storeLongUrl ? JSON.parse(storeLongUrl) : []
  }

  //copy short urls to clipboard
  async function copyShortUrls(index) {
    try {
      await navigator.clipboard.writeText(shortUrl[index])
      setCopyShortUrl(index)
      setTimeout(() => {
        setCopyShortUrl(null)
      }, 2000)
    } catch (e) {
      console.log("failed to copy", e)
    }
  }


  useEffect(() => {
    localStorage.setItem('shortUrl', JSON.stringify(shortUrl))
    localStorage.setItem('longUrlArray', JSON.stringify(longUrlArray))
  }, [shortUrl, longUrlArray])

  
  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }


  const handleChange = (e) => {
    const value = e.target.value
    setLongUrl(value)
  }

  const handleShortenLink = async (e) => {
    e.preventDefault()
  
    if (!longUrl.trim()) {
      setError('Please add a link.')
      return
    }
  
    if (!longUrl.startsWith('https://')) {
      setError('Please add a link starting with "https://".')
      return
    }
  
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: longUrl,
        },
        {
          headers: {
            'Authorization': `Bearer ${BITLY_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      )
      setLongUrlArray((prevLongUrlArr) => [...prevLongUrlArr, longUrl])
      setShortUrl((prevShortUrls) => [...prevShortUrls, response.data.id])
      setError('')
      setLongUrl('')
    } catch (error) {
      console.error('Error:', error.message)
      setError('Failed to fetch. Please try again.')
    }
  }
  
  return (
    <div className={`font-poppins`}>
      <Header 
        logo={logo}
        hamburger={hamburger}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <Intro 
        illustrationWorking={illustrationWorking}
      />
      <Shortly 
        longUrl={longUrl} 
        handleChange={handleChange}
        shortUrl={shortUrl}
        handleShortenLink={handleShortenLink}
        error={error}
        longUrlArray={longUrlArray}
        copyShortUrl={copyShortUrl}
        copyShortUrls={copyShortUrls}
      />
      <Testimonies
        brandData={brandData}
      />
    </div>
  )
}
