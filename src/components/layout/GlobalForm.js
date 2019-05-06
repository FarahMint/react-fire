import React from 'react'
import SignIn from "../auth/SignIn"
import SignUp from "../auth/SignUp";
import Overlay from "./Overlay";



export default function GlobalForm() {
  return (
  
      <div class="container" id="container">
      <SignIn />
      <SignUp />
      <Overlay/>
      
      
      </div>
   
  )
}
