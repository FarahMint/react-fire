import React, {Component} from 'react';
import {
   NavLink
} from 'react-router-dom';

import {FaPlus} from "react-icons/fa"

import {connect}  from "react-redux";
import {signOut}  from "../../store/actions/authActions";


class SigninLink extends Component {
  render(){
    return ( 
    <React.Fragment>  
        <li  className="nav-item">
          <NavLink to="/">Dashboard</NavLink>
        </li>  
        <li  className="nav-item">
          <NavLink to="/create">
          <FaPlus className="icon__create" title="create a project"/>
          </NavLink>
        </li>  
        
      <li className="nav-item">
          <NavLink to="/signIn" onClick={this.props.signOut}>log out</NavLink>
      </li>
         
        <li className="nav-item avatar">
        {/* <NavLink to="/"  className="nav-link p-0"
        >
          <span className="badge"
         >{this.props.profile.initials}</span>
        </NavLink> */}
      </li> 
      </React.Fragment>  
    );
};
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