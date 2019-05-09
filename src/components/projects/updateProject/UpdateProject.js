// https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input

import React, { Component } from 'react';
// to connect compo to redux store 
import { connect } from "react-redux"
import {getProjectDetails,  updateProject} from "../../../store/actions/projectActions";

import {Redirect} from "react-router-dom";

 class UpdateProject extends Component {
    state={
        title:"",
       content:""
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
  
  const {title, content}=  this.props.project.project
         this.setState({
           title, content
          })
        }
      }
  
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signIn"/>
    return (
         
<form onSubmit={this.handleSubmit}>
 <div className="form-group">
 <h3>Update your Project</h3>
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
   <button type="submit" className="btn btn-primary">Update</button>
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