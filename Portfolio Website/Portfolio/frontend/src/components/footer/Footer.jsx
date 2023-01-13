import React from 'react';
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fp1'>
        <h3>Let's get started</h3>
      </div>
      <div className='fp2'>
        <div className='descSection'>
          <div className='about'>
            <span>About us</span>
            <p>We provide you the quality products .Better understanding and expert with more than two years of experience </p>
          </div>
          <div className='featuredlist'>
            <span>Featured</span>
            <div className='flist'>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Work</li>
            </ul>
            </div>
          </div>
          <div className='contactSocial'>
            <span>Follow us</span>
            <div className='smlogo'>
            <a href='https://www.w3schools.com'target="_blank" rel="noopener noreferrer"> <FacebookOutlinedIcon className='ico'/></a>
            <a href='https://www.w3schools.com' target="_blank" rel="noopener noreferrer"><TwitterIcon className='ico'/></a>
            <a href='https://www.w3schools.com' target="_blank" rel="noopener noreferrer"><LinkedInIcon className='ico'/></a>
          </div>
  
          </div>
        </div>
        <div className='endPart1'>
        <p></p>
      </div>
        <div className='endPart'>
        <p>@copyright Afaq <small>2022 </small></p>
      </div>
      </div>
    </div>
  )
}

export default Footer