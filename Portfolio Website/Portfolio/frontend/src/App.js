
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UpperNav from './components/navbar/UpperNav';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';

import Work from './Pages/Work/Work';


function App() {
  return (
    <div className='App'>
       <UpperNav/>
       <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     

     </Routes>
     

    </div>
  );
}

export default App;
