import React from "react";
import "./coverPage.css"
// import ProfileImage from "../Assests/ProfileImage.jpeg";
import MainImage from "../Assests/MainImage.jpg";
import Header from "../Header/header";
import {AiFillLinkedin, AiFillFacebook} from "react-icons/ai"
import {FaBlog} from "react-icons/fa"
// import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
    <>
    <Header/>

      <h1 className="coverpage-heading-style">Department of Information and Communication Engineering</h1>

      <div className="col-md-12 row coverpage-Content">
        <div className="col-md-6  coverpage-text">
          <h1>Dr. Muhammad Ali Qureshi</h1>
          <h6>Ph.D. Electrical Engineering</h6>
          <h2>Associate Professor / Chairman</h2>
          <p>Department of Information and Communication Enhgineering</p>
          <p>The Islamia University of Bahawalpur, Pakistan</p>
          <p> ali.qureshi@iub.edu.pk</p>
          <p>Chair, IEEE Bahawalpur Subsection</p>
          <p>IEEE Senior Member</p>
          <p>ali.qureshi@ieee.org</p>
          <p> <AiFillLinkedin size={30} className="ml-4"/>  <AiFillFacebook size={30} className="ml-4"/> <FaBlog size={30} className="ml-4"/> </p>
        </div>
        <div className="col-md-6 coverpageimage">
          <img src={MainImage} alt="profile" height="400px" width="400px" />
        </div>
      </div>
    </>
  );
};

export default CoverPage;
