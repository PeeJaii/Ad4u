import React, { useState,useEffect } from 'react'
import '../styles/your_adspace.css'
import Card from '../components/card'
import Axios from 'axios'

const YourAdspace = () => {
    const id = localStorage.getItem('id');
    const [ adboards1,setAdboards1 ] = useState([]);
    const [ adboards2,setAdboards2 ] = useState([]);

    useEffect(() => {Axios.get("http://localhost:3001/youradspace/posted/"+id).then((response) => {
    setAdboards1(response.data);
  })}, []);

  useEffect(() => {Axios.get("http://localhost:3001/youradspace/rented/"+id).then((response) => {
    setAdboards2(response.data);
  })}, []);

  return (
    <div><div className='post'>
        Adspaces Posted</div>
        <div className='wrapper'>
        {adboards1.map((val) =>  {{return(
      <Card title={val.title} location={val.location} img={val.image} type={val.type} button="Delete"/>);
      }})
      }
        </div>
        <div className='post'>
            Adspaces Rented</div>
            <div className='wrapper'>
            {adboards2.map((val) =>  {{return(
      <Card title={val.title} location={val.location} img={val.image} type={val.type} button="Unrent"/>);
      }})
      }</div></div>
  )
}

export default YourAdspace