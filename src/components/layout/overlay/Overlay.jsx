import React from 'react'
 import { Link } from 'react-router-dom';
import { FaGrinBeam , FaGrinStars} from "react-icons/fa"

export default function Overlay(props) {
  return (
    <div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back <FaGrinStars/> </h1>
            <p>To keep connected with us please login.</p>
          <Link to="/signIn">
          <button className="ghost" id="sign-in" onClick={props.handleSignForm}>sign in</button> 
          </Link>
              
             
        </div>
        <div className="overlay-panel overlay-right">
            <h1>Hello Friend  <FaGrinBeam/></h1>
            <p>Enter your email and start your journey.</p>
            <Link to="/signUp">  <button className="ghost" id="sign-up" onClick={props.handleSignForm}>sign up</button> </Link>        
        </div>
    </div>
</div>
  )
}
