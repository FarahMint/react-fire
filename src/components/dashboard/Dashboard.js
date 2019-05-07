import React from 'react'
import Notifications from "./Notifications"
import ProjectList from "../projects/ProjectList";

import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";

import {Redirect} from "react-router-dom";


  const Dashboard =({projects, auth, notifications})=> {


   if (!auth.uid)return <Redirect to="/signIn"/>
    return (
      <div className="dashboard">
      
        <div className="grid-one">
      {(projects &&  projects.length > 0) ?
       (<h2>Current project.</h2>) : 
      (<h2>Start creating project.</h2>)}
        <ProjectList  projects={projects} auth={auth}/>
        </div>
        <div className="grid-two">
        {notifications && notifications.length > 0 && <Notifications notifications={notifications}/>}
      
            </div>
        
        </div>
     
    )
  }
 


const mapStateToProps= (state)=>{
  //console.log(state);
  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:"projects" ,orderBy: ["createdAt", "desc"]} , {collection:"notifications" , limit:3 ,orderBy: ["time", "desc"]} //-> collection we want to connect to
])
)(Dashboard)