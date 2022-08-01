import React, {useState} from 'react'
import '../../styles/filter.css'
import {
    Nav,
    Bars,
    NavMenu,
    NavBtn
  } from './NavbarElements';
  
  const Filter = () => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    return (
      <>
        <Nav>
        <div className='fil'>
          <b>FILTER</b>
        </div>
          <Bars />
          <NavMenu>
            <input type="text" placeholder="Location" className='fil' onChange = {(e) => {setLocation(e.target.value)}}/>
            <input type="text" placeholder="Type" className='fil' onChange = {(e) => {setType(e.target.value)}}/>
          </NavMenu>
          <NavBtn className='btn'>
          Search
        </NavBtn>
        </Nav>
      </>
    );
  };

export default Filter;