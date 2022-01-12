import { React, useState } from "react";
import DashboardNav from "./dashboardNav";
import "./education.css";
import SideBar from "./sideBar";

const Education = () => {
  const [data, setData] = useState({
    degreeName: "",
    institute: "",
    passingYear: "",
    cgpa: "",
    country: "",
    majorSubject: "",
  });
  return (
    <div>
        <DashboardNav/>
        <SideBar/>
        <h1 className="education-form-heading">Education</h1>
        <div className="education-form-style">
      <input
        type="text"
        placeholder="Degree Name"
        value={data.degreeName}
        onChange={(e) => {
          setData({ ...data, degreeName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Institute"
        value={data.institute}
        onChange={(e) => {
          setData({ ...data, institute: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Passing Year"
        value={data.passingYear}
        onChange={(e) => {
          setData({ ...data, passingYear: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="CGPA"
        value={data.cgpa}
        onChange={(e) => {
          setData({ ...data, cgpa: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Country"
        value={data.country}
        onChange={(e) => {
          setData({ ...data, country: e.target.value });
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="majourSubject"
        value={data.majorSubject}
        onChange={(e) => {
          setData({ ...data, majorSubject: e.target.value });
        }}
      />{" "}
      <br />
      <br />

      <button>Submit</button>
      </div>
    </div>
  );
};

export default Education;
