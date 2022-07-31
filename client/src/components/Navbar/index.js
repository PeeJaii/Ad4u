import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import img2 from '../../images/h_img.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={img2} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
          <NavLink to='/sign-up' >
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;