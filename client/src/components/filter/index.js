import React, {useState} from 'react'
import '../../styles/filter.css'
import {
    Nav,
    Bars,
    NavMenu,
    NavBtn
  } from './NavbarElements';
  
  const Filter = (props) => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    const filt = () =>{;
      props.setAd(props.data.filter((l)=>{
        if(location===""){
          if(type==="")
          {return true;}
          else{
            return l.type.startsWith(type)
          }
        }
        else{
          if(type===""){
        return l.location.startsWith(location)
      }
      else{
        return l.location.startsWith(location)&&l.type.startsWith(type)
      }
        }
      }));
      
    }
    
    return (
      <>
        <Nav>
        <div className='fil'>
          <b>FILTER</b>
        </div>
          <Bars />
          <NavMenu>
            <input type="text" placeholder="Location" className='fil' onChange = {(e) => {setLocation(e.target.value)}}/>
            <input type="text" placeholder="Type" className='fil' onChange = {(e) => {setType(e.target.value)}}/>
          </NavMenu>
          <NavBtn className='btn' onClick={filt}>
          Search
        </NavBtn>
        </Nav>
      </>
    );
  };

export default Filter;