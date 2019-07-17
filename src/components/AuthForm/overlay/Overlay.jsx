import React
//  , { useState}
 from 'react';
// import { Link } from 'react-router-dom';
import { FaGrinBeam , FaGrinStars} from "react-icons/fa";

const Overlay=(props) => {
  // const [isActive, setActive]= useState(false);


  return(
    
<div className=
{props.isActive ?"container right-panel-active": "container"}
>
  <div className="overlay-container">
          {/* overlay*/}
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back <FaGrinStars/> </h1>
        <p>To keep connected with us please login.</p>
        {/* <Link to="/login"> */}
          <button className="ghost" id="sign-in" 
           onClick={props.handleAuthForm}>sign in</button> 
        {/* </Link>       */}
      </div>
      {/* end overlay-left */}

      <div className="overlay-panel overlay-right">
        <h1>Hello Friend  <FaGrinBeam/></h1>
        <p>Enter your email and start your journey.</p>
        {/* <Link to="/register"> */}
          <button className="ghost" id="sign-up" 
           onClick={props.handleAuthForm}>sign up</button> 
        {/* </Link>         */}
      </div>
      {/* end overlay-right */}
    </div>
      {/* end overlay*/}
  </div>


</div>
  


  );
}

export default  Overlay;
