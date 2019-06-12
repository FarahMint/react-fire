import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect}  from "react-redux";
import {signOut}  from "../../../store/actions/authActions";


const SigninLink = (props)=>  {
    return ( 
    <React.Fragment>  
          <li> 
            <span
              className="badge" 
              title={`you are log in as ${props.profile.firstName}`}
              aria-label={props.profile.firstName}>{props.profile.initials} 
            </span>
          </li> 
          <li>
            <NavLink to="/create">create</NavLink>
          </li>  

          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li> 
          
        <li>
            <NavLink to="/signIn" onClick={props.signOut}>logout</NavLink>
        </li>
      </React.Fragment>  
    )
  }


const mapDispatchToProps = (dispatch) =>{
 return {
    /**
   * dispatch action creator imported above
   * from "../../store/actions/authActions
   */
   signOut: ()=>{dispatch(signOut())}
 }
}
export default connect(null, mapDispatchToProps)(SigninLink);