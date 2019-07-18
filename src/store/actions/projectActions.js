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
    DELETE_ERROR 
  } from './actionTypes.js';



export const createProject = (project)=>{
    return (dispatch)=>{
        const {picture}= project;
        picture ?  
        dispatch(createProjectwithfile(project))        
        :
        dispatch(createProjectwithNofile(project)) 
    }
}

function createProjectwithNofile(project){
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // 1) make async call to db
        const firestore= getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
         // 2) add to collection 
        firestore.collection("projects").add({
            ...project, 
            authorFirstName: profile.firstName, 
            authorLastName: profile.lastName, 
            authorId:authorId, 
            createdAt: new Date() ,
         })
          // 3) dispatch action
        .then((docRef)=> dispatch({type:CREATE_PROJECT,project}))
        .catch((error) =>dispatch({ type:CREATE_PROJECT_ERROR, error}));  
    }
}


function createProjectwithfile(project){
    return ( dispatch, getState, {getFirebase, getFirestore})=>{
        // 1) make async call to db
        const firestore= getFirestore();
        const storage= getFirebase().storage().ref();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
        const {picture}= project;
          // 2) ref to file in storage uploaded
        const uploadTask = storage.child(`images/${new Date().getTime()}`).put(picture);
        //  3) upload file
        uploadTask.on('state_changed', (snapshot)=>{
            console.log(snapshot);
        }, (error) =>{
            // Handle unsuccessful uploads
        }, ()=> {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
            // console.log('File available at', downloadURL);
            // 4) add to collection after uploading file
            firestore.collection("projects").add({
                ...project, 
                picture:downloadURL,
                authorFirstName: profile.firstName, 
                authorLastName: profile.lastName, 
                authorId:authorId, 
                createdAt: new Date() ,
            })
        }) 
        //5) dispatch action
        .then(project=> dispatch({type:CREATE_PROJECT,project}))
        .catch(error => dispatch({ type:CREATE_PROJECT_ERROR, error}));       
    })
    }
}


// GET ALL PROJECTS
export const getAllProjects = ( )=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // 1) make async call to db
        const firestore= getFirestore();
        let projects= [];
         // 2) fetch all  projects from DB 
        firestore.collection("projects").get().then( (querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                projects.push(doc.data());
              });

             // 3) dispatch action
            dispatch({type:GET_ALL_PROJECTS, projects })
        }).catch(error=> dispatch({type:GET_ALL_PROJECTS_ERROR , error }));

    }
}
 

// GET A PROJECT
export const getProjectDetails = (id)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // 1) make async call to db
        const firestore= getFirestore();
        let project;
        // 2) find a project by id  from DB 
        let docRef = firestore.collection("projects").doc(id);

        docRef.get().then( doc=> {
                project = doc.data();
         // 3) dispatch action
                dispatch({  type:GET_PROJECT, project })
                
            }).catch(error=> dispatch({ type:GET_PROJECT_ERROR, error }));
    }
}

// UPDATE A <PROJECT></PROJECT>
export const updateProject = ( id, updateProject)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
            // 1) make async call to db
            const firestore= getFirestore();
              // 2) find project by id  in DB & update the relevant field
            firestore.collection("projects").doc(id).update({
                ...updateProject
            })
             // 3) dispatch action
            .then( ()=>  dispatch({type:UPDATE_PROJECT,updateProject}))
            .catch( error => dispatch({type:UPDATE_ERROR,error}));
    }
}

// DELETED A PROJECT
export const deleteProject = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        // 1) make async call to db
        const firestore = getFirestore()
          // 2) get project by id from DB & delete doc
            firestore.collection('projects').doc(id).delete()
             // 3) dispatch action
            .then( ()=>  dispatch({type:DELETE_PROJECT,id }))
            .catch( error =>dispatch({type:DELETE_ERROR,id}));
    }
   }
  