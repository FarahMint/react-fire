import {
    CREATE_PROJECT,
    CREATE_PROJECT_ERROR,
    GET_ALL_PROJECTS,
    GET_ALL_PROJECTS_ERROR ,
    GET_PROJECT, 
    GET_PROJECT_ERROR, 
    UPDATE_PROJECT, 
    UPDATE_ERROR, 
    DELETE_PROJECT,
    DELETE_ERROR,
    // ADD_DOCUMENT_STARTED, ADD_DOCUMENT_COMPLETED,ADD_DOCUMENT_ERROR
   
  } from '../actions/storageActionTypes';



// init state as default val
const initState ={
    projects:[
]
}

const projectReducer =(state = initState, action)=>{
 switch(action.type){
    case CREATE_PROJECT: 
    //  console.log("created project", action.project)
    return state;
    case CREATE_PROJECT_ERROR:
    console.log("created project error", action.err)
    return state;

    // GET ALL PROJECT
    case GET_ALL_PROJECTS:  
    console.log("get ALL projectS", action ,state)
    
    return {...state}
    case GET_ALL_PROJECTS_ERROR:
    console.log("Get all projects error", action.err)
    return state;

    // GET PROJECT
    case GET_PROJECT:  console.log("get project", action.project ,state)
    const{project} = action;
    return {...state, project}
    case GET_PROJECT_ERROR:
    console.log("Get a project error", action.err)
    return state;

    // UPDATE PROJECT
    case UPDATE_PROJECT:  console.log("updatedproject", action.updateProject , state)
 
    return state ;
    case UPDATE_ERROR:
    console.log("Update project error", action.err)
    return state;

    // DELETE PROJECT
    case DELETE_PROJECT:  console.log("deleted project", action.id , state)
 
    return state  ;
    
    case DELETE_ERROR:
    console.log("delete project error", action.err)
    return state.projects;



    default:
    return state;
}


}

export default projectReducer;