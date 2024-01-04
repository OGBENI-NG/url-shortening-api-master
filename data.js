import brandIcon from './src/asset/images/icon-brand-recognition.svg'
import detailsIcon from './src/asset/images/icon-detailed-records.svg'
import customizeIcon from './src/asset/images/icon-fully-customizable.svg'
import facebookIcon from './src/asset/images/icon-facebook.svg'
import twitterIcon from './src/asset/images/icon-twitter.svg'
import pinterestIcon from './src/asset/images/icon-pinterest.svg'
import instagramIcon from './src/asset/images/icon-instagram.svg'

const brandData = [
      {
            name: "Brand Recognition",
            details: `Boost your brand recognition with each
                  click.Generic links don’t mean a thing. Branded 
                  links help instil 
                  confidence in your content.`,
            img: brandIcon,
            alt: "brand-recognition-icon"
            },
      {
            name: "Detailed Records",
            details: `Gain insights into who is clicking your links.
                  Knowing when and where people engage with your
                  content helps inform better decisions.`,
            img: detailsIcon,
            alt: "details-recorded-icon"
            },
      {
            name: "Fully Customizable",
            details: `Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.`,
            img: customizeIcon,
            alt: "full-customizable-icon"
      },
      {
            name: "Features",
            type: "footer",
            list: ["Link Shortening", "Branded Links", "Analytics"]

      },
      {
            name: "Resources",
            type: "footer",
            list: ["Blog", " Developers", "Support"]

      },
      {
            name: "Company",
            type: "footer",
            list: ["About", "Our Team", "Careers", "Contact"]

      },
      {icon: facebookIcon, alt: "facebook-icon", type: "social-icon"}, 
      {icon:twitterIcon, alt: "twitter-icon", type: "social-icon"}, 
      {icon: pinterestIcon, alt: "pinterest-icon", type: "social-icon"}, 
      {icon: instagramIcon, alt: "instagram-icon", type: "social-icon"},
]

export default brandData