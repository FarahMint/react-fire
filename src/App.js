import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import SideDrawer from "./components/siderDrawer/SideDrawer";
import  BackDrop from "./components/layout/backdrop/Backdrop";
import GlobalForm from "./components/layout/globalForm/GlobalForm";
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
    isActive: false,
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

  handleSignForm = ()=>{
    this.setState((prevState)=>({
      isActive: !prevState.isActive
    }))
  }


  render() {
    let backdrop;
    // console.log(this.props)
    const {auth} = this.props;

    if(this.state.sideDrawerOpen){
      backdrop =  <BackDrop click={this.backdropHandler}/>;
   }

    return (
     
      <BrowserRouter>
   
          <Navbar
          toggleNavHandler ={this.toggleNavHandler}
          sideDrawerOpen = {this.state.sideDrawerOpen} 
          />
          <SideDrawer 
    show = {this.state.sideDrawerOpen} 
    toggleNavHandler ={this.toggleNavHandler}   /> 
     {backdrop}

          <div className="app__container">
          {!auth.uid &&
          <GlobalForm {...this.state} handleSignForm ={this.handleSignForm }/>}
           
          <Switch>
            
          
            {auth.uid && <Route path="/" exact component={Dashboard}></Route>}



            {auth.uid  && <Route path="/notifications" exact component={Notifications}></Route>}


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
