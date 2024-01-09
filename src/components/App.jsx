import React,{useState, useEffect, useRef} from 'react'
import Header from './Header'
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/hamburger.svg'
import illustrationWorking from '../asset/images/illustration-working.svg'
import bgBoostMb from '../asset/images/bg-boost-mobile.svg'
import bgBoostDsk from '../asset/images/bg-boost-desktop.svg'
import bgShortenMb from '../asset/images/bg-shorten-mobile.svg'
import bgShortenDsk from '../asset/images/bg-shorten-desktop.svg'


import Intro from './main/Intro'
import axios from 'axios'
import Shortly from './main/Shortly'
import brandData from '../../data'
import Testimonies from './main/Testimonies'
import IntroBase from './main/IntroBase'
import Footer from './Footer'

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [longUrl, setLongUrl] = useState("")
  const [shortUrl, setShortUrl] = useState(storeShortUrls)
  const [longUrlArray, setLongUrlArray] = useState(storeLongUrls)
  const [error, setError] = useState('')
  const [copyShortUrl, setCopyShortUrl] = useState(null)
  const BITLY_ACCESS_TOKEN = import.meta.env.VITE_BITLY_API_KEY

  const testimoniesData = brandData.slice(0, 3)
  const footerData = brandData.filter(data => data.type === 'footer')
  const socialIcons = brandData.filter(icon => icon.type === 'social-icon')
  

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

  // use localStorage to set the value of long and short urls
  useEffect(() => {
    localStorage.setItem('shortUrl', JSON.stringify(shortUrl))
    localStorage.setItem('longUrlArray', JSON.stringify(longUrlArray))
  }, [shortUrl, longUrlArray])

  const navBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navBarRef.current && !navBarRef.current.contains(event.target)) {
        // Clicked outside the navBar
        setToggle(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // toggle navbar
  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setLongUrl(value)
  }

  //function to get short url from bitly api
  const handleShortenLink = async (e) => {
    e.preventDefault();
  
    // Check if input is empty
    if (!longUrl.trim()) {
      setError('Please add a link.');
      return;
    }
  
    // Check if input starts with 'https://'
    if (!longUrl.startsWith('https://')) {

      setError('start with "https://".');
      return;
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
      );
      
      setLongUrlArray((prevLongUrlArr) => [...prevLongUrlArr, longUrl]);
      setShortUrl((prevShortUrls) => [...prevShortUrls, response.data.id]);
      setError('');
      setLongUrl('');
    } catch (error) {
      console.error('Error:', error.message);
      setError('No More shortly Token.');
    }
  };
  
  
  return (
    <div className={`font-poppins scroll-smooth ${toggle && "overflow-x-hidden h-screen"}`}>
      <Header 
        logo={logo}
        hamburger={hamburger}
        handleToggle={handleToggle}
        toggle={toggle}
        navBarRef={navBarRef}
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
        bgShortenDsk={bgShortenDsk}
        bgShortenMb={bgShortenMb}
      />
      <Testimonies
        testimoniesData={testimoniesData}
      />
      <IntroBase
        bgBoostDsk={bgBoostDsk}
        bgBoostMb={bgBoostMb}
      />
      <Footer 
        logo={logo}
        footerData={footerData}
        socialIcons={socialIcons}
      />
    </div>
  )
}
