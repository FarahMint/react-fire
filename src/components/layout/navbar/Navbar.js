import React from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";
import DrawerToggleButton from "../siderDrawer/DrawerToggleButton";

import {FaUsers} from "react-icons/fa"
import SigninLink from "../navLinks/SigninLink";
// import SignOut from "./SignOut";
// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

const Navbar = (props) => {

  const {auth, profile,notifications} = props
 
  const links = auth.uid ?  <SigninLink 
  profile={profile} 
  notifications={notifications}/> : null
  return ( 
<header className="toolbar">
      <nav className="toolbar__navigation">
      <DrawerToggleButton 
      click={props.toggleNavHandler}
      show ={props.show} />
          <div className="toolbar__logo">
          <Link to="/"> <FaUsers/></Link>
              </div>
              <div className="spacer"></div>
              <div className="toolbar_navigation-items">
              <ul>

                    {links}
              </ul>
              
              </div>
            
        </nav>
    </header> 
  );
};

const mapStateToProps =(state)=>{
  //  console.log(state)
return{
auth: state.firebase.auth,
profile: state.firebase.profile,
notifications: state.firestore.ordered.notifications
}
}
export default connect(mapStateToProps)(Navbar);
