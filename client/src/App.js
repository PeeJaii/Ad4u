import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route path='/signin/profile/*' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;