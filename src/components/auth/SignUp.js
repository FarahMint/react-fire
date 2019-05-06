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
         
      <div className="form-container sign-up-container">
      <form onSubmit={this.handleSubmit}>
          <h1>create an account</h1>
        
          
          <label htmlFor="firstName" hidden>firstName</label>  
          <input 
          type="text"
          name="firstName"
          placeholder="first Name" 
          value={this.state.firstName}
          onChange={this.handleChange}
          />
          
          <label htmlFor="lastName" hidden>lastName</label>  
          <input 
          type="text"
          name="lastName"
          placeholder="last Name" 
          value={this.state.lastName}
          onChange={this.handleChange} 
          />


<label htmlFor="email" hidden>email</label>
      <input 
      type="email" 
      placeholder="Email"
      value={this.state.email}
      onChange={this.handleChange}
       />

          <label htmlFor="password" hidden>password</label>
          <input type="password" placeholder="Password" 
           value={this.state.password}
           onChange={this.handleChange}
           />
          <button>sign up</button>

          { authError ? 
    <p >{authError}</p>
  : null
  }

      </form>
  </div>
 
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
