import React from 'react';
  import ProjectSummary from "../projects/projectsList/projectSummary/ProjectSummary";
  import {Link} from 'react-router-dom';

  /**ICON */
import { FaPlus} from "react-icons/fa";


const PersonalProject =({projects,auth})=> {
return(
        <>
        {projects.length===0  &&
        <>
           <p>let's start keep track of your project
             {" "}
           <Link to="/create" className="cta-btn">
              <FaPlus/>create
            </Link>
            </p> 
      </>}
      
    { /*{we have our perso project we can map*/}
     { projects && projects.map(project =>{
       return(  
         <Link to={`/project/${project.id}`}key={project.id}>
        <ProjectSummary project={project}  auth={auth}/>
        </Link>)
      })
    } 
      </>
    )}
  
  export default PersonalProject;