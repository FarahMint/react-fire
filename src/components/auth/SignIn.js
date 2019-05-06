import React, { Component } from 'react';

import {connect}  from "react-redux";
import {signIn}  from "../../store/actions/authActions";

import {Redirect, Link} from "react-router-dom";

class SignIn extends Component {
    state={
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
     // console.log(this.state)
     this.props.signIn(this.state);
    
    }
  render() {

    const { authError, auth} =this.props;
    if(auth.uid) return <Redirect to="/"/>
    return (
      <div className="form-container sign-in-container">
      <form onSubmit={this.handleSubmit}>
          <h1>Sign in</h1>
          <label htmlFor="email">email</label>
              <input
               type="email"   
               id="email" 
               name="email"
               value={this.state.email}
                 placeholder="Enter email"
                 onChange={this.handleChange}
                />

<label htmlFor="password">email</label>
            <input 
              type="password"
              id="password" 
              name="password" 
               placeholder="Enter password"
               value={this.state.password}
               onChange={this.handleChange}
              
              />
              <Link to="/">forgot your password</Link>
              <button>sign in</button>

              { authError ? 
(<p>{authError}</p>)
:(null)
}
      </form>
  </div>
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
  signIn: (credentials)=> dispatch(signIn(credentials))
}
}

export default connect( mapStateToProps , mapDispatchToProps)(SignIn) 




