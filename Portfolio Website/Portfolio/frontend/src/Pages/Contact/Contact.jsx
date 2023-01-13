import React from 'react';
import "./Contact.css";

import Footer from "../../components/footer/Footer";
import { useState } from 'react';
import { sendMessage } from '../../services/api';
import {useNavigate} from "react-router-dom";



const initalValue = {
   name:'',
   email:'',
   description:''
}


const Contact = () => {
  const navigate = useNavigate();
  const [message,setMessage] = useState(initalValue);
  const [valid,setValid] = useState(true);
  
  
 
  


const onValueChange = (e) => {
    setMessage({...message,[e.target.name]:e.target.value});
    console.log(message);

}

const onSubmitHandler = (e) => {
  e.preventDefault();

  if(e.target.name === ''){
    setValid(false);
    return;
   
  };

  setValid(true);

}
const sendData = async () => {

  await sendMessage(message);
  navigate('/',alert("message sent!!"));
}

  return (
    <div>
   

    <div className="container">
  
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Canal Garden's 63</div>
          <div className="text-two">Lahore,Pakistan</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+92 308 1568861</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">ak1660500@gmail.com</div>
          
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form onSubmit={onSubmitHandler}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name"   name='name' onChange={(e) => onValueChange(e)}/>
        </div>
        <div className="input-box">
          <input onChange={(e) => onValueChange(e)} name='email' type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
        <input onChange={(e) => onValueChange(e)} name='description'  type="text" placeholder="Description"/>
        {!valid && <p style={{color:'black'}}>Fields must not be empty</p>}
        </div>

      
        <div className="button">
       
          <input onClick={(e) => sendData()} type="button" value="Send Now" />
        </div>

    
      </form>
    </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Contact

