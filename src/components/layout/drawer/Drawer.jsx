import React from 'react';
import SigninLink from "../navLinks/SigninLink";
import  SignoutLink from "../navLinks/SignoutLink";
import {connect}  from "react-redux";


const Drawer = props =>{
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
export default connect(mapStateToProps)(Drawer);