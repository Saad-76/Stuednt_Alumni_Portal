import {React, useState}  from 'react'
import DashboardNav from './dashboardNav'
import "./employment.css"
import SideBar from './sideBar'

const  Employment=()=> {
    const [data, setData]= useState({
        companyName:"", 
        designation:"",
         startingYear:"",
          endingYear:"",
           city:"",
            country:""

    })
    return (
        <div>
            <DashboardNav/>
            <SideBar/>
<h1 className='employment-heading-style'>Employment</h1>
            <div className="employment-form-style">
      <input
        type="text"
        placeholder="companyName"
        value={data.companyName}
        onChange={(e) => {
          setData({ ...data,  companyName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="designation"
        value={data.designation}
        onChange={(e) => {
          setData({ ...data, designation: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="startingYear"
        value={data.startingYear}
        onChange={(e) => {
          setData({ ...data, startingYear: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="endingYear"
        value={data.endingYear}
        onChange={(e) => {
          setData({ ...data, endingYear: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="city"
        value={data.city}
        onChange={(e) => {
          setData({ ...data, city: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="country"
        placeholder="country"
        value={data.country}
        onChange={(e) => {
          setData({ ...data, country: e.target.value });
        }}
      />{" "}
      <br />
      <br />

      <button>Submit</button>
      </div>  
        </div>
    )
}

export default Employment;
