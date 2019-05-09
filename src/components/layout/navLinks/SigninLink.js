import React, {Component} from 'react';
import {
   NavLink
} from 'react-router-dom';

// import {FaPlus} from "react-icons/fa"

import {connect}  from "react-redux";
import {signOut}  from "../../../store/actions/authActions";


class SigninLink extends Component {
  
  render(){
    return ( 
    <React.Fragment>  

          <li> 
       <span className="badge" 
       title={`you are log in as ${this.props.profile.firstName}`}
       aria-label={this.props.profile.firstName}>{this.props.profile.initials} </span>
      
      </li> 


        <li>
          <NavLink to="/create">
create

          </NavLink>
        </li>  

        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li> 
        
      <li>
          <NavLink to="/signIn" onClick={this.props.signOut}>logout</NavLink>
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