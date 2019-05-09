import React from 'react';
import "./sideDrawer.css";
 import SigninLink from "../layout/navLinks/SigninLink";
 import  SignoutLinks from "../layout/navLinks/SignoutLinks";
import {connect}  from "react-redux";
import {
  NavLink
} from 'react-router-dom';


const SideDrawer = props =>{
 let drawerClasses= ["side-drawer"];

 if(props.show){
   drawerClasses=["side-drawer open"]
 }

 const {auth, profile} = props
 
  const links = auth.uid ?  <SigninLink profile={profile}/> : <SignoutLinks/>

 return(
 <nav className={drawerClasses}>      
     <ul onClick={ props.toggleNavHandler }>
     {links}

     { auth.uid && <li>

<NavLink to="/notifications">
notifications
      </NavLink>
</li>}

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