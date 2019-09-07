import React, {useState} from 'react';
import { Link } from 'react-router-dom';


/**ICON */
import {FaUsers, FaBell} from "react-icons/fa";

/**COMPONENTS */
import DrawerToggleButton from "../siderDrawer/DrawerToggleButton";
// import SigninLink from "../navLinks/SigninLink";
// import SignoutLink from "../navLinks/SignoutLink";
import Notifications from '../../dashboard/notifications/Notifications';


// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

/**CSS */
import "./navbar.css";

const Navbar = (props) => {
  /**STATE */
  const [showNotif, setShowNotif] = useState(false)
  const {auth,
    //  profile,notifications
    } = props
 
  /** LINKS ACCORDING TO LOGIN STATUS*/
  // const links = auth.uid ?  <SigninLink 
  // profile={profile}
  // notifications={notifications}/> : <SignoutLink />

  return ( 
    <header className="toolbar">
      <nav className="toolbar__navigation">
        {/*TOGGLE BTN IN SM SCREEN  */}
      <DrawerToggleButton 
      click={props.toggleNavHandler}
      show ={props.show} />

         {/*LOGO */}
        <div className="toolbar__logo">
          <Link to="/"> <FaUsers className="logo"/></Link>
        </div>
 
        {/* <div className="spacer"></div> */}

        {/* NAVIGATIONS */}
        {/* <div className="toolbar_navigation-items">
          <ul>{links}</ul>
        </div> */}

        {auth.uid && 
          <div className="toolbar__badge">
          {/* NOTIF ICON */}
            <span>
              <FaBell 
                onMouseEnter={()=>setShowNotif(!showNotif)}
                onMouseLeave={()=>setShowNotif(false)}
                className="icon-notification"/>

            {(props.notifications && props.notifications.length > 0 && showNotif ) ?
            (<Notifications notifications={props.notifications }/>)
            : null}
            </span>
                   
            {/* BADGE WITH INITIAL */}
            <span
              className="badge" 
              title={`you are log in as ${props.profile.firstName}`}
              aria-label={props.profile.firstName}>{props.profile.initials} 
            </span>
          </div>}
      
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
