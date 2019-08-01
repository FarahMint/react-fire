import React from 'react';
import {Redirect} from "react-router-dom";

/**COMPONENTS */
import Tabs from './Tabs';
import ProjectList from "../projects/projectsList/ProjectList";
import PersonalProject from "./PersonalProject";

/**REDUX */
import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";

/**CSS */
import "./dashboard.css";

  const Dashboard =({projects, auth})=> {
    /**get all presonal projects */
  const personalProj = projects && projects.filter(project => auth.uid === project.authorId );

   if (!auth.uid)return <Redirect to="/signIn"/>

    return (
      <div className="dashboard">
      
        <div className="title">
          {(!projects ) && <h2>Start creating project.</h2>}
        </div>

      
        <Tabs>
          <div label="all projects">
              <ProjectList  projects={projects} auth={auth} /> 
          </div>
          
          <div label="your personal project">
            <PersonalProject  projects={personalProj} auth={auth} />   
          </div>
        </Tabs>
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