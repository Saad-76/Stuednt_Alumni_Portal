import { React } from "react";
import "./dashboardNav.css";
import {  useHistory } from "react-router-dom";
import Logo from "../Assests/Logo.jpg";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const history = useHistory();

  const handleLogOut = () => {
    history.push("./login");
  };
  return (
    <>
     <div className="main-data">
        <div className="header-nav-style">
         <Link to="/">  <img src={Logo} alt="logo" height="75px" width="75px" /></Link>
          <p className="image-text">
            IUB Telecom <br />
            <span>Alumni Portal</span>
          </p>
        </div>

        <div className="header-style">
         <button className="logout-button" onClick={handleLogOut} >
            LogOut
          </button>

        </div>
      </div>
      

      
   
      
    
    </>
  );
};
export default DashboardNav;
