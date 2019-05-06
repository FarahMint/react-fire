import React, {Component} from 'react';
import moment from "moment";
import {FaPen, FaTrash} from "react-icons/fa"

import {connect} from "react-redux"
// use 2 HOC & chain together
import {compose} from "redux"
//HOC with Firestore collection
import {firestoreConnect} from "react-redux-firebase";

import {
  // Redirect,
   Link} from "react-router-dom";

import {  deleteProject} from "../../store/actions/projectActions";

 class ProjectDetails extends Component {

   handledelete =(id)=>{
     
    this.props.deleteProject(id);
    this.props.history.push("/");
   }
   render(){

 const id = this.props.match.params.id;
 const {project, auth} = this.props;
 
 
  // {!auth.uid ?(<Redirect to="/signIn"/>):()}
 
  if(project){
    return(<div className="card__projDetails">
    
  <h5>{project.title} - </h5>
  <p>{project.content}</p>
  
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
      <FaTrash onClick={()=> this.handledelete(id) }/>
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection:"projects"} //-> collection we want to connect to
])
)( ProjectDetails)