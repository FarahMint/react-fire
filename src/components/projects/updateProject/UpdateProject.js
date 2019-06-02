// https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input

import React, { Component } from 'react';
// to connect compo to redux store 
import { connect } from "react-redux"
import {getProjectDetails,  updateProject} from "../../../store/actions/projectActions";

import {Redirect} from "react-router-dom";
import "./updateProject.css"
 class UpdateProject extends Component {
    state={
        title:"",
       content:"",
       picture: null,
    }

   handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value, 
        })
    }

    // displayPicture =(event)=>{
    //   // 1 read the file
    //   let reader = new FileReader();
    //   // 2 get the file 
    //   let file = event.target.files[0]
    //   console.log(file);
    //   reader.onload =()=>{
    //     this.setState({
    //       picture:file,
    //       pictureUrl: reader.result
    //     })
    //   };
    //   reader.readAsDataURL(file);
    // }

     handleSubmit=(e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;
      //console.log(this.state)
    this.props.updateProject(id, this.state)
    this.props.history.push("/")
    }

    componentDidMount(){
        const id = this.props.match.params.id;
      this.props.getProjectDetails(id)
      
      // console.log( this.props.getProjectDetails(id))
    }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
    //   console.log(prevProps.project.project);
    //      console.log(this.props.project.project);


  if (this.props.project.project !== prevProps.project.project) {
  
  const {title, content, picture}=  this.props.project.project
         this.setState({
           title, content ,picture
          })
        }
      }
  
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signIn"/>
    return (
         
<form onSubmit={this.handleSubmit}>
 <h2>Update your Project</h2>
 <div className="form-group update__project">
 <label htmlFor="title" hidden>title</label>
 <input 
 type="title"  
 id="title" 
 name="title"
  className="form-control"
   placeholder="Enter title"
   value={this.state.title || ''}
   onChange={this.handleChange}
   /> 
 <label htmlFor="content" hidden>content</label>
 <textarea 
 type="content"
  id="content" 
  name="content" 
  className="form-control"
   placeholder="Enter content"
   value={this.state.content || ''}
   onChange={this.handleChange}
   > </textarea>

{/* <div>
   <input 
   type="file" 
   name="fileUpload" onChange={this.displayPicture}/>
 </div> */}
 
{/* <img src={this.state.picture}  alt={this.state.title} /> */}


   <button type="submit" className="btn-primary btn__update">Update</button>
 </div>
   

</form>
 
    )
  }
}

const mapStateToProps =(state, ownProps)=>{
 
    return{
       
      project: state.project,
      auth: state.firebase.auth
    }
  }

 
 const mapDispatchToProps=(dispatch)=>{
   return{
    updateProject: ((id, project)=> dispatch(updateProject(id,project))), 
    getProjectDetails: (id=> dispatch(getProjectDetails(id))), 
   }

 }

export default connect(mapStateToProps, mapDispatchToProps)( UpdateProject)