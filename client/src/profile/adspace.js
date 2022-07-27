import React,{ useState } from 'react'
import ReactDOM from 'react-dom';
import '../styles/adspace.css'
import Axios from 'axios'

const Adspace = () => {
  const [title , setTitle] = useState('');
    const [location , setLocation] = useState('');
    const [image , setImage] = useState('');
 
    const handleTitleChange =(e)=>{
      setTitle(e.target.value);
    }
    const handleLocationChange =(e)=>{
      setLocation(e.target.value);
    }
    const handleImageChange =(e)=>{
      setImage(e.target.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();

      Axios.post("http://localhost:3001/adspace", {
        title: title,
        location: location,
        image: image
      }).then((response) => {
        console.log(response);
      });
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form className='frm'>
    <h2> AD4U </h2>
    <h3> Adspace Upload Form </h3>
    <img className='ima' src="/gfg.png" />
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
        <button className="pad" onClick={(e) => {handleSubmit(e)}}>Submit</button>
      </form>
    </header>
    </div>
  );
}

export default Adspace