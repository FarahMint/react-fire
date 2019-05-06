import React from 'react'
 import { Link } from 'react-router-dom';

export default function Overlay(props) {
  return (
    <div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your personal info</p>
          <Link to="/signIn">
          <button className="ghost" id="sign-in" onClick={props.handleSignForm}>sign in</button> 
          </Link>
              
             
        </div>
        <div className="overlay-panel overlay-right">
            <h1>Hello Friend</h1>
            <p>Enter your personal details and start your journey with us.</p>
            <Link to="/signUp">  <button className="ghost" id="sign-up" onClick={props.handleSignForm}>sign up</button> </Link>
            
           
        </div>
    </div>
</div>
  )
}
