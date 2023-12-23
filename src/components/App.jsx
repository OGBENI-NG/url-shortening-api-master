import React,{useState} from 'react'
import Header from './Header'
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/hamburger.svg'
import illustrationWorking from '../asset/images/illustration-working.svg'
import Main from './main/Main'

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError] = useState('');
  

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setLongUrl(value)
  }

  const handleShortenLink = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        throw new Error(`Failed to shorten the link. Status: ${response.status}`);
      }

      const result = await response.json();
      setShortUrl(result.result_url);
      setError('');
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
        
      />
    </div>
  )
}
