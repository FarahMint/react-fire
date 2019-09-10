import React, {useState} from 'react';
import { Link } from 'react-router-dom';


/**ICON */
import {FaUsers, FaBell} from "react-icons/fa";

/**COMPONENTS */
import ToggleButton from "../drawer/ToggleButton";
import Notifications from '../../dashboard/notifications/Notifications';


// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";


const Navbar = (props) => {
  /**STATE */
  const [showNotif, setShowNotif] = useState(false)
  /** */
  const {auth, profile,notifications, toggleNavHandler , show} = props


  return ( 
    <header className="toolbar">
      <nav className="toolbar__navigation">
        {/*TOGGLE BTN IN SM SCREEN  */}
      <ToggleButton 
      click={toggleNavHandler}
      show ={show} />

         {/*LOGO */}
        <div className="toolbar__logo">
          <Link to="/"> <FaUsers className="logo"/></Link>
        </div>
 
        {auth.uid && 
          <div className="toolbar__badge">
          {/* NOTIF ICON */}
            <span>
              <FaBell 
                onMouseEnter={()=>setShowNotif(!showNotif)}
                onMouseLeave={()=>setShowNotif(false)}
                className="icon-notification"/>

            {(notifications && notifications.length > 0 && showNotif ) ?
            (<Notifications 
              auth={auth} 
              notifications={notifications }/>)
            : null}
            </span>
                   
            {/* BADGE WITH INITIAL */}
            <span
              className="badge" 
              title={`you are log in as ${profile.firstName}`}
              aria-label={profile.firstName}>{profile.initials} 
            </span>
          </div>}
      
        </nav>
    </header> 
  );
};

const mapStateToProps =(state)=>{
return{
auth: state.firebase.auth,
profile: state.firebase.profile,
notifications: state.firestore.ordered.notifications
}
}
export default connect(mapStateToProps)(Navbar);
