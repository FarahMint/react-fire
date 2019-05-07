import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";
 

 class SignUp extends Component {
    state={
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }

   handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value,
           
        })
    
    }
     handleSubmit=(e)=>{
        e.preventDefault();
      //console.log(this.state)
      this.props.signUp(this.state)
    
    }
  render() {

    const { auth, authError} = this.props;
    if(auth.uid) return <Redirect to="/"/>
    return (
      <React.Fragment>
      <div className="form-container sign-up-container">        
<form onSubmit={this.handleSubmit}>
 <div className="form-group auth">
  
 <label htmlFor="firstName" hidden>firstName</label>
 <input 
 type="firstName"  
 id="firstName" 
 name="firstName"
   placeholder="Enter your first Name"
   onChange={this.handleChange}
   /> 
 <label htmlFor="lastName" hidden>last Name</label>
 <input 
 type="lastName"  
 id="lastName" 
 name="lastName"
   placeholder="Enter your last Name"
   onChange={this.handleChange}
   /> 
 <label htmlFor="email_register" hidden>email</label>
 <input 
 type="email"  
 id="email_register" 
 name="email"
   placeholder="Enter email"
   onChange={this.handleChange}
   /> 
 <label htmlFor="password_register" hidden>password</label>
 <input 
 type="password"
  id="password_register" 
  name="password" 
   placeholder="Enter password"
   onChange={this.handleChange}
   /> 
 
 </div>
   
  <button type="submit" className="btn-primary">Sign Up</button>
      <div className="text-danger text-center">
    { authError ? 
    <p >{authError}</p>
  : null
  }
      </div>
</form>
 </div>
 </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
     auth: state.firebase.auth,
     authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (newUser)=>dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 
