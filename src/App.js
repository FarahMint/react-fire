import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Redirect} from 'react-router-dom';


/**COMPONENTS */
import Navbar from './components/layout/navbar/Navbar';
import SideDrawer from "./components/layout/siderDrawer/SideDrawer";
import  BackDrop from "./components/layout/backdrop/Backdrop";
import GlobalForm from "./components/AuthForm/globalForm/GlobalForm";
import Home from "./components/Home/Home";
import Dashboard from "./components/dashboard/Dashboard";

import CreateProject from "./components/projects/createProject/CreateProject";
import UpdateProject from "./components/projects/updateProject/UpdateProject";
import ProjectDetails from "./components/projects/projectsList/projectDetails/ProjectDetails";
 



//CONNECT TO REDUX STORE
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
          {/* ROUTE LANDING PAGE WHEN NO LOGGED IN */}
        {!auth.uid && <Route path="/" exact component={Home}></Route>}

         {/* ROUTE AUTH PAGE FOR LOGIN/SIGNUP */}
         {!auth.uid && <Route exact path="/auth" render={() => 
          <GlobalForm 
          {...this.state} 
           handleAuthForm={this.handleAuthForm} />}
          />}
      
        {/* ROUTE HOME PAGE WHEN LOGGED IN */}
        {auth.uid && <Route path="/" exact component={Dashboard}></Route>}

          {/* ROUTE CREATE PAGE  */}
        {auth.uid && <Route path="/create" exact component={CreateProject}></Route>}
        
         {/* ROUTE UPDATE PAGE FOR SPECIFIC PROJECT  */}
        {auth.uid && <Route path="/update/:id" exact component={UpdateProject}></Route>}
        
         {/* ROUTE PROJECT PAGE FOR SPECIFIC PROJECT  */}
        <Route path="/project/:id"  exact component={ProjectDetails}></Route>

           {/* REDIRECT WHEN SIGNUP/LOGIN TO HOME PAGE */}
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
