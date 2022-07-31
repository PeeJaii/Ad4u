import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './profile';
import ownerId from './pages/signin'

function App() {
  var rootStyle = {
    backgroundColor : 'white',
    height: '100%',

  }
  
  return (
    <div style={rootStyle}>
    <Router>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route path='/signin/profile/*' element={<Profile />} />
      </Routes>
    </Router></div>
  );
}

export default App;