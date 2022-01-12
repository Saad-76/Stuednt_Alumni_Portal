import  {React, useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./login.css";
import Logo from "../Assests/Logo.jpg"

const Login = () => {
  const history= useHistory();
    const[user, setUser]= useState({
        email:"",
        password:""
    })
    const handleLogin=()=>{
      history.push("./dashboard");
    }
  return (
    <>
    {/* <div className="background-image-login"> */}
    <div className="col-md-12 row login-divs">
    <div className="col-md-6 login-text">
        <h4 className="login-form-heading">  Welcome to the IUB Alumni Network</h4>
        <img className="login-image" src={Logo} alt="logologin" height="200px" width="200px"/>
       <div className="logo-bottom-text">
        <h6>Directorate of Alumni Affairs</h6>
        <h6>The Islamia University of Bahawalpur, Pakistan</h6>
        </div>
     <Link to="/register">   <button className="register-button-loginForm">Register Now!</button> </Link>
      </div>
    <div className="col-md-6" >
         
           <div> <h3 className="login-fields-heading">Login to your Account</h3></div>
       <div className="login-input-fiedls"> 
          <input className="input-email-login" type="email" placeholder="Email" value={user.email} onChange={(e)=>{
              setUser({...user, email:e.target.value})
          }} /> <br/>
          <input className="input-password-login" type="password" placeholder="Password" value={user.password} onChange={(e)=>{
              setUser({...user, password:e.target.value})
          }} /></div>
          <br/>
          <button  className="login-button-style" onClick={handleLogin}>Login</button>
        
        <div className="forget-password">  <p>Forgot Password</p></div>
          <p className="have-account">
            Don’t you have an account?
            </p>
            <p className="register-now"><Link to="/register"> Register Now! </Link>
            </p>
            <p className="bottom-text-login">It’s really simple and
            become part of IUB Alumni Network!
          </p>
          
        </div>

    </div>
    
   
      {/* </div> */}

    
    </>
  );
};

export default Login;
