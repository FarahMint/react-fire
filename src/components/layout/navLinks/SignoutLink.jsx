import React from 'react';
import {NavLink} from 'react-router-dom';

const SignoutLinks =() =>{
  return (
    <React.Fragment>
        <li>
          <NavLink to="/auth" className="cta-btn">Get Started</NavLink>
        </li> 
        
      {/* <li>
          <NavLink to="/auth">login</NavLink>
      </li> */}
      
    </React.Fragment>
  )
}
export default SignoutLinks;