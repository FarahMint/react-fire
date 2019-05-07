import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard"
import CreateProject from "./components/projects/CreateProject"
import UpdateProject from "./components/projects/UpdateProject"
import ProjectDetails from "./components/projects/ProjectDetails"
 


import GlobalForm from "./components/auth/GlobalForm";


// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

class App extends Component {
 state ={
    isActive: false
 }
  handleSignForm = ()=>{
    this.setState((prevState)=>({
      isActive: !prevState.isActive
    }))
  }
  render() {
    // console.log(this.props)
    const {auth} = this.props;
    return (
     
      <BrowserRouter>
   
          <Navbar />

          <div className="app__container">
          {!auth.uid &&
          <GlobalForm {...this.state} handleSignForm ={this.handleSignForm }/>}
           
          <Switch>
            
          
            {auth.uid && <Route path="/" exact component={Dashboard}></Route>}
            {auth.uid && <Route path="/create" exact component={CreateProject}></Route>}
            {auth.uid && <Route path="/update/:id" exact component={UpdateProject}></Route>}
            <Route path="/project/:id"  exact component={ProjectDetails}></Route>
            <Route exact path="/signIn" render={() => (
  auth.uid &&(
    <Redirect to="/"/>
  )  
)}/>
            <Route exact path="/signUp" render={() => (
  auth.uid &&(
    <Redirect to="/"/>
  )  
)}/>
          </Switch>
          </div>

      </BrowserRouter>
     
    );
  }
}

const mapStateToProps =(state)=>{
  // console.log(state)
return{
auth: state.firebase.auth
}
}

export default connect(mapStateToProps)(App);
