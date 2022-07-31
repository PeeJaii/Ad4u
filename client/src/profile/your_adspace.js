import React from 'react'
import '../styles/your_adspace.css'
import Cards from '../components/card'

const yourAdspace = () => {
  return (
    <div><div className='post'>
        Adspaces Posted</div>
        <div className='wrapper'><Cards /></div>
        <div className='post'>
            Adspaces Rented</div>
            <div className='wrapper'><Cards /></div></div>
  )
}

export default yourAdspace