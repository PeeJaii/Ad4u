import React from 'react'
import '../../styles/filter.css'
import {
    Nav,
    Bars,
    NavMenu,
    NavBtn
  } from './NavbarElements';
  
  const Filter = () => {
    return (
      <>
        <Nav>
        <div className='fil'>
          <b>FILTER</b>
        </div>
          <Bars />
          <NavMenu>
            <input type="text" placeholder="Location" className='fil' />
            <input type="text" placeholder="Type" className='fil' />
          </NavMenu>
          <NavBtn className='btn'>
          Search
        </NavBtn>
        </Nav>
      </>
    );
  };

export default Filter;