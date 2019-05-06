import React from 'react';
import {
   NavLink
} from 'react-router-dom';

import {FaPlus } from "react-icons/fa"
import {connect}  from "react-redux";
import {signOut}  from "../../store/actions/authActions";


const SignIn = (props) => {
    return ( 
    <React.Fragment>
        <ul>  
        <li className="nav-item">
          <NavLink to="/">
          dashboard
          </NavLink>
          </li>
          <li>   
            <NavLink to="/create">
          <FaPlus className="icon__create" title="create a project"/>
          </NavLink></li>
       
        
        <li className="nav-item">
        <NavLink to="/" onClick={props.signOut}>
          Logout
          </NavLink>
               </li>
        
         
        <li className="nav-item avatar">
        <NavLink to="/" className="nav-link p-0">

  

          <span className="badge"
         >{props.profile.initials}</span>
        </NavLink>
      </li>
      </ul>
      
      </React.Fragment>
     
      
    );
};

const mapDispatchToProps = (dispatch) =>{
 return {
    /**
   * dispatch action creator imported above
   * from "../../store/actions/authActions
   */
   signOut: ()=>{dispatch(signOut())}
 }
}
export default connect(null, mapDispatchToProps)(SignIn);