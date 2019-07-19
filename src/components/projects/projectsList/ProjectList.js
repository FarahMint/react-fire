import React from 'react';
import ProjectSummary from "./projectSummary/ProjectSummary";
import {Link} from 'react-router-dom';

const ProjectList =({projects,auth})=> {
  
  return (
      <>
  { /*{we have project we can map*/}
   { projects && projects.map(project =>{
     return(  
       <Link to={`/project/${project.id}`}key={project.id}>
      <ProjectSummary project={project}  auth={auth}/>
      </Link>


     )
   })}

    
    
    </>
  )
}

export default ProjectList;