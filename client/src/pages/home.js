import React from 'react'
import '../styles/home.css'
import img1 from '../images/home_img.png'
import img2 from '../images/h_img.png'
import img3 from '../images/explore.png'
import indu from '../images/indu.jpg'

const Home1 = () => {
  return (
    <div className='main1'>
    <img src={img2} className='img2' alt='' /><div className='intro'>
    <div className='find'>Find your adspace</div>
    <div className='lor'> Ad4u serves as a platform or a point of communication between advertisers and advertisement board owners. This provides the user to easily rent any space for advertising and to find suitable space for advertising.</div>
    <img src={img3} className='exp' alt='' />
    <div className='find' id='about'>About Us</div>

    <div className="row">
  <div className="column">
    <div className="card">
      <img src={indu} alt="Jane"  />
      <div className="container">
        <h2>Indrajith Vijayan</h2>
        <p className="title">Member 1</p>
        <p className='col'>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className='col'>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={indu} alt="Mike"  />
      <div className="container">
        <h2>Nithin Antony</h2>
        <p className="title">Member 2</p>
        <p className='col'>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className='col'>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={indu} alt="John"  />
      <div className="container">
        <h2>PJ Aravind</h2>
        <p className="title">Member 3</p>
        <p className='col'>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className='col'>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={indu} alt="Jane"  />
      <div className="container">
        <h2>Sreelal K</h2>
        <p className="title">Member 4</p>
        <p className='col'>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className='col'>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className='find' id='services'>Services</div>
<div className='lor'>We make </div>
    </div>    
    <img src={img1} className='img1' alt='' />
    </div>
  )
}

export default Home1;