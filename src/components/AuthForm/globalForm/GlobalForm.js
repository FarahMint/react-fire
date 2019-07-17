import React from 'react';
//  import { Route } from 'react-router-dom';

import Overlay from "../overlay/Overlay";
  import SignIn from "../auth/SignIn";
  import SignUp from "../auth/SignUp";

import "./globalForm.css";


const GlobalSignForm= (props) => (
<section className="globalForm">
  <Overlay {...props}/>
  {props.isActive ? <SignUp/> : <SignIn/>}
  
 {/* <Route exact path="/login" component={SignIn}></Route>
  <Route exact path="/register" component={SignUp}></Route>  */}
</section>
    );

export default  GlobalSignForm;
