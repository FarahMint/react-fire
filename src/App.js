import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import SideDrawer from "./components/layout/siderDrawer/SideDrawer";
import  BackDrop from "./components/layout/backdrop/Backdrop";

 import GlobalForm from "./components/AuthForm/globalForm/GlobalForm";
//  import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
 
import Home from "./components/Home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Notifications from "./components/dashboard/notifications/Notifications";
import CreateProject from "./components/projects/createProject/CreateProject";
import UpdateProject from "./components/projects/updateProject/UpdateProject";
import ProjectDetails from "./components/projects/projectsList/projectDetails/ProjectDetails";
 



// connect to redux state
// access firebase prop on state to see whether user login
import {connect}  from "react-redux";

class App extends Component {
 state ={
    isActive:false,
    sideDrawerOpen: false,
    
 }

// *********** NAVBAR ***********
 toggleNavHandler = ()=>{
  this.setState((prevState)=>({
    sideDrawerOpen: !prevState.sideDrawerOpen,
  }))
};

backdropHandler = () =>{
  this.setState({
    sideDrawerOpen: false
  })
};
// ***********SIGN UP/ IN***********
  handleAuthForm = () =>{
    this.setState((prevState)=>(

      {isActive: !prevState.isActive}
    )
    )
  };

  


  render() {

// CONTROL BACKFROP DISPLAY COMPONENT
    let backdrop;
    // console.log(this.props)
    const {auth} = this.props;

    if(this.state.sideDrawerOpen){
      backdrop =  <BackDrop click={this.backdropHandler}/>;
   }
// END CONTROL BACKFROP DISPLAY COMPONENT

    return (
      <BrowserRouter>
        <Navbar
          toggleNavHandler ={this.toggleNavHandler}
          show = {this.state.sideDrawerOpen} 
        />
        <SideDrawer 
          show = {this.state.sideDrawerOpen} 
          toggleNavHandler ={this.toggleNavHandler}/> 
        {backdrop}

        <>
       
        <Switch>

        {!auth.uid && <Route path="/" exact component={Home}></Route>}

      { !auth.uid && <Route exact path="/auth" render={() => 
          <GlobalForm 
          {...this.state} 
           handleAuthForm={this.handleAuthForm} />}
          />}
      

        {auth.uid && <Route path="/" exact component={Dashboard}></Route>}
      

        {auth.uid  && <Route path="/notifications" exact component={Notifications}></Route>}

        {auth.uid && <Route path="/create" exact component={CreateProject}></Route>}
        
        {auth.uid && <Route path="/update/:id" exact component={UpdateProject}></Route>}
        
        <Route path="/project/:id"  exact component={ProjectDetails}></Route>

        { auth.uid && <Route exact path="/auth" render={() =>  
          <Redirect to="/"/> }/>}

        </Switch>
      </>
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
