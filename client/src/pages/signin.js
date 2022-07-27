import react, { useState } from 'react';
import '../styles/signin.css';
import profile from "./../images/a.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";
import Axios from 'axios'



function SignIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    if(username===""||password===""){
      window.alert("enter proper credentials");
    }
    else
    {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password
      }).then((response) => {
        console.log(response.data);
        if(response.data.length===0){
          window.alert("enter proper credentials");
        }
        else{
          window.location.href = 'signin/profile';
        }
      });
    }
    
  };

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name" onChange={(e) => {setUsername(e.target.value)}} />
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name" onChange={(e) => {setPassword(e.target.value)}} />
           </div>
          <div className="login-button">
          <button onClick={login}>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> 
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default SignIn;