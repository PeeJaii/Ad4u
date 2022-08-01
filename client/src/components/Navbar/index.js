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
import { Link, animateScroll as scroll } from "react-scroll";
import '../../styles/nav.css'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={img2} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <Link to="about" smooth={true} duration={500} className='link1'>
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className='link1'>
            Services
          </Link>
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