import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar1 from '../components/Navbar1';
import Advertisers from './advertisers'
import Adspace from './adspace'
import Home1 from '../pages/home'
import Youradspace from './your_adspace'

const Profile = () => {
  return (
    <div>
    <Navbar1 /> 
    <Routes>
        <Route path='/advertisers' element={<Advertisers />} />
        <Route path='/adspace' element={<Adspace />} />
        <Route exact path='/' element={<Home1 />} />
        <Route path='/youradspace' element={<Youradspace />} />
    </Routes></div>
  );
}

export default Profile;