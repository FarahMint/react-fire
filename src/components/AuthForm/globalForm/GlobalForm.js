import React from 'react';
/**COMPONENTS */
import Overlay from "./Overlay";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";


const GlobalSignForm= (props) => (
  <section className="auth__form">
    <div className="forms">
    <Overlay {...props}/>
    {props.isActive ? <SignUp/> : <SignIn/>}
    </div>
  </section>
);

export default  GlobalSignForm;
