import React from 'react'
import '../styles/card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card_body'>
            <img src ='https://image.shutterstock.com/image-photo/billboard-large-blank-empty-screen-260nw-1287227245.jpg' className='card_image'></img>
            <h2 className='card_title'>{props.title}</h2>
    <p className='card_description'>{props.location}</p></div>
    <button className='card_btn'>Rent</button></div>
  )
}

export default Card;