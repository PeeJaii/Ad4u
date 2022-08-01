import React,{ useState } from 'react'
import '../styles/adspace.css'
import Axios from 'axios'
import img1 from '../images/h_img.png'

const Adspace = () => {
  const [title , setTitle] = useState('');
    const [location , setLocation] = useState('');
    const [image , setImage] = useState('');
    const [type , setType] = useState('');
    const [price, setPrice] = useState('');
    const id = localStorage.getItem('id');
 
    const handleTitleChange =(e)=>{
      setTitle(e.target.value);
    }
    const handleLocationChange =(e)=>{
      setLocation(e.target.value);
    }
    const handleImageChange =(e)=>{
      setImage(e.target.value);
    }

    const handleTypeChange =(e)=>{
      setType(e.target.value);
    }

    const handlePriceChange =(e)=>{
      setPrice(e.target.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      Axios.post("http://localhost:3001/adspace", {
        id: id,
        title: title,
        location: location,
        type: type,
        image: image,
        price: price,
      })
      .then((response) => {
        setPrice('');
        setImage('');
        setLocation('')
        setTitle('')
        setType('')
        window.location.reload(false);
      })
    }
  return (
    
    <div className="App">
    <header className="App-header">
    <form className='frm'>
    <h2> AD4U </h2>
    <h3> Adspace Upload Form </h3>
    <img className='ima' src={img1} />
        <label >
          TITLE:
        </label><br/>
        <input type="text" value={title} required onChange={(e) => {handleTitleChange(e)}} /><br/>
        <label >
          LOCATION:
        </label><br/>
        <input type="text" value={location} required onChange={(e) => {handleLocationChange(e)}} /><br/>
        <label>
          IMAGE:
        </label><br/>
        <input type="text" value={image} required onChange={(e) => {handleImageChange(e)}} /><br/>
        <label>
          TYPE:
        </label><br/>
        <input type="text" value={type} required onChange={(e) => {handleTypeChange(e)}} /><br/>
        <label>
          PRICE:
        </label><br/>
        <input type="text" value={price} required onChange={(e) => {handlePriceChange(e)}} /><br/>
        <button className="pad buto" onClick={(e) => {handleSubmit(e)}}>Submit</button>
      </form>
    </header>
    </div>
  );
}

export default Adspace