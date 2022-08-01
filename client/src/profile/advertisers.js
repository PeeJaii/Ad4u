import React, { useState,useEffect } from 'react';
import Filter from '../components/filter'
import Card from '../components/card'
import Axios from 'axios';
import '../styles/card.css';


const Advertisers = () => {
  const [adboards, setAdboards] = useState([]);

  useEffect(() => {Axios.get("http://localhost:3001/cards").then((response) => {
    setAdboards(response.data);
  })}, []);

return(
  <div>
    <div><Filter /></div>
    <div className='wrapper'>
      {adboards.map((val) =>  {{return(
      <Card title={val.title} location={val.location} img={val.image} type={val.type} button="Rent"/>);
      }})
      }
      </div>
    </div>
)
}

export default Advertisers;