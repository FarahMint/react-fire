import React from 'react';
 import { 
    Route  
   } from 'react-router-dom';
 import SignIn from "../../auth/SignIn"
 import SignUp from "../../auth/SignUp"
import Overlay from "../overlay/Overlay"


import "./globalForm.css"
export default function GlobalSignForm(props) {
  return (
    <div className={props.isActive ?"container right-panel-active": "container"}
    >
  <Overlay handleSignForm={props.handleSignForm}/>
 <Route path="/signIn"  exact component={SignIn}>
 </Route>
 <Route path="/signUp"  exact component={SignUp}>
 </Route> 
    
    </div>
  )
}
