import React from 'react';
import moment from "moment";
 

import "./projectSummary.css";

const ProjectSummary =({project, auth }) => {
  return (
    <div className="project__summary">
  
  <h5>{project.title}</h5>
  <p>posted by:
 {auth.uid === project.authorId ? (
     <React.Fragment>
     <span>Me</span>
       </React.Fragment>
 ):
 (
  <React.Fragment>
  <span>   {project.authorFirstName} {project.authorLastName}</span>
    </React.Fragment>
 )}
 </p>

 {/* working on img upload */}
 {/* { project.imageUrl &&
<img src={project.imageUrl}  alt={project.title} />
} */}

  <p className="card-text text-muted">created  {moment(project.createdAt.toDate()).calendar()}</p> 
  
</div>
    
  )
}
 
export default ProjectSummary;