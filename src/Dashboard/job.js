import {React, useState}  from 'react'
import DashboardNav from './dashboardNav'
import SideBar from './sideBar'
import "./job.css"

const Job=()=> {
    const [data, setData]= useState({
        jobTitle:"",
         jobDescription:"",
          companyName:"",
           companydescription:"",
            country:""

    })
    return (
        <div>
             <DashboardNav/>
            <SideBar/>
<h1 className='job-heading-style'>New Job</h1>
            <div className="job-form-style">
      <input
        type="text"
        placeholder="jobTitle"
        value={data.jobTitle}
        onChange={(e) => {
          setData({ ...data,  jobTitle: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="jobDescription"
        value={data.jobDescription}
        onChange={(e) => {
          setData({ ...data, jobDescription: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="companyName"
        value={data.companyName}
        onChange={(e) => {
          setData({ ...data, companyName: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="companydescription"
        value={data.companydescription}
        onChange={(e) => {
          setData({ ...data, companydescription: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
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

export default Job;
