import React,{useState, useEffect} from 'react'
import Header from './Header'
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/hamburger.svg'
import illustrationWorking from '../asset/images/illustration-working.svg'
import Main from './main/Main'
import axios from 'axios'

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [longUrl, setLongUrl] = useState("")
  const [shortUrl, setShortUrl] = useState(storeShortUrls)
  const [longUrlArray, setLongUrlArray] = useState(storeLongUrls)
  const [error, setError] = useState('');
  const BITLY_ACCESS_TOKEN = import.meta.env.VITE_BITLY_API_KEY;


  function storeShortUrls(){
    const storeShortUrl = localStorage.getItem('shortUrl')
    return storeShortUrl ? JSON.parse(storeShortUrl) : []
  } 
  
  function storeLongUrls() {
    const storeLongUrl = localStorage.getItem('longUrlArray')
    return storeLongUrl ? JSON.parse(storeLongUrl) : []
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
    e.preventDefault();
  
    if (!longUrl.trim()) {
      setError('Please add a link.');
      return;
    }
  
    if (!longUrl.startsWith('https://')) {
      setError('Please add a link starting with "https://".');
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
      setShortUrl((prevShortUrls) => [...prevShortUrls, response.data.id]);
      setLongUrlArray((prevLongUrlArr) => [...prevLongUrlArr, longUrl])
      setError('');
      setLongUrl('')
    } catch (error) {
      console.error('Error:', error.message);
      setError('Failed to fetch. Please try again.');
    }
  };
  

  return (
    <div className={`font-poppins`}>
      <Header 
        logo={logo}
        hamburger={hamburger}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <Main 
        illustrationWorking={illustrationWorking}
        longUrl={longUrl}
        handleChange={handleChange}
        shortUrl={shortUrl}
        handleShortenLink={handleShortenLink}
        error={error}
        longUrlArray={longUrlArray}
        
      />
    </div>
  )
}
