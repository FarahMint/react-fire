import React, { Component } from 'react';

import {FaUpload} from "react-icons/fa"
// to connect compo to redux store 
import { connect } from "react-redux"
import {createProject, 
  // saveFileProject
} from "../../../store/actions/projectActions";

import  PreviewPicture from "./PreviewPicture";

import {Redirect} from "react-router-dom";
import "./createProject.css"
 class CreateProject extends Component {
    state={
        title:"",
       content:"",
       picture:null,
       pictureUrl:null
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


    displayPicture =(event)=>{
      // 1 read the file
      let reader = new FileReader();
      // 2 get the file 
      let file = event.target.files[0]
      console.log(file);
      reader.onload =()=>{
        this.setState({
          picture:file,
          pictureUrl: reader.result
        })
      };
      reader.readAsDataURL(file);

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
 required
  className="form-control"
   placeholder="Enter a title"
   onChange={this.handleChange}
   /> 
 <label htmlFor="content" hidden>content</label>
 <textarea 
 rows="10"
 type="content"
  id="content" 
  name="content" 
  className="form-control"
   placeholder="Enter project description"
   value={this.state.content}
   onChange={this.handleChange}
   > </textarea>
 </div>

 

{/* working on file upload */}
 <div    className="upload__display">
   <input 
   type="file" 
   className="inputfile"
   name="fileUpload"
   accept="image/png, image/jpeg"
   id="fileUpload" onChange={this.displayPicture}/>
 <label htmlFor="fileUpload" >
   <FaUpload/> Choose an image</label>

 {this.state.pictureUrl &&
 <PreviewPicture  pictureUrl ={this.state.pictureUrl}/>
}
 </div>
 </div>
  <button type="submit" className="btn-primary btn__create">Create</button>
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