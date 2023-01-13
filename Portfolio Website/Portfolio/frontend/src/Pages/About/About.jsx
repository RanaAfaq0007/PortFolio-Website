import React from 'react'
import AboutCard from '../../components/AboutCard/AboutCard';
import Navbar from '../../components/navbar/Navbar';
import UpperNav from "../../components/navbar/UpperNav";
import Footer from "../../components/footer/Footer";

import "./About.css";



const About = () => {
  return (
    <div className='mainAbout'>
      
      <div className='aboutContent'>
      <div className='leftpart'>
        <AboutCard/>
        </div>
       
      
      <div className='rightPart'>
          <h1>Hello There!</h1>
         
          <span> I am a Full Stack Developer expertise in both the mobile applications and websites I am a CS graduate From Arid Agriculture University.I will work to bring your ideas to the world of internet.I have a experience of more than an year.Will be glad to help you out</span>
          <div className='techLogo'>
           <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png' className='nodeimg' alt=''/>
           
           <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/flutter-512.png' className='flutterimg' alt=''/>
           
           <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' className='reactimg' alt=''/>
          </div>
          
        </div>
      </div>
       <Footer/>
       
    </div>
  )
}

export default About