import React from 'react';
import {NavLink} from 'react-router-dom';

const SignoutLinks =() =>{
  return (
    <React.Fragment>
        <li>
          <NavLink to="/signUp">register</NavLink>
        </li> 
        
      <li>
          <NavLink to="/signIn">login</NavLink>
      </li>
      
    </React.Fragment>
  )
}
export default SignoutLinks;