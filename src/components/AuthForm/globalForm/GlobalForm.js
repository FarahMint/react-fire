import React from 'react';
/**COMPONENTS */
import Overlay from "../overlay/Overlay";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
/**CSS */
import "./globalForm.css";


const GlobalSignForm= (props) => (
  <section className="auth__form">
    <Overlay {...props}/>
    {props.isActive ? <SignUp/> : <SignIn/>}
  </section>
);

export default  GlobalSignForm;
