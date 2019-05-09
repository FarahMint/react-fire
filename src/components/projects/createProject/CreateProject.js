import React, { Component } from 'react';
// to connect compo to redux store 
import { connect } from "react-redux"
import {createProject} from "../../../store/actions/projectActions";

import {Redirect} from "react-router-dom";

 class CreateProject extends Component {
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
      //console.log(this.state)
      this.props.createProject(this.state)
    this.props.history.push("/")
    }
  render() {

    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signIn"/>
    return (
         
<form onSubmit={this.handleSubmit}>
 <div className="form-group">
 <h3>create your project</h3>
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
  <button type="submit" className="btn btn-primary">Create</button>
 </div>
   
 
</form>
 
    )
  }
}

 const mapStateToProps=(state)=>{
   return{
    auth: state.firebase.auth
   }

 }
 const mapDispatchToProps=(dispatch)=>{
   return{
    createProject: (project=> dispatch(createProject(project))), 
   }

 }

export default connect(mapStateToProps, mapDispatchToProps)( CreateProject)