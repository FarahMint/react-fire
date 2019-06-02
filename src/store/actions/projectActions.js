import {
    CREATE_PROJECT,
    CREATE_PROJECT_ERROR,
    GET_ALL_PROJECTS,
    // GET_ALL_PROJECTS_ERROR ,
    GET_PROJECT, 
    // GET_PROJECT_ERROR, 
    UPDATE_PROJECT, 
    // UPDATE_ERROR, 
    DELETE_PROJECT,
    // DELETE_ERROR,
    // ADD_DOCUMENT_STARTED, ADD_DOCUMENT_COMPLETED,ADD_DOCUMENT_ERROR
   
  } from './storageActionTypes';

export const createProject = (project)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
// 1) make async call to db
const firestore= getFirestore();
const storage= getFirebase().storage().ref();
const profile = getState().firebase.profile;
const authorId = getState().firebase.auth.uid;

const {picture}= project;

const uploadTask = storage.child(`images/${new Date().getTime()}`).put(picture);
uploadTask.on('state_changed', function(snapshot){
    console.log(snapshot);
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      firestore.collection("projects").add({
        ...project, 
        picture:downloadURL,
        authorFirstName: profile.firstName, 
        authorLastName: profile.lastName, 
        authorId:authorId, 
        createdAt: new Date() ,
     })
    }).then(()=>{
       // 2) dispatch action
        dispatch({type:CREATE_PROJECT,project})
// console.log(getState().firebase);
                     }
                 ).catch(err=>{
                     dispatch({
                         type:CREATE_PROJECT_ERROR,
                         err
                     })
                 })
  });

    }
}


// GET ALL PROJECTS
export const getAllProjects = ( )=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
     
// 1) make async call to db
const firestore= getFirestore();
 let projects= [];
  firestore.collection("projects").get().then( (querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
     
        projects.push(doc.data());
        console.log( projects);
    });
    
        dispatch({
            type:GET_ALL_PROJECTS,
            projects
        })
   
}).catch(function(error) {
    console.log("Error getting all document:", error);
});

    }
}


// GET A PROJECT
export const getProjectDetails = (id)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
// 1) make async call to db
const firestore= getFirestore();
 let project;
let docRef = firestore.collection("projects").doc(id);

docRef.get().then( (doc)=> {
        project = doc.data()
        dispatch({
            type:GET_PROJECT,
            project,
        })
   
}).catch(function(error) {
    console.log("Error getting document:", error);
});

    }
}
// UPDATE A PROJECT
export const updateProject = ( id, updateProject)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
// 1) make async call to db
const firestore= getFirestore();

  firestore.collection("projects").doc(id).update({
      ...updateProject
  }).then( ()=> {
       
        dispatch({
            type:UPDATE_PROJECT,
            updateProject,
        })
   
}).catch(function(error) {
    console.log("Error updating document:", error);
});

    }
}

// DELETED A PROJECT
export const deleteProject = (id) => {
    return (dispatch, getState, { getFirestore }) => {
   const firestore = getFirestore()
     firestore.collection('projects').doc(id).delete()
     .then( ()=> {
        dispatch({
            type:DELETE_PROJECT,
            id,
        })
   
}).catch(function(error) {
    console.log("Error deleting document:", error);
});

    }
   }
  