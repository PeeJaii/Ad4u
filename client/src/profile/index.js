import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar1 from '../components/Navbar1';
import Advertisers from './advertisers'
import Adspace from './adspace'

const Profile = () => {
  return (
    <div>
    <Navbar1 /> 
    <Routes>
        <Route path='/advertisers' element={<Advertisers />} />
        <Route path='/adspace' element={<Adspace />} />
    </Routes></div>
  );
}

export default Profile;