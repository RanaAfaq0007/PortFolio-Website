import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import UpperNav from '../navbar/UpperNav';
import"./Header.css";
import { Link } from 'react-router-dom';
import Description from '../description/Description';

const Header = () => {
  return (
    <div className='header'>
     
     <div className='body'>
      <div className='headingText'>
       
        <h1>I Love To Build Applications ..</h1>
        <p>Like websites,mobile applications</p>
      <Link to='/about'>
        <button className='Aboutbtn'>About Me</button>
        </Link>
      </div>
     </div>
     <Description/>
     <Footer/>
    
    </div>
  )
}

export default Header