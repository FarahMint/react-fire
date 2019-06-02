import React, { Component } from 'react';
// to connect compo to redux store 
import { connect } from "react-redux"
import {createProject, 
  // saveFileProject
} from "../../../store/actions/projectActions";

import {Redirect} from "react-router-dom";
import "./createProject.css"
 class CreateProject extends Component {
    state={
        title:"",
       content:"",
    }

//      fileHandler= (e)=>{
//       e.preventDefault();
//       let file = e.target.files[0]
//       console.log(file);
//       this.props.saveFileProject(file);
//  }

   handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value,         
        })
    
    }

     handleSubmit=(e)=>{
        e.preventDefault();
      //console.log(this.state)
      this.props.createProject(this.state)
    this.props.history.push("/")
    }
  render() {

    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signIn"/>
    return (
         
<form onSubmit={this.handleSubmit}>
 <h2>create your project</h2>
 <div className="form-group create__project">
 <div>
 <label htmlFor="title" hidden>title</label>
 <input 
 type="title"  
 id="title" 
 name="title"
  className="form-control"
   placeholder="Enter title"
   onChange={this.handleChange}
   /> 
 <label htmlFor="content" hidden>content</label>
 <textarea 
 type="content"
  id="content" 
  name="content" 
  className="form-control"
   placeholder="Enter content"
   value={this.state.content}
   onChange={this.handleChange}
   > </textarea>
  
 </div>

{/* working on file upload */}
 {/* <div>
   <input type="file" name="fileUpload" onChange={this.fileHandler}/>
 </div> */}
 
  <button type="submit" className="btn-primary btn__create">Create</button>
 </div>
   

</form>
 
    )
  }
}

 const mapStateToProps=(state)=>{
   return{
    auth: state.firebase.auth,
  
   }
 }
 const mapDispatchToProps=(dispatch)=>{
   return{
    createProject: (project=> dispatch(createProject(project))), 
    // saveFileProject: (data=> dispatch(saveFileProject(data))), 
   }

 }

export default connect(mapStateToProps, mapDispatchToProps)( CreateProject)