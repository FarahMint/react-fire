import React, { Component } from 'react';

import {connect}  from "react-redux";
import {signIn }  from "../../../store/actions/authActions";

import {Redirect} from "react-router-dom";
 


class SignIn extends Component {
    state={
        email:"",
        password:"",
      
    }

  handleChange=(e)=>{
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(this.state)
    this.props.signIn(this.state);
  }

  render() {
  const {authError, auth} =this.props;

 
  
  if(auth.uid) return <Redirect to="/"/>
 
  return (
    <React.Fragment> 
      <div className="form-container sign-in-container">  

     


        <form onSubmit={this.handleSubmit}>
          {/* error notif */}
          <div className=
            {authError  ? "text-danger errors-block": "text-danger"}>
            { authError && <span>{authError}</span>}
          </div>
          {/* error notif */}

        <div className="form-group auth">
        <label htmlFor="email_login" hidden>email</label>
        <input 
        type="email"  
        id="email_login" 
        name="email"
          placeholder="Enter email"
          className="form-control" 
          onChange={this.handleChange}
          /> 
          </div>
          {/* DIV FORM GROUP */}
          <div className="form-group auth">
        <label htmlFor="password_login" hidden>password</label>
        <input 
        type="password"
          id="password_login" 
          name="password" 
          placeholder="Enter password"
          className="form-control" 
          onChange={this.handleChange}
          /> 
        </div>
          
          <button type="submit" className="btn-primary">Sign in</button>
      </form>
    </div>

  </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
return {
 
  authError: state.auth.authError,
  auth: state.firebase.auth
}
}
const mapDispatchToProps = (dispatch)=>{
return {
  /**
   * dispatch action creator imported above
   * from "../../store/actions/authActions
   */
  signIn: (credentials)=> dispatch(signIn(credentials)),
  
}
}

export default connect( mapStateToProps , mapDispatchToProps)(SignIn) 