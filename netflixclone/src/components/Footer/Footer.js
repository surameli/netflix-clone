import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
       <div className='footer-container'>
        {/* <div className='footer-cont'> */}
           <div className='footer-icon'>
              <FacebookRoundedIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
           </div>
           <div className='footer-data'>
            <ul>
              <li> Audio Description</li>
              <li> Investor Relations</li>
              <li> Legal Notice</li>
              
        
            </ul>
           
         {/* </div> */}
   
          <ul>
            <li> Help Center</li>
            <li> Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        
       
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
         
       
        <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
          </div>
          <div className='service_code'>
             <p>
              Service Code
             </p>
          </div>
          <div className='copy-write'>
            &copy;  1997-2024 Netflix, Inc.
          </div>
       </div>
    </div>
  )
}

export default Footer





