import React  from 'react';
import moment from "moment";
import {FaPen, FaTrash} from "react-icons/fa"

import {connect} from "react-redux"
import { Link} from "react-router-dom";

import {  deleteProject} from "../../../../store/actions/projectActions";

import "./projectDetail.css";


const ProjectDetails= (props)=>{
// get the id from the route
 const id = props.match.params.id;
 // destructure the props property
 const {project, auth} = props;

//function to remove an item
 const handledelete =(id)=>{   
    // pass the function from the action
    props.deleteProject(id);
    // reroute to the home page
    props.history.push("/");
 }
 

  if(project){
    return(
    <div className="card__projDetails">
      <div className="proj-title">
      <h5>{project.title}</h5>
      </div>

    <div className="proj__info">
          <p>{project.content}</p>
          { project.picture &&
        <img src={project.picture}  alt={project.title} />
        }
    </div>

    <div className="small__text">
  
        <p>posted by: 
        {auth.uid !== project.authorId ? 
        
        (<React.Fragment>
          <span>
          {project.authorFirstName} {project.authorLastName}
            </span> - {moment(project.createdAt.toDate()).calendar()}
        </React.Fragment>):
        
        (
          <React.Fragment>
            <span>me</span> - {moment(project.createdAt.toDate()).calendar()}
            <Link to= {`/update/${id}`}
              >
          <button className="icon icon__pen"><FaPen/></button>
        
            
            </Link>
            <button className="icon icon__trash">
            <FaTrash onClick={()=> handledelete(id) }/>
            </button>
          </React.Fragment>
        )}
        </p> 
      </div>
    </div>)
    
    }else{ 
    return( <div className="container section project-details">
    <p>Loading project....</p>
      </div>)
    }
 
   }  
 
const mapStateToProps =(state, ownProps)=>{
  //console.log(state)
  const id = ownProps.match.params.id;

  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return{
    proj :state.firestore.projects,
    project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
   deleteProject: (id=> dispatch(deleteProject(id))), 
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)