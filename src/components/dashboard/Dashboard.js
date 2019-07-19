import React from 'react'
 
import ProjectList from "../projects/projectsList/ProjectList";
//  import PersonalProject from "../projects/personalProject/personalProject";

import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";

import {Redirect} from "react-router-dom";

import "./dashboard.css";

  const Dashboard =({projects, auth})=> {
    // const personalProj = projects && projects.filter(project => auth.uid === project.authorId );
    // console.log(personalProj);
    
   if (!auth.uid)return <Redirect to="/signIn"/>
    return (
      <div className="dashboard">
      
      <div className="title">
        {(projects &&  projects.length > 0) ?
        (<h2>Current project.</h2>) : 
        (<h2>Start creating project.</h2>)}
      </div>

        <div className="featured__projects-center">
        <ProjectList  projects={projects} auth={auth}/>
        {/* <PersonalProject  projects={projects} auth={auth}/> */}

        </div>
      </div>
     
    )
  }
 


const mapStateToProps= (state)=>{
  //console.log(state);
  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:"projects" ,orderBy: ["createdAt", "desc"]} , {collection:"notifications" , limit:3 ,orderBy: ["time", "desc"]} //-> collection we want to connect to
])
)(Dashboard)