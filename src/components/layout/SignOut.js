import React from 'react';
import {
   NavLink
} from 'react-router-dom';
const SignOut = () => {
    return ( 
    <React.Fragment>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item px-2">
          <NavLink to="/signUp">SignUp</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink to="/signIn">Login</NavLink>
        </li>
        </ul>
 
      
      </React.Fragment>
     
      
    );
};
export default SignOut;