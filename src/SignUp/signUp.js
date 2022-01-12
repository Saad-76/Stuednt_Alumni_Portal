import { React, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./signUp.css";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const history= useHistory();
  const [user, setUser] = useState({
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
  });
const handleRegister=()=>{
 history.push("./login");
}
  return (
    <div>
      <div className="background-image-signup">
      <div className="signup-form-style">
        <h1>Register to IUB alumni portal </h1>
        <Link to="/login">

          <button>Already Register</button>
        </Link>
        <div className="form-input">
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

          <button onClick={handleRegister} > Register</button>
          <p>Resend Verify Email</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
