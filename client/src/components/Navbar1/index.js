import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import img2 from '../../images/h_img.png'
import '../../styles/nav.css'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/signin/profile'>
          <img src={img2} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/signin/profile/advertisers' >
            Advertisers
          </NavLink>
          <NavLink to='/signin/profile/adspace' >
            Adspace owners
          </NavLink>
        <NavLink to='/signin/profile/youradspace' >
            Your adspaces
          </NavLink>
          </NavMenu>
        <NavBtn>
          <NavBtnLink Link to='/signin' >Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;