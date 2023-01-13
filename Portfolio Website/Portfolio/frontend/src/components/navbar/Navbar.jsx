import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 const  navLinkStyle = ({ isActive }) => {

    return {
      color: isActive? '#32dbc6' :'black'
    }

  }
  return (
    <div className='navbar'>
       <div className='logo'>
        <h1>Afaq<small>.</small></h1>
       </div>
       <div className='nav'>
       <ul>
        <li><NavLink style={navLinkStyle} to='/'>Home</NavLink></li>
        <li><NavLink style={navLinkStyle} to='/about'>About</NavLink></li>
        <li><NavLink style={navLinkStyle} to='/work'>Work</NavLink></li>
        
        <li><NavLink style={navLinkStyle} to='/contact'>Contact</NavLink></li>
      
       </ul>
       </div>
       
       

      
       
    </div>
  )
}

export default Navbar