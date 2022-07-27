import React, { useState } from 'react';
import Filter from '../components/filter'
import Card from '../components/card'
import '../styles/card.css'
import Axios from 'axios'


const Advertisers = () => {
  const [title, setTitle] = useState([""]);

  Axios.get("http://localhost:3001/cards", {
  }).then((response) => {
    console.log(response.data .length);
    // for (const value of response.data){
    // setTitle([...title, value.title]);
    // }
  });

  return (
    <div>
    <div><Filter /></div>
    <div className='wrapper'><div><Card title={title[0]}/><Card /></div></div>
    </div>
  )
}

export default Advertisers;