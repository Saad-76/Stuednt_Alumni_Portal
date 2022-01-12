import React from 'react'
import "./sideBar.css"
import { Link } from 'react-router-dom'

const SideBar=()=> {
    return (
        <div>
            
            <div className="siderbar_style">
                {/* <h1>Your Profile</h1> */}
        <header className="sidebar_nav_style">
        <div className="sidebar_border">
            <Link to="/home">Home</Link>
          </div>
          <div className="sidebar_border">
            <Link to="/personalinfo">Personal Information</Link>
          </div>
          <div className="sidebar_border">
            <Link to="/education">Education</Link>
          </div>
        
        
          <div className="sidebar_border">
            <Link to="/employment">Employment</Link>
          </div>

          <div className="sidebar_border">
            <Link to="/job">New Job</Link>
          </div>
          {/* <div className="sidebar_border">
            <Link to="">Buy N Ship Shipments</Link>
          </div>
          <div className="sidebar_border">
            <Link to="">Shipment Tracking </Link>
          </div> */}
        </header>
      </div>


        </div>
    )
}

export default SideBar;
