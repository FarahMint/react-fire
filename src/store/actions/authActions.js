export const signIn= (credentials)=>{
    // thanks to thunk we can hold dispatch process
    // & return a func instead
    // getFirebase to communicate with firebase project
return (dispatch, getState, {getFirebase, getFirestore}) =>{
    //init firebase
    const firebase= getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,credentials.password
    ).then(()=>{
        dispatch({type:"LOGIN_SUCCESS"})
    }).catch(err =>{ 
      dispatch({type:"LOGIN_ERROR", err}); 
        })
    }
}


// https://github.com/prescottprue/react-redux-firebase/issues/508
export const signOut= ()=>{
    // getFirebase to logout
return (dispatch, getState, {getFirebase}) =>{
    const firebase= getFirebase();
    firebase.auth().signOut();
    firebase.logout()
    .then(()=> dispatch({
        type:"SIGN_OUT_SUCCESS"
    }))
}

}
export const signUp= (newUser)=>{
    
return (dispatch, getState, {getFirebase, getFirestore})=>{
    //1 sign up user
    const firebase = getFirebase(); 
    const firestore = getFirestore(); 
    //create new user
    firebase.auth().createUserWithEmailAndPassword(
         newUser.email,
        newUser.password,
    ).then((response)=>{
        //create record for the new user in FS
        return firestore.collection("users")
        .doc(response.user.uid)
        .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0]+newUser.lastName[0],
        })
    }).then(()=>{
        dispatch({type: "SIGN_UP_SUCCESS"})
    }).catch(err =>{
        dispatch({type: "SIGN_UP_ERROR", err})
    })
}
}

  