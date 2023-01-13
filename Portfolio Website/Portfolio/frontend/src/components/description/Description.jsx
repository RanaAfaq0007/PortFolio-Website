import React from 'react';
import"./Description.css";
import DoneIcon from '@mui/icons-material/Done';

const Description = () => {
  return (
    <div className='desc'>
       <div className='descWrapper'>
       <div className='Innovative'>
    
        <h1>Innovative</h1>
        <p>We focus on the innovative solution to the products .Better management to the solution .
            Better problem solving Solution for the clients.Stisfaction of the client is preffered </p>
            <ul>
                <li><DoneIcon className='icon'/> <h4>Customer Experience</h4></li>
                <li><DoneIcon className='icon'/> <h4>Product Management</h4></li>
                <li><DoneIcon className='icon'/> <h4>Proof of Product</h4></li>
            </ul>
       </div>
       <div className='Create'>
        
        <h1>Create</h1>
        <p>We focus on the innovative solution to the products .Better management to the solution .
            Better problem solving Solution for the clients.Stisfaction of the client is preffered </p>
            <ul>
                <li><DoneIcon className='icon'/> <h4>Web Design</h4></li>
                <li><DoneIcon className='icon'/> <h4>Mobile Applications</h4></li>
                <li><DoneIcon className='icon'/> <h4>Backend api's</h4></li>
            </ul>
       </div>
       <div className='scale'>
       
        <h1>Scale</h1>
        <p>We focus on the innovative solution to the products .Better management to the solution .
            Better problem solving Solution for the clients.Stisfaction of the client is preffered </p>
            <ul>
                <li><DoneIcon className='icon'/> <h4>Production Website</h4></li>
                <li><DoneIcon className='icon'/> <h4>Google Playstore </h4></li>
                <li><DoneIcon className='icon'/> <h4>Locally enviornment</h4></li>
               
            </ul>
       </div>
       </div>
    </div>
  )
}

export default Description