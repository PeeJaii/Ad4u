import React from 'react'
import '../styles/card.css'
import Axios from 'axios'

const Card = (props) => {
  const id = localStorage.getItem('id');
  const rent = value => () => {
    if(props.button==="Rent"){
    Axios.post("http://localhost:3001/rent", {
        id: id,
        title: value
      }).then(()=>{window.location.reload(false);
      })}
    else if(props.button==="Delete"){
      Axios.post("http://localhost:3001/delete", {
        title: value
      }).then(()=>{window.location.reload(false);
      })
    }
    else if(props.button==="Unrent"){
      Axios.post("http://localhost:3001/unrent", {
        id: id,
        title: value
      }).then(()=>{window.location.reload(false);
      })
    }
  }
  return (
    <div className='card'>
        <div className='card_body'>
            <img src ={props.img}className='card_image'></img>
            <h2 className='card_title'>{props.title}</h2>
    <p className='card_description'>Location: {props.location}</p>
    <p className='card_description'>Type: {props.type}</p></div>
    <button className='card_btn' onClick={rent(props.title) }>{props.button}</button></div>
  )
}

export default Card;