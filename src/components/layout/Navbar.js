import React from 'react';
//import { Link } from 'react-router-dom';
import SignIn from "./SignIn";
import SignOut from "./SignOut";
// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

import {FaUsers } from "react-icons/fa"
const Navbar = (props) => {

  const {auth, profile} = props
//   console.log(auth);
  const links = auth.uid ?  <SignIn profile={profile}/> :<SignOut/>
  return ( 
      <nav 
      className="navbar">
      <span className="nav-brand">
          <a href="/">
          <FaUsers/>
          </a>
      </span>
       {links}
      </nav>
    
  );
};

const mapStateToProps =(state)=>{
    // console.log(state)
return{
auth: state.firebase.auth,
profile: state.firebase.profile
}
}
export default connect(mapStateToProps)(Navbar);
