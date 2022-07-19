import '../styles/signin.css';
import profile from "./../images/a.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";
import {Link} from 'react-router-dom'

function SignIn() {
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
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button"><Link to = '/signin/profile'>
          <button>Login</button></Link>
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