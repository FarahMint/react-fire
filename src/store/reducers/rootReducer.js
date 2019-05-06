import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
// combine reducer into 1
import {combineReducers} from "redux";
// sync firestore to state
import { firestoreReducer} from "redux-firestore";
//check auth status - sync auth status to store state
import { firebaseReducer} from "react-redux-firebase";


const rootReducer =combineReducers({
 auth: authReducer,
 project: projectReducer,
 // contain firestore data- sync state to db
 // sync firestore to state
 firestore:firestoreReducer, 
 //check auth status - sync auth status to store state
firebase: firebaseReducer,
});

 export default rootReducer;