import React from 'react'
import "./UpperNav.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const UpperNav = () => {
  return (
    <div className='uppernav'>
     <div className='leftpart'>
     <div className='phone'>
        <h3>Phone:</h3>
        <p>+923081568861</p>
     </div>
     <div className='Email'>
        <h3>Email:</h3>
        <p>ak1660500@gmail.com</p>
     </div>
     
     </div>
      <div className='rightpart'>
        <a href='https://www.w3schools.com'target="_blank" rel="noopener noreferrer"> <FacebookOutlinedIcon className='icons'/></a>
        <a href='https://www.w3schools.com' target="_blank" rel="noopener noreferrer"><TwitterIcon className='icons'/></a>
      <a href='https://www.w3schools.com' target="_blank" rel="noopener noreferrer"><LinkedInIcon className='icons'/></a>
      </div>
    </div>
  )
}

export default UpperNav