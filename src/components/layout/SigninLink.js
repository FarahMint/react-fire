import React, {Component} from 'react';
import {
   NavLink
} from 'react-router-dom';

import {FaPlus} from "react-icons/fa"

import {connect}  from "react-redux";
import {signOut}  from "../../store/actions/authActions";


class SigninLink extends Component {
  state = {
      isHovering: false,
    };
    toggleHoverNav = ()=>{
      this.setState((prevState)=>({
         isHovering: !prevState.isHovering
      }))
    }
  
  render(){
    return ( 
    <React.Fragment>  
         
        <li  className="nav-item">
          <NavLink to="/create"
                     onMouseEnter={this.toggleHoverNav}
                     onMouseLeave={this.toggleHoverNav}
                    >
                     <React.Fragment>
          <FaPlus className="icon__create" title="create a project"/>

          {this.state.isHovering && <span className="tool__tips">Create a project</span>}
          </React.Fragment>
          </NavLink>
        </li>  

        <li  className="nav-item">
          <NavLink to="/">Dashboard</NavLink>
        </li> 
        
      <li className="nav-item">
          <NavLink to="/signIn" onClick={this.props.signOut}>log out</NavLink>
      </li>
         
        <li className="nav-item avatar">
        <NavLink to="/"  className="nav-link p-0"
        >
          <span className="badge"
         >{this.props.profile.initials}</span>
        </NavLink>
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