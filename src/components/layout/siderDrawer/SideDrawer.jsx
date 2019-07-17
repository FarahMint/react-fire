import React from 'react';
import "./sideDrawer.css";
import SigninLink from "../navLinks/SigninLink";
import  SignoutLink from "../navLinks/SignoutLink";
import {connect}  from "react-redux";
import {NavLink} from 'react-router-dom';


const SideDrawer = props =>{
  // destructure props object
 const {auth, profile, toggleNavHandler, show} = props

  // if sidebar open add css class
 let drawerClasses= ["side-drawer"];
 if(show){
   drawerClasses=["side-drawer open"]
 }

// Display either link when sign in or signout
  const links = auth.uid ?  <SigninLink profile={profile}/> : <SignoutLink/>

    return(
    <nav className={drawerClasses}>      
        <ul onClick={ toggleNavHandler }>
        {links}
        {/* Add notification for mobile view */}
        { auth.uid && <li><NavLink to="/notifications">notifications
          </NavLink></li>}
        </ul>
    </nav>
    )   
}

const mapStateToProps =(state)=>{
  //  console.log(state)
return{
auth: state.firebase.auth,
profile: state.firebase.profile
}
}
export default connect(mapStateToProps)(SideDrawer);