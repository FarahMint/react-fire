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
       pictureUrl: "",
    }

   handleChange=(e)=>{
        this.setState({
           [e.target.name] : e.target.value, 
        })
    }

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
  
  const {title, content,pictureUrl}=  this.props.project.project
         this.setState({
           title, content ,pictureUrl
          })
        }
      }
  
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signIn"/>
    return (
         
<form onSubmit={this.handleSubmit}>
 <h2>update your project</h2>
 <div className="form-group create__project">

 <div>
 <label htmlFor="title" hidden>title</label>
 <input 
 type="title"  
 id="title" 
 name="title"
 value={this.state.title || ''}
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
 <img src={this.state.pictureUrl}  alt={this.state.title} />  
 </div>
  <button type="submit" className="btn-primary btn__create">Update</button>
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