import React, { useState,useEffect } from 'react';
import Filter from '../components/filter'
import Card from '../components/card'
import Axios from 'axios';
import '../styles/card.css';


const Advertisers = () => {
  const [adboards, setAdboards] = useState([]);
  const [myData,setMyData] = useState([]);
  useEffect(() => {Axios.get("http://localhost:3001/cards").then((response) => {
    setMyData(response.data);
    // console.log(myData);
    setAdboards(response.data);
  })}, []);
  // const [location, setLocation] = useState('');
  // const [type, setType] = useState('');

return(
  <div>
    <div><Filter data={myData} setAd={setAdboards}/></div>
    <div className='wrapper'>
      {adboards.map((val) =>  {{return(
      <Card title={val.title} location={val.location} img={val.image} type={val.type} price={val.price} button="Rent"/>);
      }})
      }
      </div>
    </div>
)
}

export default Advertisers;