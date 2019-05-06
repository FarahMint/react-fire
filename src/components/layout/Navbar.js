import React from 'react';
import { Link } from 'react-router-dom';

import {FaUsers} from "react-icons/fa"
import SigninLink from "./SigninLink";
// import SignOut from "./SignOut";
// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

const Navbar = (props) => {

  const {auth, profile} = props
 
  const links = auth.uid ?  <SigninLink profile={profile}/> : null
  return ( 
      <nav className="navbar"
      >
      <span  className="nav-brand">
          <Link to="/"> <FaUsers/></Link></span>
      <ul>
    
       {links}
      </ul>
  
      </nav>
    
  );
};

const mapStateToProps =(state)=>{
  //  console.log(state)
return{
auth: state.firebase.auth,
profile: state.firebase.profile
}
}
export default connect(mapStateToProps)(Navbar);
