import React ,{useState} 
from 'react';
import {Redirect} from "react-router-dom";

/**COMPONENTS */
// import Tabs from './Tabs';
// import PersonalProject from "./PersonalProject";
import FilterProject  from "./FilterProject";
 import ProjectList from "../projects/projectsList/ProjectList";



/**REDUX */
import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";



const Dashboard =({projects, auth})=> {

/**filter all personal projects */
const personalProj = projects && projects.filter(project => auth.uid === project.authorId );
/** display state according to option selected*/
const[value, setValue]=  useState();
const[displayProjects, setDisplayProjects]=  useState();

 const handleChange= (event)=>{
  if( event.target.value.includes("all projects")){  
      setValue(event.target.value); 
      setDisplayProjects(<ProjectList  projects={projects} auth={auth} />)
    }else{
      setValue(event.target.value);
      setDisplayProjects(<ProjectList  projects={personalProj} auth={auth} />)
  } 
 }

   if (!auth.uid)return <Redirect to="/signIn"/>

    return (
      <div className="dashboard">
      
        <div className="title">
          {(!projects ) && <h2>Start creating project.</h2>}
        </div>

        <FilterProject 
        value= {value}
        handleChange={handleChange}/>



      <div className="featured__projects-center">
        {!displayProjects ? <ProjectList  projects={projects} auth={auth} />  : displayProjects}
      </div> 
              
       
        {/* removed tabs for filter
        <Tabs>
          <div label="all projects">
              <ProjectList  projects={projects} auth={auth} /> 
          </div>
          
          <div label="your personal project">
            <PersonalProject  projects={personalProj} auth={auth} />   
          </div>
        </Tabs> */}
        
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