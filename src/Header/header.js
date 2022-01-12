import React from "react";
import Logo from "../Assests/Logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Header = () => {
    const history= useHistory();
    const loginHandler=()=>{
        history.push("/login");
    }
    
  return (
    <>
      <div className="main-data-header">
        <div className="header-nav-style">
          <img src={Logo} alt="logo" height="75px" width="75px" />
          <p className="image-text">
            IUB Telecom <br />
            <span>Alumni Portal</span>
          </p>
        </div>

        <div className="header-style">
         <button className="login-button" onClick={loginHandler} >
            Login
          </button>
       <Link to="/register">   <p className="register-button" href="">Register</p></Link>

        </div>
      </div>
    </>
  );
};

export default Header;
