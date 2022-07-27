import React from 'react';
import Navbar from '../components/Navbar';
import About from './about';
import Services from './services';
import Contact from './contact';
import SignUp from './signup';
import SignIn from './signin';
import Home1 from './home';
import { Routes, Route } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home1 />} />
      <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        </Routes>
    </div>
  );
};

export default Home;