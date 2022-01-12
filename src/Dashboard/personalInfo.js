import  {React, useState}  from 'react'
import DashboardNav from './dashboardNav';
import SideBar from './sideBar';
import "./personalInfo.css"

const  PersonalInfo=()=> {
    const[user,setUser]= useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        batch: "",
        rollNo: "",
        department: "",
        linkedin: "",
        gender: "",
        phoneNo: "",
        birthDate: "",
        address: "",
        country: "",
        
    })
    return (
        <div>
            <DashboardNav/>
            <SideBar/>
<h1 className='personal-info-heading-style'>Personal Information</h1>
            <div className="personal-info-form-style">
          <input
            type=""
            placeholder="name"
            value={user.userName}
            onChange={(e) => {
              setUser({ ...user, userName: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="email"
            value={user.userEmail}
            onChange={(e) => {
              setUser({ ...user, userEmail: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="password"
            value={user.userPassword}
            onChange={(e) => {
              setUser({ ...user, userPassword: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="batch"
            value={user.batch}
            onChange={(e) => {
              setUser({ ...user, batch: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="rollNo"
            value={user.rollNo}
            onChange={(e) => {
              setUser({ ...user, rollNo: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="department"
            value={user.department}
            onChange={(e) => {
              setUser({ ...user, department: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="Linkedin"
            value={user.linkedin}
            onChange={(e) => {
              setUser({ ...user, linkedin: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="gender"
            value={user.gender}
            onChange={(e) => {
              setUser({ ...user, gender: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="Phone No"
            value={user.phoneNo}
            onChange={(e) => {
              setUser({ ...user, phoneNo: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="address"
            value={user.address}
            onChange={(e) => {
              setUser({ ...user, address: e.target.value });
            }}
          />
           <br />
          <input
            type=""
            placeholder="birthDate"
            value={user.birthDate}
            onChange={(e) => {
              setUser({ ...user, birthDate: e.target.value });
            }}
          />
          <br />
          <input
            type=""
            placeholder="country"
            value={user.country}
            onChange={(e) => {
              setUser({ ...user, country: e.target.value });
            }}
          />
          <br />
          <br />

      
        </div>
        </div>
    )
}

export default PersonalInfo;
