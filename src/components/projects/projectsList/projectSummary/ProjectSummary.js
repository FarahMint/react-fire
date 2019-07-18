import React from 'react';
import moment from "moment";
 

import "./projectSummary.css";

const ProjectSummary =({project, auth }) => {
  return (
    <article className="project__summary">
  
  <h5>{project.title} </h5>
  <div className="img-container">
  { project.picture ? 
  (<img src={project.picture} alt={project.title} className="tile"></img>) :
  (<img src={`https://via.placeholder.com/400x300/000000/FFFFFF/?text=${project.title}`} alt={project.title} className="tile"></img>)
}
  </div>
 

  <p>posted by:
 {auth.uid === project.authorId ? (
     <React.Fragment>
     <span>Me</span>
       </React.Fragment>
 ):
 (
  <React.Fragment>
  <span>   {project.authorFirstName} {project.authorLastName}
  </span>
    </React.Fragment>
 )}

 </p>
 <p>{moment(project.createdAt.toDate()).calendar()}</p>
  
</article>
    
  )
}
 
export default ProjectSummary;