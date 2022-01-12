import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CoverPage from './CoverPage/coverPage';
import Dashboard from './Dashboard/dashboard';
import Education from './Dashboard/education';
import Employment from './Dashboard/employment';
// import Home from './Dashboard/home';
import Home from './Dashboard/home';
import Job from './Dashboard/job';
import PersonalInfo from './Dashboard/personalInfo';
import Login from "./Login/login"
import SignUp from './SignUp/signUp';

const Routes=()=> {
    return (
        <div>
<Router>
    <Switch>
        <Route exact path="/" ><CoverPage/></Route>
        <Route path="/login"><Login/>
        </Route>
        <Route path="/register"><SignUp/>
        </Route>

        <Route path="/dashboard"><Dashboard/>
        </Route>
        <Route path="/home"><Home/>
        </Route>
        <Route path="/personalinfo"><PersonalInfo/>
        </Route>
        <Route path="/education"><Education/>
        </Route>
        <Route path="/employment"><Employment/>
        </Route>
        <Route path="/job"><Job/>
        </Route>
        <Redirect exact to="/"/>
        </Switch></Router>                
        </div>
    )
}

export default Routes;